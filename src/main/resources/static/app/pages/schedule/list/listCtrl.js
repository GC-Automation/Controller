
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.schedule.list')
        .config(function ($mdThemingProvider) {


            $mdThemingProvider.theme('default')
                .primaryPalette('blue-grey')
            ;

        })
        .controller('listScheduleCtrl', listScheduleCtrl);

    /** @ngInject */
    function listScheduleCtrl($scope, $http, $mdDialog) {
        var vm = this;
        $scope.theme = 'blur';

        function loadSchedules() {
            console.log("Running");
            $http.get('/schedules')
                .then(function (data) {

                    if (data.data._embedded != undefined) {

                        vm.schedules = data.data._embedded.schedules;
                    }
                    else {
                        console.log("Undefined")
                        vm.schedules = [];
                    }
                });

        }

        loadSchedules();

        vm.scheduleText = function (cron) {
            return prettycron.toString(cron);
        }


        vm.setClickedRow = function (ev, _index) {  //function that sets the value of selectedRow to current index
            console.log(_index);
            $mdDialog.show({
                locals: {index: _index},
                controller: editScheduleDialogCtrl,
                windowClass: 'modal-fit',
                controlerAs: 'vm',
                templateUrl: 'app/pages/schedule/editSchedule/editScheduleDialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,

                clickOutsideToClose: true,
                fullscreen: true
            })
                .then(function (answer) {
                    vm.status = 'Data "' + answer + '".';
                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
        }
    }

    function editScheduleDialogCtrl($scope, $mdDialog, index, $http) {
        var vm = this;
        $scope.myIndex = $.extend(true, {}, index);
        $scope.channelsList = [
            {"id": "sol1-1", "name": "Algeria", "unit": "Algeria"},
            {"id": "sol1-2", "name": "Argentina", "unit": "Algeria"},
            {"id": "sol1-3", "name": "Australia", "unit": "Algeria"},
            {"id": "sol1-4", "name": "Belgium", "unit": "Algeria"},
            {"id": "sol2-1", "name": "Bosnia ", "unit": "Algeria2"},
            {"id": "sol2-2", "name": "Brazil", "unit": "Algeria2"},
            {"id": "sol2-3", "name": "Cameroon", "unit": "Algeria2"},
            {"id": "sol2-4", "name": "Chile", "unit": "Algeria2"}
        ];
        $scope.loadChannels = function ($query) {
            console.log("Im here!!");

            return $scope.channelsList.filter(function (channel) {
                return channel.name.toLowerCase().indexOf($query.toLowerCase()) != -1;

            })
        };

        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            if (answer === 'Save') {
                console.log(index);
                $.extend(true, index, $scope.myIndex);
                console.log($scope.myIndex);
            }
            $mdDialog.hide(answer);
        };
    }
})();