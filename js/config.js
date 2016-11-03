/**
 * Created by Gabriel on 29/10/2016.
 */
(function() {
    'use strict'

    var app = angular.module('app');

    app.config(['$routeProvider','$locationProvider', Config]);

    function Config($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "views/apresentacao.html"
            })
            //Menu agenda
            .when("/agenda", {
                templateUrl : 'views/agenda.html',
                controller: 'AgendaController',
                controllerAs: 'main'
            })

            //Menu Javascript
            .when("/js/objetosLiterais", {
                templateUrl : "views/js/objetosLiterais.html",
                controller: 'JSController',
                controllerAs: 'main'
            })
            .when("/js/JSON", {
                templateUrl : "views/js/JSON.html",
                controller: 'JSController',
                controllerAs: 'main'
            })
            .when("/js/funcoes", {
                templateUrl : "views/js/funcoes.html",
                controller: 'JSController',
                controllerAs: 'main'
            })
            .when("/js/prototipos", {
                templateUrl : "views/js/prototipos.html",
                controller: 'JSController',
                controllerAs: 'main'
            })

            //Menu Angular
            .when("/angular/escopos", {
                templateUrl : "views/angular/escopos.html",
                controller: 'AngularController',
                controllerAs: 'main'
            })
            .when("/angular/modulos", {
                templateUrl : "views/angular/modulos.html",
                controller: 'AngularController',
                controllerAs: 'main'
            })
            .when("/angular/diretivas", {
                templateUrl : "views/angular/diretivas.html",
                controller: 'AngularController',
                controllerAs: 'main'
            })
            .when("/angular/controllers", {
                templateUrl : "views/angular/controllers.html",
                controller: 'AngularController',
                controllerAs: 'main'
            })
            .when("/angular/servicos", {
                templateUrl : "views/angular/servicos.html",
                controller: 'AngularController',
                controllerAs: 'main'
            })
            .when("/angular/promessas", {
                templateUrl : "views/angular/promessas.html",
                controller: 'AngularController',
                controllerAs: 'main'
            })

            //Menu Sobre
            .when("/sobre", {
                templateUrl : "views/sobre.html",
                controller: 'SobreController',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/sobre'
            });
    }
})();
