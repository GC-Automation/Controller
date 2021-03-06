/**
 * @author a.demeshko
 * created on 22.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .directive('ionSlider', ionSlider);

    /** @ngInject */
    function ionSlider($timeout) {
        return {
            restrict: 'EA',
            require: '^ngModel',
            template: '<div></div>',
            replace: true,
            scope: {

                min: '@',
                max: '@',
                type: '@',
                prefix: '@',
                maxPostfix: '@',
                prettify: '=',
                prettifySeparator: '@',
                grid: '=',
                gridMargin: '@',
                postfix: '@',
                step: '@',
                hideMinMax: '@',
                hideFromTo: '@',
                from: '=',
                to: '=',
                mininterval: '=',
                maxinterval: '=',
                draginterval: '=',
                disable: '=',
                onchange: '=',
                onFinish: '=',
                values: '=',
                istime: '@',
                ngModel: '&?',
                timeout: '@'

            },
            link: function ($scope, element, attrs, modelCtrl) {
                (function init() {


                    var me;
                    if ($scope.istime == "true") {
                        me = function (num) {
                            var hours = Math.floor(num / (60 * 60));
                            var divisor_for_minutes = num % (60 * 60);
                            var minutes = Math.floor(divisor_for_minutes / 60);
                            // var divisor_for_seconds = divisor_for_minutes % 60;
                            // var seconds = Math.ceil(divisor_for_seconds);
                            return hours + ":" + minutes;
                        }
                    }
                    $(element).ionRangeSlider({
                        min: $scope.min,
                        max: $scope.max,
                        type: $scope.type,
                        prefix: $scope.prefix,
                        maxPostfix: $scope.maxPostfix,
                        prettify_enabled: $scope.prettify,
                        prettify_separator: $scope.prettifySeparator,
                        grid: $scope.grid,
                        gridMargin: $scope.gridMargin,
                        postfix: $scope.postfix,
                        step: $scope.step,
                        hideMinMax: $scope.hideMinMax,
                        hideFromTo: $scope.hideFromTo,
                        from: $scope.from,
                        to: $scope.to,
                        min_interval: $scope.mininterval,
                        max_interval: $scope.maxinterval,
                        drag_interval: true,
                        disable: $scope.disable,
                        onChange: function () {
                            console.log($scope);
                            $scope.onchange();
                        }(),
                        onFinish: $scope.onFinish,
                        values: $scope.values,
                        prettify: me

                        // $scope.onChange,
                    });
                })();

                function setSliderRange() {
                    $scope.$evalAsync(function () {
                        var values = $(element).prop('value').split(';');
                        modelCtrl.$setViewValue(values);
                    });
                }

                $scope.$watch('min', function (value) {
                    $timeout(function () {
                        $(element).data("ionRangeSlider").update({min: value});
                    });
                }, true);
                $scope.$watch('max', function (value) {
                    $timeout(function () {
                        $(element).data("ionRangeSlider").update({max: value});
                    });
                });
                $scope.$watch('from', function (value) {
                    $timeout(function () {
                        $(element).data("ionRangeSlider").update({from: value});
                    });
                });
                $scope.$watch('to', function (value) {
                    $timeout(function () {
                        $(element).data("ionRangeSlider").update({to: value});
                    });
                });
                $scope.$watch('disable', function (value) {
                    $timeout(function () {
                        $(element).data("ionRangeSlider").update({disable: value});
                    });
                });

            }
        };
    }

})();