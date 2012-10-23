'use strict';

/*global define*/

/**
 * Services that persists and retrieves TODOs from localStorage.
 */
define(['app'], function (app) {
  app.factory( 'profileStorage', function() {
    var STORAGE_ID = 'profileName-angularjs-requirejs';

    return {
      get: function() {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
      },

      put: function( name ) {
        localStorage.setItem(STORAGE_ID, JSON.stringify(name));
      }
    };
  });
});