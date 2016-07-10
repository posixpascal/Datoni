angular.module('datoniApp.controllers', [])

.controller('DashCtrl', function($scope, $ionicDeploy, $rootScope){


   $scope.watchUpdates = function(){

   }

})

.controller('CouponCtrl', function($scope, $http, $rootScope, API, Storage){
  $scope.coupons = [];

  var fetchCoupons = function(){

    $http.get(API.to("coupons/view/" + Storage.get('phonenumber'))).success(function(coupons){
      $scope.coupons = coupons;
    });
  }

  $scope.useAllCoupons = function(){
    $rootScope.useCoupons = true
  }

  $scope.$on("$ionicView.enter", fetchCoupons);

})

.controller('SpecialsCtrl', function($scope){
  $scope.callDatoni = function(){
    document.location.href = 'tel:06434909940';
  }
})

.controller('TabCtrl', ["$scope", "$rootScope", function($scope, $rootScope) {

    $scope.badges = {
        menu: 0
    };

    $rootScope.$on("badges:update", function($event, badges){
      $scope.badges = badges;
      console.log(badges);
      if (!$scope.$$phase){ $scope.$apply(); }
    });

}
])
