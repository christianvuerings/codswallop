'use strict';

/*global define*/

define(['app', 'services/profileStorage'], function (app) {

    return app.controller('ProfileController', ['$scope', '$location', 'profileStorage',
    function ProfileController($scope, $location, profileStorage) {
        //Overriding page defaults.
        $scope.profileName = 'Chaos Monkey';

        //Stuffing something into localStorage if it's empty.
        if (!profileStorage.get()) {
            profileStorage.put('strikes again!');
        }


        /**
         * Save to localStorage, emit event if localStorage/db is updated.
         */
        $scope.saveValues = function() {
            if (profileStorage.get() !== $scope.profileName) {
                profileStorage.put($scope.profileName);
                $scope.$emit('storageUpdate');

                /* very lazy implementation of form reset: https://github.com/angular/angular.js/issues/856
                and leaves much to be desired */
                $scope.profileName = 'Chaos Monkey';
                $scope.profileForm.$dirty = false;
            }
        };

        $scope.localStorageValue = profileStorage.get();

        /**
         * Listener on the storageUpdate event. Will update the page's display value for
         * local storage when things change.
         */
        $scope.$on('storageUpdate', function(event) {
            $scope.localStorageValue = profileStorage.get();
        });
    }
    ]);
});