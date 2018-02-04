(function () {
    'use strict';

    angular.module('BlurAdmin.pages.units.listUnit')
        .controller('listUnitCtrl', listUnitCtrl);

    /** @ngInject */
    function listUnitCtrl($scope, $http) {
        var vm = this;
        console.log("Loaded ListUnits Ctrl");
        vm.sizeof = function (item) {
            return item.length;
        };

        function loadUnits() {
            console.log("Running");
            $http.get('/units')
                .then(function (data) {

                    if (data.data._embedded != undefined) {

                        vm.unitList = data.data._embedded.units;
                    }
                    else {
                        console.log("Undefined")
                        vm.unitList = [];
                    }
                });

        }

        loadUnits();

        // vm.unitList ;

        function loadChannels() {
            console.log("Running");
            $http.get('/channels')
                .then(function (data) {
                    if (data.data._embedded != undefined) {
                        vm.channelsList = data.data._embedded.channels;
                    }
                    else {
                        console.log("Undefined")
                        vm.channelsList = [];
                    }
                });

        }

        loadChannels();


        vm.setClickedRow = function (ev, index) {  //function that sets the value of selectedRow to current index

            if (index.state == 'on') {
                index.state = 'off';
            }
            else if (index.state == 'off') {
                index.state = 'on';
            }
            console.log(index);
        }
    }

})();

