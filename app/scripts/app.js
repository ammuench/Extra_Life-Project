'use strict';

/**
 * @ngdoc overview
 * @name extraLifeApp
 * @description
 * # extraLifeApp
 *
 * Main module of the application.
 */
angular
  .module('extraLifeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/teem', {
        templateUrl: 'views/teem.html',
        controller: 'TeemCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
