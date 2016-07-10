angular.module('datoniApp.controllers')
.controller('ProfileCtrl', function($cordovaAppRate, $cordovaDialogs, $scope, Storage, $ionicPlatform, $cordovaProgress, $rootScope, $cordovaGeolocation, $http, $rootScope, Cart, AccountManager, $cordovaLocalNotification){
    $scope.edit = { show: false};

    var orderData = Storage.get("user.orders", []);
    $scope.orders = [];

    angular.forEach(orderData, function(order){
      $scope.orders.push(order.order);
    });

    $scope.favorites = Storage.get("user.favorites", {});
    $scope.favorites = Object.keys($scope.favorites).map(function(key){
        return $scope.favorites[key];
    });
    $scope.phonenumber = Storage.get("phonenumber", false);

    $scope.signedIn = new AccountManager().isSignedIn()

    $scope.rememberOrder = false;
    $scope.lastOrder = $rootScope.lastOrder;

    $scope.rateApp = function(){
      AppRate.promptForRating();
    }


    $scope.toggleRememberOrder = function(){
      $scope.rememberOrder = !$scope.rememberOrder;
      if ('cordova' in window){
        if ($scope.rememberOrder){
          console.log("add notification");
          $cordovaLocalNotification.hasPermission().then(function(){
            $cordovaLocalNotification.add({
              id: 1,
              text: "Ihre Bestellung sollte jeden Moment ankommen...",
              sound: null,
              firstAt: +new Date() + (30 * 60 * 1000),
              data: {}
            });
          }, function(){
            alert("Wir konnten keine Push Notification für Dich einrichten, überprüfe die Berechtigungen dieser Anwendung in den Einstellungen deines Handys.");
          });
        } else {
          $cordovaLocalNotification.cancel([1])
        }
      } else {
        console.log("Notification: " + $scope.rememberOrder);
      }
    };

    if (typeof $rootScope.cart === "undefined"){
      $rootScope.cart = new Cart();
    }
    $scope.cart = $rootScope.cart;

    $scope.removeFavorite = function(favorite, $index){
      var favs = Storage.get("user.favorites", {});
      var id = favorite.product.number;
      delete favs["product-" + id];
      Storage.set("user.favorites", favs);
      $scope.favorites.splice($index, 1);
      if (!$scope.$$digest) $scope.$apply();
    };

    $scope.address = Storage.get("user.address", {});

    $scope.saveAddress = function(){
        Storage.set("user.address", angular.copy($scope.address));
        $rootScope.$broadcast("updateAddress");
    }

    $scope.getGeolocation = function(){
        //if ("cordova" in window) $cordovaProgress.show("Bitte warten...");
        $rootScope.$broadcast('loading:show');
        $cordovaGeolocation.getCurrentPosition({
            enableHighAccuracy: true
        }).then(function(position){
            $rootScope.$broadcast('loading:hide');
            var latlng = [position.coords.latitude, position.coords.longitude].join(",");
            var gotSublocality = false;
            $http.get("http://maps.googleapis.com/maps/api/geocode/json?address=" + latlng + "&sensor=true").success(function(res){
                var res = res.results[0].address_components;
                angular.forEach(res, function(r){
                    if (r.types.indexOf("street_number") > -1){
                        $scope.address.streetnumber = r.long_name;
                    }

                    if (r.types.indexOf("route") > -1){
                        $scope.address.street = r.short_name;
                    }

                    if (r.types.indexOf("postal_code") > -1){
                        $scope.address.postalcode = r.long_name;
                    }
                    if (r.types.indexOf("sublocality") > -1){
                        $scope.address.location = r.long_name;
                        gotSublocality = true;

                    }
                    if (!gotSublocality && r.types.indexOf("locality") > -1){
                      $scope.address.location = r.long_name;
                    }
                });
                $scope.saveAddress();
                //if ("cordova" in window) $cordovaProgress.hide();
            }).error(function(err){
                $rootScope.$broadcast('loading:hide');
                alert("Ihr Standort konnte nicht ermittelt werden.");
            });

            // $cordovaProgress.hide();
        }, function(err){
            // $cordovaProgress.hide();
            alert("Ihr Standort konnte nicht ermittelt werden.");
            $rootScope.$broadcast('loading:hide');
        });

    };

})
