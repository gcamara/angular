(function() {

	'use strict'

	var modulo = angular.module('modulo', []);

	modulo.controller('ModuloController', ModuloController);

	function ModuloController() {
		var vm = this;
		this.saudacao = "Olá, Mundo!";
	}

	var app = angular.module('app', ['ngRoute', 'ui.ace', 'modulo']);

	//Injeção de dependência
	app.controller('MainController', ['MenuService', '$location', '$rootScope', MainController]);

	function MainController(MenuService, $location, $rootScope) {
		/*o this em JS é contextual, ou seja, pode trocar de valor de acordo com o escopo,
		* é boa prática atribuir o this a uma variável. Utiliza-se o nome vm por abreviação de ViewModel
		*/
		var vm = this;

		vm.opcoesMenu = [];
		vm.menus = [];
		vm.menuCollapsed = false;
		vm.collapseJumb = false;

		vm.exibeMenu = function() {
			vm.menuCollapsed = !vm.menuCollapsed;
		}

		criarMenus(vm, MenuService);

		vm.ativarMenu = function(menu) {
			var conteudo = document.getElementsByClassName('conteudo')[0];
			menu.active = !menu.active;

			if (menu.link) {
				conteudo.className = 'conteudo';
				setTimeout(function() {
					conteudo.className += ' fade-right';
					if (menu.link) {
						$rootScope.$apply(function() {
							$location.path(menu.link);
						});
					}
				}, 600);
			}
		}

		// Animar o topo
		vm.load = function(id) {
			setTimeout(function() { document.getElementsByClassName(id)[0].className += ' animate'}, 500);
		}

		vm.alterarMenu = function(novoMenu) {
			if (vm.menus.length > 2) {
				vm.menus.pop();
			}
			vm.menus.push(novoMenu);
		}

		return vm;
	}

	/**
	 * Função para criar os menus acessando o Service
	 * @param controller
	 * @param menuService
	 */
	function criarMenus(controller, menuService) {
		menuService
			.buscarMenus()
			//Em caso de sucesso
			.then(success)
			//Em caso de erro
			.then(error);

		function success(result) {
			if (result.data) {
				result.data.forEach(function(menu) {
					var menuItem = new MenuItem();
					menuItem.parseJSON(menu);
					controller.opcoesMenu.push(menuItem);
				});
			}
		}

		function error(result) {
//			console.log(result);
		}
	}
})();