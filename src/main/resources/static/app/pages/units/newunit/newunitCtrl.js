(function () {
    'use strict';

    angular.module('BlurAdmin.pages.units.listUnit')
        .controller('newunitCtrl', newunitCtrl);

    /** @ngInject */
    function newunitCtrl($scope, toastr, toastrConfig) {
        var vm = this;
        console.log("Loaded ListUnits Ctrl");
        vm.sizeof = function (item) {
            return item.length;
        };
        //TODO:lead newUnits from backserver in json format
        vm.newUnitList = [
            {
                id: 'chr1',
                name: 'Garden'
            },
            {
                id: 'chr2',
                name: 'Garden'
            }
        ];

        var openedToasts = [];
        $scope.options = {
            autoDismiss: false,
            positionClass: 'toast-top-right',
            type: 'info',
            timeOut: '5000',
            extendedTimeOut: '2000',
            allowHtml: false,
            closeButton: false,
            tapToDismiss: true,
            progressBar: false,
            newestOnTop: true,
            maxOpened: 0,
            preventDuplicates: true,
            preventOpenDuplicates: false,
            title: "Some title here",
            msg: "Type your message here"
        };

        vm.adopt = function (ev, index) {  //function that sets the value of selectedRow to current index

            //TODO:Send index to backserver to add to db
            console.log(index);
            openedToasts.push(toastr["info"]("Trying to add " + index.name + " to list of units.", "Adding " + index.name, "{}"));
        }
    }

})();

