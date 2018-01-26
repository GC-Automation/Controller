/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.schedule', ['ui.select', 'ngSanitize'
        // 'BlurAdmin.pages.schedule.addSchedule'
        // 'BlurAdmin.pages.schedule.listSchedule'
        // 'BlurAdmin.pages.ui.typography',
        // 'BlurAdmin.pages.ui.buttons',
        // 'BlurAdmin.pages.ui.icons',
        // 'BlurAdmin.pages.ui.modals',
        // 'BlurAdmin.pages.ui.grid',
        // 'BlurAdmin.pages.ui.alerts',
        // 'BlurAdmin.pages.ui.progressBars',
        // 'BlurAdmin.pages.ui.notifications',
        // 'BlurAdmin.pages.ui.tabs',
        // 'BlurAdmin.pages.ui.slider',
        // 'BlurAdmin.pages.ui.panels',
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('schedule', {
                url: '/schedule',
                template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                title: 'Schedule',

                sidebarMeta: {
                    icon: 'ion-ios-calendar',
                    order: 502,
                },
            })
    .state('schedule.addSchedule',
            {
                url: '/addSchedule',
                templateUrl: 'app/pages/schedule/addSchedule/addSchedule.html',
                controller: 'addScheduleCtrl',
                controllerAs:'vm',
                title: 'Add Schedule',
                sidebarMeta: {
                    order: 200,
                },
            });
    }

})();
