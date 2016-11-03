/**
 * Created by Gabriel on 31/10/2016.
 */
(function() {
    'use strict'

    var app = angular.module('app');

    app.service('ContatoService', ['$http', ContatoService]);

    function ContatoService($http) {
        var vm = this;

        vm.buscarContatos = function() {
            return $http.get('json/contatos.json')
        }

        return vm;
    }

})();