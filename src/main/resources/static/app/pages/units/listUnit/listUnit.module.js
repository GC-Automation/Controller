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

//
// var ListUnitComponent = react.createClass({
// propTypes:{
//     id:React.PropTypes.string.isRequired,
//     name:React.PropTypes.string.isRequired,
//     channelsize:React.PropTypes.string.isRequired,
//     sensorsize:React.PropTypes.string.isRequired,
// },
//     render:function () {
//         return <tr>
//             <td ng-class="align-left">{this.props.name}</td>
//             <td ng-class="align-left">{this.props.channelsize}</td>
//             <td ng-class="align-left">{this.props.sensorsize}</td>
//             </tr>;
//     }
// })
//     BlurAdmin.pages.units.listUnit.value('ListUnitComponent',ListUnitComponent)  ;
})();


