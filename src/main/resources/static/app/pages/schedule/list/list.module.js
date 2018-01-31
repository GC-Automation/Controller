/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.schedule.list', ['ngMaterial', 'ngMessages', 'ngTagsInput'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('schedule.list',
                {
                    url: '/list',
                    templateUrl: 'app/pages/schedule/list/list.html',
                    controller: 'listScheduleCtrl',
                    controllerAs: 'vm',
                    title: 'List',
                    sidebarMeta: {
                        order: 199,
                    },
                });
    }

})();
