/**
 * Created by Gabriel on 02/11/2016.
 */
(function() {
    'use strict'

    var app = angular.module('app');

    app.controller('JSController', ['$scope', JSController]);

    function JSController($scope) {
        var vm = this;
        var parent = $scope.$parent.main;
        parent.menus = ['Home', 'Javascript'];

        vm.alterarMenu = parent.alterarMenu;
    }
})();