angular.module("datoniApp.controllers")
.controller('MenuCartCtrl', function($scope, $rootScope, Cart, AccountManager, $ionicScrollDelegate,
                                      $http, API, $ionicHistory, $cordovaProgress, $rootScope, $cordovaGeolocation,
                                      $state, Storage, Mindestbestellwert, $ionicModal, OpeningTimes, $cordovaDialogs,  Storage, $ionicPopover, Delivery){

    if (typeof $rootScope.cart === "undefined"){
        $rootScope.cart = new Cart();
    }

    $scope.account = new AccountManager();


    $scope.getPrice = function(item){
      if (typeof item.addedIngredients === "undefined" || item.addedIngredients.length == 0){ return item.price; }
      var price = item.price;
      var ingredientPricePerSize = 0.50; // klein
      var sizes = item.product.prices;
      for (var i = 0, len = sizes.length; i < len; i++){
        if (sizes[i].price == item.price){
          var itemSize = sizes[i].size;
        }
      }
      itemSize = itemSize.toLowerCase();
     
      ingredientsPrice = 0;
      item.addedIngredients.forEach(function(i){
         
          switch (itemSize){
            case "familie":
              ingredientPricePerSize = 1.00;
              break;
            default:
            // Mozzarella, Scampi, Meeresfrüchte, Pute 
              ingredientPricePerSize = 0.5;
              if (i.toLowerCase() == "mozzarella" ||
                  i.toLowerCase() == "scampi"     ||
                  i.toLowerCase() == "meeresfrüchte" ||
                  i.toLowerCase() == "pute"){
                    ingredientPricePerSize = 1.0;
              }
              break;
          }
          ingredientsPrice += ingredientPricePerSize;
      });
      
      return price + (ingredientsPrice);
    };


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

    if ($rootScope.cart.items.length > 0){
      $rootScope.cart.items[0].collapsed = true; // first item is always collapsed;
    }
    $scope.getRemovedIngredients = function(item){
      var form = {};
      angular.forEach(item.ingredients, function(ingredient){
        form[ingredient.name] = true;
      });

      angular.forEach(item.removedIngredients, function(ingredient){
        form[ingredient] = false;
      });
      return form;
    };

    $scope.editIngredients = function(item){
      $scope.editIngredientsItem = item;
      $ionicModal.fromTemplateUrl('edit-ingredients.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal){
        $scope.modal = modal;
        $scope.modal.show();
      });
    };

    $scope.saveIngredients = function(form, item){
      item.removedIngredients = [];

      angular.forEach(item.ingredients, function(ingredient){

          if (form[ingredient.name] !== true){
            item.removedIngredients.push(ingredient.name);
          }
      });
      console.log(item);



      $scope.modal.hide();
    };
    $scope.o = {};
    $scope.o.orderTypePickup = false;
    $scope.o.orderTypeShipping = true;
    $scope.$watch("o.orderTypePickup", function(){
      if ($scope.o.orderTypePickup){
        $scope.o.orderTypeShipping = false;
        $scope.setOrderType("pickup");
      }
    });
    $scope.$watch("o.orderTypeShipping", function(){

      if ($scope.o.orderTypeShipping){
        $scope.o.orderTypePickup = false;
        $scope.setOrderType("shipping");
      }
    });

    $scope.orderType = 'shipping';
    $scope.setOrderType = function(orderType){
      $scope.orderType = orderType;
      $ionicScrollDelegate.resize();
    };
    $scope.orderTime = 'sofort';

    $scope.resizeViewport = function(){
      $ionicScrollDelegate.resize();
    };

    $scope.address = Storage.get("user.address", {});
    $scope.$on('user:address:updated', function(){
      $scope.address = Storage.get("user.address", {});
      $scope.Mindestbestellwert = new Mindestbestellwert($scope.address.location);
      $scope.canDeliver = Delivery.canDeliverTo($scope.address.location);
    });

    $scope.saveAddress = function(){
        Storage.set("user.address", angular.copy($scope.address));
        
        $scope.hasAddress = $scope.isValidAddress();
        
        $rootScope.$broadcast("user:address:updated", Storage.get("user.address"));
    };

    $scope.isValidAddress = function(){
      return ($scope.address.location && $scope.address.location.length > 0 &&
          $scope.address.postalcode &&
          $scope.address.firstname &&
          $scope.address.lastname &&
          $scope.address.street);
    }

    $scope.Mindestbestellwert = new Mindestbestellwert($scope.address.location);
    $scope.canDeliver =  Delivery.canDeliverTo($scope.address.location);
    $scope.gotoMenu = function(){
        $ionicHistory.nextViewOptions({
            disableBack: true
        });

        $state.go("tab.menu.list");

    };
    $scope.cart = $rootScope.cart;
    $scope.message = "";
    $scope.leaveMessage = function(){
      $ionicModal.fromTemplateUrl('add-message.html', {
         scope: $scope,
         animation: 'slide-in-up'
       }).then(function(modal){
         $scope.modal = modal;
         $scope.modal.show();
       });
    }

    $scope.saveMessage = function(message){
      $scope.message = document.querySelector('#message_field').value;
      $scope.hasMessage = ($scope.message.length > 0 ? true : false);
      $scope.modal.hide();
      console.log($scope.hasMessage);
    }


    $scope.closeModal = function(){
      $scope.modal.hide();
    };

    $scope.completeOrder = function(){
      if ($scope.cart.items.length == 0){
        $cordovaDialogs.alert("Dein Warenkorb ist leer, bitte suche dir aus der Speisekarte ein Gericht aus & versuche es erneut.", "Da Toni App", "OK");
        $state.go('tab.menu.list');
        return false;
      }
      // check if address details are given...
      if (typeof $scope.address.lastname === "undefined" ||
          typeof $scope.address.firstname === "undefined" ||
          typeof $scope.address.street === "undefined" ||
          typeof $scope.address.location === "undefined"
          ){
        $cordovaDialogs.alert("Du hast keine gültige Adresse angegeben, bitte gehe in dein Profil und gebe deine Addresse ein.", "Da Toni App", "OK");
        return false;
      }

      if ($scope.address.lastname === "" ||
          $scope.address.firstname === "" ||
          $scope.address.street === "" ||
          $scope.address.location === ""){
          $cordovaDialogs.alert("Du hast keine gültige Adresse angegeben, bitte gehe in dein Profil und gebe deine Addresse ein.", "Da Toni App", "OK");
          return false;
      }





      //if ("cordova" in window){ $cordovaProgress.show("Bestellung übermitteln..."); }
      if (false && OpeningTimes.isClosed()){
        $cordovaDialogs.alert("Du versuchst außerhalb unserer Geschäftszeiten eine Bestellung zu machen, das ist leider nicht möglich. Bitte versuche es später noch einmal.", "Da Toni App", "OK");
        return false;
      }
      var data = {};
      data.use_coupons = $rootScope.useCoupons;
      data.cart = $scope.cart.getPostData();
      data.user = (new AccountManager()).getCredentials();
      data.address = angular.copy($scope.address);
      data.delivery = $scope.orderType;
      data.message = $scope.message.substring(0, 140);

      if (data.delivery == 'shipping'){
        if ($scope.Mindestbestellwert.getLevel().price > $scope.getTotalCost()){
          $cordovaDialogs.alert("Deine Bestellung erfüllt nicht die Auflagen unseres Mindestbestellwerts. Bitte passe deine Bestellung an und versuche es ggf. erneut.", "Da Toni App", "OK");
          return false;
        }

        if ($scope.Mindestbestellwert.getLevel().price == -1){
          $cordovaDialogs.alert("Wir konnten deinen Standort nicht genau zu ordnen, es kann sein, dass du dich außerhalb unseres Lieferradius befindest.\nWir werden uns telefonisch bei dir melden, sollte deine Bestellung nicht ausgeliefert werden können.", "Da Toni App", "OK");
          // freeze!
        }
      }


        $http.post(API.to("orders/submit"),
          data
        ).success(function(data){
          if (!data.id){
            alert("Wir konnten die Bestellung nicht übermitteln.\nBitte versuche es erneut oder ruf uns persönlich an.");
            $rootScope.$broadcast('loading:hide');
            return false;
          }
          $rootScope.useCoupons = false
          $rootScope.lastOrderId = data.id;
            $rootScope.lastCart = angular.copy($scope.cart);
            var orders = Storage.get("user.orders", []);
            var d = new Date();
            data.date = d.getDate() + "." + d.getMonth() + "." + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
            orders.push(data);
            Storage.set("user.orders", orders);


            $ionicModal.fromTemplateUrl("templates/profile/order_success.html", {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal){
                window.$orderModal =  modal;
                $scope.modal = modal;
                $scope.modal.show();
            });
        }).catch(function(){
          alert("Wir konnten die Bestellung nicht übermitteln.\nBitte versuche es erneut oder ruf uns persönlich an.");
          $rootScope.$broadcast('loading:hide');
          return false;
        }).finally(function(){
          //if ("cordova" in window){ $cordovaProgress.hide(); }
          $rootScope.$broadcast('loading:hide');
        });

    };

    $rootScope.$on("cart:clear", function(){
       $scope.cart.clear();
       $rootScope.badge.cart = 0;
     });

    // this is lame...
    $scope.getHours = function(){
      var i = 11; // nur zwischen 11 und...
      var hours = [];
      while (i < 23){ // 22 uhr ...
        hours.push(i++);
      }
      return hours;
    };
    $scope.changeSize = function($event, item){
       $scope.popoverItem = item;
       $ionicPopover.fromTemplateUrl('size-popover.html', {
        scope: $scope,
      }).then(function(popover) {
        $scope.popover = popover;
        $scope.popover.show($event);
      });
    }
    $scope.setPrice = function(item, price){
      item.size = price.size;
      item.price = price.price;
      $scope.popover.hide();
    };


    $scope.getTotalCost = function(includeCoupons){
      if (typeof includeCoupons === "undefined"){
        includeCoupons = true;
      }

        var totalCost = 0.0;
        angular.forEach($scope.cart.items, function(item){
            totalCost += ($scope.getPrice(item) * item.quantity);
        });
        if (includeCoupons && $rootScope.useCoupons && totalCost >= 10){
          totalCost -= 5.0
        }
        return totalCost;
    };
    $scope.isWorthCoupon = function(){
      return ($scope.getTotalCost() >= 10)
    }
    $scope.changeQuantity = function(item, quantity, plusminus){
        if (plusminus === '+')
            $scope.cart.changeQuantity(item, ++quantity);
        else
            $scope.cart.changeQuantity(item, --quantity);
    };

    $scope.removeItem = function(item){
        $scope.cart.removeItem(item);
    };


    // auth logic

      $scope.registration = {};
      $scope.phonenumber = Storage.get('phonenumber', null);
      $scope.registerDeviceWithOldCode = function(){
        $scope.account.view = 'enter-code';
        $scope.secret = "code:renew";
        if (!$scope.$$phase){
          $scope.$apply();
        }
      };

      $scope.goBack = function(){
        $scope.account.view = 'unlock-phone';
      };

      $scope.resendSMS = function(){
            $http.post(API.to("send_verification"), {
              "phonenumber": $scope.phonenumber
            }).then(function(data){
              if (data.success == "ok"){
               alert("Eine neue SMS wurde dir zugesandt.");
              } else if (data.error) {
                alert(data.error);
              }
            }, function(){
              alert("Wir konnten dir keine SMS zusenden, versuche es später noch einmal oder melde dich telefonisch unter 06434 90 99 40.");
              $rootScope.$broadcast('loading:hide');
            });
          };

      $scope.registerDevice = function(){
          if ("cordova" in window) {
             // $cordovaProgress.show("Wird geladen...");
          }
          var registration = angular.copy($scope.registration);
          $scope.phonenumber = registration.phonenumber;
          Storage.set('phonenumber', registration.phonenumber);
          $scope.resendSMS = function(){
            $http.post(API.to("users/send_verification_sms"), {
              "phonenumber": $scope.phonenumber
            }).then(function(data){
              if (data.success == "ok"){
               alert("Eine neue SMS wurde dir zugesandt.");
              } else if (data.error) {
                alert(data.error);
              }
            }, function(){
              alert("Wir konnten dir keine SMS zusenden, versuche es später noch einmal oder melde dich telefonisch unter 06434 90 99 40.");
              $rootScope.$broadcast('loading:hide');
            });
          };
          $http.post(API.to("users/create"), {
             "user": {
                 "phonenumber": registration.phonenumber,
             }
          }).success(function(data){
              if ("cordova" in window){
                 // $cordovaProgress.hide();
              }

              if (typeof data.code !== "undefined"){
                alert("CODE: --> " + data.code + " <-- / Zu Testzwecken wird der Code nicht per SMS verschickt.")
              }

              if (data.error){
                $cordovaDialogs.alert(data.error, "Fehler bei der Registrierung.", "OK");
                return;
              }
              $scope.account.view = 'enter-code';
              $scope.secret = data.secret;
          }).error(function(){
              if ("cordova" in window){
                //  $cordovaProgress.hide();
              }
          });
      };

      $scope.verifySMSCode = function(code){
          if ("cordova" in window){
            //  $cordovaProgress.show("Wird geprüft...");
          }
          if (typeof $scope.phonenumber === "undefined" || $scope.phonenumber == "" || $scope.phonenumber.length < 4){
            $cordovaDialogs.alert("Du hast keine mobile Rufnummer angegeben, bitte gebe eine gültige Handynummer ein und versuche es erneut.", "Fehler bei Überprüfung des SMS Codes", "OK");
            $scope.account.view = "unlock-phone";
            if (!$scope.$$phase){
              $scope.$apply();
            }
            return false;
          }
          $http.post(API.to("users/verify"), {
              "code": code,
              "phonenumber": $scope.phonenumber
          }).success(function(res){
              if ("cordova" in window){
                //  $cordovaProgress.hide();
              }
              if (res.error){

                $cordovaDialogs.alert(res.error, "Fehler bei der Registrierung.", "OK");
                return;
              }
              $scope.account.signedIn = true;
              $scope.account.saveCredentials({
                  signedIn: true,
                  phonenumber: $scope.phonenumber,
                  secret: $scope.secret
              });
          }).error(function(){
              if ("cordova" in window){
               //   $cordovaProgress.hide();
               $rootScope.$broadcast('loading:hide');
               alert("Da ist etwas schief gelaufen! Bitte versuche es später noch einmal.");
              }
          });
      };
})
