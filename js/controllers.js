'use strict';

var controllers = angular.module('stravaApi.controllers',[]);

controllers.controller('AppCtrl', function ($scope) {
	$scope.name = "Module";

});

controllers.controller('AthletesController', function($scope, $http) {
	$scope.list

	$http.jsonp('https://www.strava.com/api/v3/oauth').then(function (data) {
		console.log(data);

	})

})
