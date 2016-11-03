/**
 * Created by gabrielcamara on 11/1/16.
 */
(function() {
    'use strict'

    var app = angular.module('app');

    app.directive("imagemTopo", ImagemTopo);

    function ImagemTopo() {
        var self = {};

        self.templateUrl = 'views/directives/imagemTopo.html';
        self.restrict = 'E';
        self.scope = {
            titulo: "@",
            classe: "@",
            tipo: "@",
            imagem: "@",
            controller: "="
        }

        return self;
    }
})();