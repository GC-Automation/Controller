
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
    function listScheduleCtrl($scope, $mdDialog) {
        var vm = this;
        $scope.theme = 'blur';
        vm.schedules = [
            {
                ScheduleName: 'Schedule1',
                Schedule:
                    [
                        {Id: 'Mo', Name: 'Monday', Value: true, From: '57600', To: '64800'},
                        {Id: 'Tu', Name: 'Tuesday', Value: true, From: '57600', To: '64800'},
                        {Id: 'We', Name: 'Wednesday', Value: false, From: '57600', To: '64800'},
                        {Id: 'Th', Name: 'Thursday', Value: false, From: '57600', To: '64800'},
                        {Id: 'Fr', Name: 'Friday', Value: false, From: '57600', To: '64800'},
                        {Id: 'Sa', Name: 'Saturday', Value: false, From: '57600', To: '64800'},
                        {Id: 'Su', Name: 'Sunday', Value: false, From: '57600', To: '64800'}
                    ],
                devices: [{"id": "sol1-1", "name": "Algeria", "unit": "Algeria"}]
            },
            {
                ScheduleName: 'Schedule2',
                Schedule:
                    [
                        {Id: 'Mo', Name: 'Monday', Value: true, From: '57600', To: '64800'},
                        {Id: 'Tu', Name: 'Tuesday', Value: true, From: '57600', To: '64800'},
                        {Id: 'We', Name: 'Wednesday', Value: false, From: '57600', To: '64800'},
                        {Id: 'Th', Name: 'Thursday', Value: false, From: '57600', To: '64800'},
                        {Id: 'Fr', Name: 'Friday', Value: true, From: '57600', To: '64800'},
                        {Id: 'Sa', Name: 'Saturday', Value: true, From: '57600', To: '64800'},
                        {Id: 'Su', Name: 'Sunday', Value: false, From: '57600', To: '64800'}
                    ],
                devices: [{"id": "sol2-2", "name": "Brazil", "unit": "Algeria2"}, {
                    "id": "sol2-3",
                    "name": "Cameroon",
                    "unit": "Algeria2"
                }]
            },
            {
                ScheduleName: 'Schedule3',
                Schedule:
                    [
                        {Id: 'Mo', Name: 'Monday', Value: true, From: '57600', To: '64800'},
                        {Id: 'Tu', Name: 'Tuesday', Value: true, From: '57600', To: '64800'},
                        {Id: 'We', Name: 'Wednesday', Value: false, From: '57600', To: '64800'},
                        {Id: 'Th', Name: 'Thursday', Value: false, From: '57600', To: '64800'},
                        {Id: 'Fr', Name: 'Friday', Value: true, From: '57600', To: '64800'},
                        {Id: 'Sa', Name: 'Saturday', Value: false, From: '57600', To: '64800'},
                        {Id: 'Su', Name: 'Sunday', Value: true, From: '57600', To: '64800'}
                    ],
                devices: []
            }

        ];

        vm.listDays = function (schedule) {
            var value = '';
            angular.forEach(schedule, function (aSchedule) {
                if (aSchedule.Value === true) {
                    value += aSchedule.Name + ',';
                }
            });
            return value.slice(0, -1);
        };
        vm.listDevices = function (devices) {
            var value = '';
            angular.forEach(devices, function (aDevices) {

                value += aDevices.name + ',';

            });
            return value.slice(0, -1);
        };
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