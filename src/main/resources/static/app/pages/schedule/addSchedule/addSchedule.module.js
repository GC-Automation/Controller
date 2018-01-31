/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.schedule.addSchedule', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('schedule.addSchedule',
                {
                    url: '/addSchedule',
                    templateUrl: 'app/pages/schedule/addSchedule/addSchedule.html',
                    controller: 'addScheduleCtrl',
                    controllerAs: 'vm',
                    title: 'Add Schedule',
                    sidebarMeta: {
                        order: 200,
                    },
                });
    }

})();
