(function () {

    var appFactory = angular.module('app.factory', []);
    
    appFactory.factory('HttpInterceptor', ['$injector', '$q', function ($injector, $q) {
        return {
            request: function (config) {

                return config;
            },
            requestError: function (rejection) {

                return $q.reject(rejection);
            },
            response: function (response) {

                return response;
            },
            responseError: function (rejection) {

                return $q.reject(rejection);
            }
        };

    }]);

})();