'use strict';

/**
 * @ngdoc function
 * @name extraLifeApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the extraLifeApp
 */

angular.module('extraLifeApp')
    .controller('UserCtrl', function($scope, $http, $routeParams) {

        $scope.userObj = {};

        var userNumber = parseInt($routeParams.userID);
        var userURL = 'http://el-apl.alexmuench.net:8081/userinfo/' + userNumber;
        var goalURL = 'http://el-apl.alexmuench.net:8081/usergoal/' + userNumber;
        var donationsURL = 'http://el-apl.alexmuench.net:8081/recentDonations/' + userNumber;
        $scope.noDonations = true;

        $http({
            method: 'GET',
            url: userURL
        }).
        success(function(data) {
            console.log(data);
            $scope.userObj.info = data;
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(data, status, headers, config);
        });

        $http({
            method: 'GET',
            url: goalURL
        }).
        success(function(data) {
            console.log(data);
            $scope.userObj.goals = data;
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(data, status, headers, config);
        });

        $http({
            method: 'GET',
            url: donationsURL
        }).
        success(function(data) {
            console.log(data);
            $scope.recentDonations = data.recentDonations.slice(0,5);
            if ($scope.recentDonations.length > 0) {
                $scope.noDonations = false;
            }
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(data, status, headers, config);
        });



        $scope.donationPercentage = function(current, goal) {
            var percent = (current / goal) * 100;
            var styleString = 'width: ' + percent + '%;';
            return styleString;
        };
    });