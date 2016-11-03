/**
 * Created by Gabriel on 31/10/2016.
 */
(function() {
    'use strict'

    var app = angular.module('app');

    app.service('MenuService', ['$http', MenuService]);

    function MenuService($http) {
        var vm = this;

        vm.buscarMenus = function() {
            return $http.get('json/menus.json')
        }

        return vm;
    }

})();