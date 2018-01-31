(function () {
    'use strict';

    angular.module('BlurAdmin.pages.schedule.addSchedule')
        .controller('addScheduleCtrl', addScheduleCtrl);

    /** @ngInject */
    function addScheduleCtrl($scope) {
        var vm = this;
        console.log("Loaded Schedule Ctrl");
        vm.scheduleName = '';
        vm.schedule = [{Id: 'Mo', Name: 'Monday', Value: false}, {
            Id: 'Tu',
            Name: 'Tuesday',
            Value: false,
            From: '57600',
            To: '64800'
        }, {Id: 'We', Name: 'Wednesday', Value: false, From: '57600', To: '64800'}, {
            Id: 'Th',
            Name: 'Thursday',
            Value: false,
            From: '57600',
            To: '64800'
        }, {Id: 'Fr', Name: 'Friday', Value: false, From: '57600', To: '64800'}, {
            Id: 'Sa',
            Name: 'Saturday',
            Value: false,
            From: '57600',
            To: '64800'
        }, {Id: 'Su', Name: 'Sunday', Value: false, From: '57600', To: '64800'}];

        vm.productInfo = {};
        vm.shipment = {};

vm.saveValues=function (data){
    console.log(data);
};
        vm.isChkValid = function() {


            var checkedCount = 0;
            angular.forEach(vm.chosenDays, function(chosenDays) {

                if ( chosenDays ) {
                    checkedCount++;
                }
            });

            var minRequiredValidity = checkedCount >= 1;
            return minRequiredValidity;
        };
    }

})();

