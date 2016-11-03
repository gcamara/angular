/**
 * Created by Gabriel on 02/11/2016.
 */
(function() {
    'use strict'

    var app = angular.module('app');

    app.controller('AngularController', ['$scope', '$rootScope', 'AngularService', AngularController]);

    function AngularController($scope, $rootScope, service) {
        var vm = this;
        var parent = $scope.$parent.main;
        parent.menus = ['Home', 'AngularJS'];

        //Variaveis de demonstração - Primeira seção
        vm.oneWayBindMensagem = 'Mensagem que não será alterada';
        vm.twoWayBindMensagem = 'Altere essa mensagem';
        vm.oneTimeBindingMensagem = 'Olá, mundo!';

        //Variaveis de demonstração - Segunda seção
        vm.name = "World";
        vm.names = ['Gabriel', 'Joel', 'Pablo'];
        $rootScope.department = 'COGETI';

        //Variaveis de demonstração - Terceira seção
        $scope.count = 0;
        $scope.$on('MyEvent', function() {
            $scope.count++;
        });

        vm.nomeSaudacao = 'Gabriel';
        vm.executarSaudacao = function() {
            saudar(service, vm.nomeSaudacao);
        }

        vm.alterarMenu = parent.alterarMenu;
    }

    function saudar(service, nome) {
        var saudacao = service.asyncGreet(nome);

        saudacao.then(success, error, notificacao);

        function success(mensagem) {
            alert('Sucesso: '+mensagem);
        }

        function error(motivo) {
            alert('Falhou: '+motivo);
        }

        function notificacao(mensagem) {
            alert('Notificado: '+mensagem);
        }
    }

})();