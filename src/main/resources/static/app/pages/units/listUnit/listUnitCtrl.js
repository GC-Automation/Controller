(function () {
    'use strict';

    angular.module('BlurAdmin.pages.units.listUnit')
        .controller('listUnitCtrl', listUnitCtrl);

    /** @ngInject */
    function listUnitCtrl($scope) {
        var vm = this;
        console.log("Loaded ListUnits Ctrl");
        vm.sizeof = function (item) {
            return item.length;
        };
        vm.unitList = [
            {
                id: 'chr1',
                name: 'Garden',
                channels: [
                    {
                        id: 'chr1-1',
                        name: 'GardenChnl',
                        state: 'on'
                    }
                ],
                sensors: []
            },
            {
                id: 'chr2',
                name: 'Garden',
                channels: [
                    {
                        id: 'chr2-1',
                        name: 'GardenChnl2',
                        state: 'off'
                    },
                    {
                        id: 'chr2-2',
                        name: 'GardenChnl2',
                        state: 'on'
                    }
                ]
                ,
                sensors: []
            }
        ];

        vm.channelsList = function () {
            var channel = [];

            angular.forEach(vm.unitList, function (unit) {

                angular.forEach(unit.channels, function (channels) {

                    channel.push(channels)

                });

            });
            console.log("Channel Print:");
            console.log(channel);
            return channel;
        }

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

