/**
 * Created by Gabriel on 02/11/2016.
 */
(function(){
    'use strict';

    var app = angular.module('app');

    app.service("AngularService", ['$q', AngularService]);

    function AngularService($q) {
        var self = this;

        self.asyncGreet = function(name) {
            var deferred = $q.defer();

            setTimeout(function() {
                deferred.notify('About to greet ' + name + '.');

                if (okToGreet(name)) {
                    deferred.resolve('Hello, ' + name + '!');
                } else {
                    deferred.reject('Greeting ' + name + ' is not allowed.');
                }
            }, 1000);

            return deferred.promise;
        }

        function okToGreet(name) {
            return name === 'Gabriel';
        }

        return this;
    }
})();