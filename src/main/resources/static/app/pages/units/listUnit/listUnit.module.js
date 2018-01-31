/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.units.listUnit', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('units.listUnit', {
                url: '/listUnit',
                templateUrl: 'app/pages/units/listUnit/listUnit.html',
                title: 'List Units',
                controller: 'listUnitCtrl',
                controllerAs: 'vm',
                sidebarMeta: {
                    order: 500,
                },
            });
    }

})();
