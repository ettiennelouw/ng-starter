(function () {
    'use strict';

    // Bootstrap angular when ready
    angular.element(document).ready(function() {

        angular.module('app', [ 'ui.router', 'app.config' ]);
        
        angular.bootstrap(document, ['app']);

    });

})();
