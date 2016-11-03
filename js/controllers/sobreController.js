/**
 * Created by Gabriel on 02/11/2016.
 */
(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('SobreController', ['$scope', SobreController]);

    function SobreController($scope) {
        var parent = $scope.$parent.main;
        parent.menus = ['Home', 'Sobre'];
    }
})();