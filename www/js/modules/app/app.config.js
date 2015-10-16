(function () {
    'use strict';

    var appConfig = angular.module('app.config', ['app.controller', 'app.factory']);

    appConfig.run(['$rootScope', function ($rootScope) {
        // Once the app gets run, do stuff... nothing to do just yet
    }]);

    appConfig.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('app', {
                url: '/',
                template: '<ui-view></ui-view>',
                abstract: true,
                controller: 'appController'

            });
            
    }]);

    // Global constants
    appConfig.constant('CONFIG', {
        dev_mode: 0
    });

})();
