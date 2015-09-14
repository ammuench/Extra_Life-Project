'use strict';

/**
 * @ngdoc function
 * @name extraLifeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the extraLifeApp
 */
angular.module('extraLifeApp')
  .controller('TeemCtrl', function ($scope, $http) {
     $http({method: 'GET', url: 'http://el-api.alexmuench.net:8081/teaminfo/23224'}).
  	  success(function(data) {
  	  	$scope.memberList = data.members;
  	  }).
  	  error(function(data, status, headers, config) {
  	    // called asynchronously if an error occurs
  	    // or server returns response with an error status.
  	    console.log(data, status, headers, config);
  	  });
  });
