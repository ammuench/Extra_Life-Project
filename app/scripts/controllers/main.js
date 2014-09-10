'use strict';

/**
 * @ngdoc function
 * @name extraLifeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the extraLifeApp
 */
angular.module('extraLifeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
