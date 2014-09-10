'use strict';

/**
 * @ngdoc function
 * @name extraLifeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the extraLifeApp
 */
angular.module('extraLifeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
