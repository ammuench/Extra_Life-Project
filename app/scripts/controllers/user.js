'use strict';

/**
 * @ngdoc function
 * @name extraLifeApp.controller:UserCtrl 
 * @description
 * # UserCtrl
 * Controller of the extraLifeApp
 */

angular.module('extraLifeApp')
  .controller('UserCtrl', function ($scope) {
    $scope.userObj = {
    	'name': 'Alex Muench',
    	'job': 'Developer',
    	'age': '23',
    	'location': 'Chicago, IL',
    	'image' : 'http://www.extra-life.org/assets/extralife/images/$avatars$/constituent_0C07ECD7-C293-34EB-45A3F7B77F8BA043.jpg',
    	'goal': 500,
    	'current': 250,
    	'userId': 100910,
    	'rewards': [
    		{
    			'amount': 100,
    			'title': 'BONUS POINTS 1',
    			'description': 'At the end of the event, I\'ll add an extra 50 dollars on top of whatever the current donation pool is'
    		},
    		{
    			'amount': 200,
    			'title': 'EZ RARES',
    			'description': 'I will buy up a bunch of Dota 2 items and Steam games and give them away to stream viewers!'
    		},
    		{
    			'amount': 300,
    			'title': '(By 10/14) - COSPLAY TIME',
    			'description': 'I will make and wear a Tidehunter costume for the entire event! Plus an hour of a game requested by twitch chat! If the donations come in too late to make the costume, I\'ll add an extra 2 hours of requests!'
    		},
    		{
    			'amount': 400,
    			'title': 'BONUS POINTS 2',
    			'description': 'At the end of the event, I\'ll add an extra 100 dollars on top of whatever the current donation pool is'
    		},
    		{
    			'amount': 500,
    			'title': 'BONUS POINTS 3',
    			'description': 'At the end of the event, I\'ll add an extra 200 dollars on top of whatever the current donation pool is'
    		},
    		{
    			'amount': 100,
    			'title': 'BONUS POINTS 1',
    			'description': 'At the end of the event, I\'ll add an extra 50 dollars on top of whatever the current donation pool is'
    		},
    		{
    			'amount': 200,
    			'title': 'EZ RARES',
    			'description': 'I will buy up a bunch of Dota 2 items and Steam games and give them away to stream viewers!'
    		},
    		{
    			'amount': 300,
    			'title': '(By 10/14) - COSPLAY TIME',
    			'description': 'I will make and wear a Tidehunter costume for the entire event! Plus an hour of a game requested by twitch chat! If the donations come in too late to make the costume, I\'ll add an extra 2 hours of requests!'
    		},
    		{
    			'amount': 400,
    			'title': 'BONUS POINTS 2',
    			'description': 'At the end of the event, I\'ll add an extra 100 dollars on top of whatever the current donation pool is'
    		},
    		{
    			'amount': 500,
    			'title': 'BONUS POINTS 3',
    			'description': 'At the end of the event, I\'ll add an extra 200 dollars on top of whatever the current donation pool is'
    		}
    	]
    };

    $scope.donationPercentage = function(current, goal){
    	var percent = (current/goal) * 100;
    	var styleString = 'width: ' + percent+ '%;';
    	return styleString;
    };
  });
