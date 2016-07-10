angular.module('datoniApp.controllers').controller('MenuCtrl', function($scope, $stateParams, Cart, $rootScope, OpeningTimes, $state) {
    if (typeof $rootScope.cart === "undefined"){
        $rootScope.cart = new Cart();
    }

    $scope.gotoMenu = function(item){
      console.log("loading");
      $rootScope.$broadcast('loading:show');
      $state.go('tab.menu.view', {menu: item});
    }

    $scope.addItem = function(item){
        $rootScope.cart.addItem(item, 1);
    };
});
