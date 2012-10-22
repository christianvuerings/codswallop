'use strict';

/*global require*/

require.config({
    paths: {
        angular: '//code.angularjs.org/1.0.2/angular.min'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

require(['angular', 'app', 'controller/ProfileController'], function (angular) {
    angular.bootstrap(document, ['profile']);
});