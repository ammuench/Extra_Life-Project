'use strict';

/**
 * @ngdoc function
 * @name extraLifeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the extraLifeApp
 */
angular.module('extraLifeApp')
  .controller('MainCtrl', function ($scope, $http) {
    
    $http({method: 'GET', url: 'http://199.167.192.149:3000/users/teem'}).
  	  success(function(data) {
  	  	$scope.goalAmount = parseInt(data[0].total);
  	  	$scope.goalWhole = parseInt(data[0].goal);
  	  }).
  	  error(function(data, status, headers, config) {
  	    // called asynchronously if an error occurs
  	    // or server returns response with an error status.
  	    console.log(data, status, headers, config);
  	  });

  	  $scope.donationPercentage = function(current, goal){
  	  	var percent = (current/goal) * 100;
  	  	var styleString = 'width: ' + percent+ '%;';
  	  	return styleString;
  	  };
  });
