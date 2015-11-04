'use strict';

var controllers = angular.module('stravaApi.controllers',[]);

controllers.controller('AppCtrl', function ($scope) {
	$scope.name = "Module";

});

controllers.controller('AthletesController', function($scope, $http) {
	$scope.list
	var access= 'https://www.strava.com/api/v3/athlete + client_id=9 + client_secret=7b2946535949ae70f015d696d8ac602830ece412 + client_code=75e251e3ff8fff'

	$http.jsonp('https://www.strava.com/api/v3/athlete').then(function (data) {
		console.log(data);

	})

})
