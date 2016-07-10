angular.module("datoniApp.controllers")
.controller("OrderCheckController", function($scope, $state,$cordovaAppRate, $rootScope, $http, API){
  $scope.orderId = $rootScope.lastOrderId;
  $scope.state = 'loading';
  $scope.gotoProfile = function(){
    // TODO: clear navigation stack here.
    $state.go('tab.menu');
  }

  $scope.errorCount = 0
  $scope.check = function(){
    $http.get(API.to("order/check/" + $scope.orderId)).success(function(data){
      if (data.status == true){
        $scope.state = 'finished';
        clearInterval($scope.timeInterval);
        $rootScope.$broadcast("cart:clear");
      } else {
        $scope.errorCount += 1;
      }
    });
  }
  $scope.rateApp = function(){
          $cordovaAppRate.promptForRating(true);
  }
  $scope.closeModal = function(){
    window.$orderModal.hide();
    $state.go('tab.coupons');
  }
  $scope.timeInterval = setInterval(function(){
    $scope.check();
    if ($scope.errorCount > 10){
      clearInterval($scope.timeInterval);
      window.$orderModal.hide();
      alert("Wir konnten die Bestellung nicht abrufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch unter 06434 90 99 40.");
      $state.go('tab.menu');
      $http.get(API.to("order/destroy/" + $scope.orderId));

    }
    if (!$scope.$$phase){ $scope.$apply(); }
  }, 3000);
})
