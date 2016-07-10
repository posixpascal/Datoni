angular.module("datoniApp.controllers")
.controller("LocationCtrl", function($scope, Mindestbestellwert){
	var mbw = new Mindestbestellwert()
	$scope.locations = mbw.getLocations().map(function(location){
		return [location, mbw.getMindestbestellwert(location)]
	});
})