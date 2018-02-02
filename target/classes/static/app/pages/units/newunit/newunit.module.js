/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.units.newunit', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('units.newunit', {
          url: '/newunit',
          templateUrl: 'app/pages/units/newunit/newunit.html',
            controller: 'newunitCtrl',
            controllerAs: 'vm',
          title: 'New units',
          sidebarMeta: {
            order: 500,
          },
        });
  }

})();
