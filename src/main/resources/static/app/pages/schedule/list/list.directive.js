/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.schedule')
        .directive('listSchedule', addSchedule);

    /** @ngInject */
    function addSchedule() {
        return {
            restrict: 'E',
            controller: 'listScheduleCtrl',
            templateUrl: 'app/pages/schedule/list/list.html'
        };
    }
})();