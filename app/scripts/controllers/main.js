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
    
    $http({method: 'GET', url: 'http://el-apl.alexmuench.net:8081/teamgoal/20784'}).
  	  success(function(data) {
  	  	$scope.goalAmount = data.raised;
  	  	$scope.goalWhole = data.goal;
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
