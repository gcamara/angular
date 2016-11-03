/**
 * Created by gabrielcamara on 11/1/16.
 */
(function() {
    'use strict'

    var app = angular.module('app');

    app.directive("sefinMenu", SefinMenu);

    function SefinMenu() {
        var self = {};

        self.templateUrl = 'views/directives/sefinMenu.html';

        return self;
    }
})();