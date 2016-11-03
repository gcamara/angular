/**
 * Created by Gabriel on 29/10/2016.
 */
(function() {
    'use strict'

    var app = angular.module('app');

    app.controller('AgendaController', ['$scope', 'ContatoService', AgendaController]);

    function AgendaController($scope, contatoService) {
        var parent = $scope.$parent.main;
        parent.menus = ['Home', 'Agenda', 'Cadastro'];

        var vm = this;

        vm.agenda = [];
        vm.campos = [];
        vm.contatos = [];
        vm.contatoCorrente = new Contato();
        vm.filtro = '';

        vm.adicionarContato = function() {
            if (verificarCampos()) {
                vm.contatos.push(vm.contatoCorrente);
                vm.contatoCorrente = new Contato();
            }
        }

        function verificarCampos() {
            vm.campos = [];

            var campos = [{ campo: 'Nome', valor: vm.contatoCorrente.nome }, { campo: 'Telefone', valor: vm.contatoCorrente.telefone }];

            campos.forEach(campo => {
                if (!campo.valor && vm.campos.indexOf(campo.campo) == -1) {
                vm.campos.push(campo.campo);
            }
        });

            return vm.campos.length == 0;
        }

        vm.buscarContatos = buscarContatos(vm, contatoService);

    }

    function buscarContatos(controller, service) {
        service
            .buscarContatos()
            .then(success, error);

        function success(result) {
            console.log(result);
            
            if (result.data) {
                result.data.forEach(function(contato) {
                    var novoContato = new Contato();
                    novoContato.nome = contato.nome;
                    novoContato.telefone = contato.telefone;

                    controller.contatos.push(novoContato);
                })
            }
        }

        function error(result) {
            console.log(result);
        }
    }
})();