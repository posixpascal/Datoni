angular.module('datoniApp.controllers')
.controller('MenuViewCtrl', function($scope, $ionicModal,MenuService,OpeningTimes, $cordovaProgress, $stateParams, $ionicPopover, $rootScope, Cart,$state, Storage, $filter){
    if ($rootScope.isLoading){
        $rootScope.$broadcast('loading:hide');
    }


    $scope.menu = false;

    $scope.selectSize = function($event, item, category){
      if ($stateParams.id == 4 || $stateParams.id == 3){
        $ionicPopover.fromTemplateUrl('pizza-size-popover.html', {
            scope: $scope
          }).then(function(popover){
            $scope.popover = popover;
            $scope.popoverItem = item;
            $scope.category = $stateParams.id;
            popover.show($event);
          })
        } else {
          $scope.addItem($event, item, category);
        }
    }

    $scope.addItemWithPrice = function(item, price){
        item.price = price;
        $rootScope.cart.addItem(item, $scope.category);
        $scope.popover.hide();
    }
    $scope.addSaladSize = function(size){
      $scope.popoverItem.price = size
      $rootScope.cart.addItem($scope.popoverItem, $stateParams.id);
      $scope.popover.hide();
    }

    $scope.addItemWithDressing = function(dressing, size){
     var product = angular.copy($scope.popoverItem);
     product.name += " (" + dressing + ")";
     if (product.number == '3' && typeof size == 'undefined'){
       $scope.popoverItem = product;
       $ionicPopover.fromTemplateUrl('salad-size-popover.html', {
          scope: $scope
        }).then(function(popover){
          $scope.popover.hide();
          $scope.popover = popover;
          popover.show($scope.lastEvent);
        })
     } else {

       $rootScope.cart.addItem(product, $stateParams.id);
       $scope.popover.hide();
     }

    }

    $scope.closeModal = function(){
      $scope.modal.hide();
    };

    $scope.sortMenu = function(opt){
      n = opt.number.replace(/a|b/, '');

      return parseInt(n);
    }



    $scope.datoniOpened = function(){
      return OpeningTimes.isOpen();
    }

    if (typeof $rootScope.cart === "undefined"){
        $rootScope.cart = new Cart();
    }

    
    $scope.categoryId = $stateParams.id;
    MenuService.getMenu($scope.categoryId).then(function(req){
      $scope.menu = req.data;
    });
    $scope.editIngredients = function(product, categoryId){
      $scope.editIngredientsWithTemplate('templates/modal-edit-ingredients.html', product, categoryId);
    }

    $scope.editSaladIngredients = function(product, categoryId){
      $scope.editIngredientsWithTemplate('templates/modal-edit-salad-ingredients.html', product, categoryId);
    }

    $scope.editIngredientsWithTemplate = function(template, product, categoryId){
      $scope.product = product;
      $scope.hasItem = $rootScope.cart.hasItem(product);
 
      if (typeof $scope.product.defaultIngredients === "undefined"){
        $scope.product.defaultIngredients = [];
        var ingredients = angular.copy($scope.product.ingredients);
         for (var ing in ingredients){
          if ($scope.product.ingredients.hasOwnProperty(ing) && $scope.product.ingredients[ing]){
            $scope.product.defaultIngredients.push(ing);
          }
      }
      }
      for (var ing in $scope.product.ingredients){
        if ($scope.product.ingredients.hasOwnProperty(ing)){
          $scope.product.ingredients[ing] = false;
        }
      }

      angular.forEach($scope.product.defaultIngredients, function(ing){
        $scope.product.ingredients[ing] = true;
      });
      $scope.product.dressing = null;


      $ionicModal.fromTemplateUrl(template, {
          scope: $scope,
          animation: 'slide-in-up'
      }).then(function(modal){
          $scope.modal = modal;
          $scope.modal.show();
      });
    };



    $scope.addItemWithIngredients = function(item){
      // detect changed ingredients
      console.log(item);
      $rootScope.cart.addItem(item, $stateParams.id);
      $scope.modal.hide();
    }
    $scope.addItemWithIngredientsDressing = function(item){
      $rootScope.cart.addItem(item, $stateParams.id);
      $scope.modal.hide();
    }
    $scope.addItem = function($event, item, category){
      console.log(item);
      if (item.name.toLowerCase() == "wein"){
         $scope.popoverItem = item;
        $ionicPopover.fromTemplateUrl('wine-popover.html', {
          scope: $scope
        }).then(function(popover){
          $scope.popover = popover;
          popover.show($event);
        })
      } else if (item.number == "145" || item.number == "146"){
        $scope.popoverItem = item;
        $ionicPopover.fromTemplateUrl('soda-popover.html', {
          scope: $scope
        }).then(function(popover){
          $scope.popover = popover;
          popover.show($event);
        })
      }

      else if ($stateParams.id == 1){
        $scope.popoverItem = item;
        $ionicPopover.fromTemplateUrl('dressing-popover.html', {
          scope: $scope
        }).then(function(popover){
          $scope.popover = popover;
          popover.show($event);
          $scope.lastEvent = $event;
        })
      } else {
        $rootScope.cart.addItem(item, $stateParams.id);
      }
    };


    $scope.addSoda = function(soda){
      if (soda){ $scope.popoverItem.name += " (" + soda + ")"; }
      $rootScope.cart.addItem($scope.popoverItem, $stateParams.id);
      $scope.popover.hide();
      $scope.popoverItem.name = $scope.popoverItem.name.replace(' (' + soda + ')', '');
    }

    $scope.addWine = function(wine){
       $scope.popoverItem.name = "1 Flasche " + wine;
       $rootScope.cart.addItem($scope.popoverItem, $stateParams.id);
       $scope.popover.hide();
    }

    $scope.isFavorite = function(product){
        if (typeof product === "undefined"){
          return false;
        }

        var favorites = Storage.get("user.favorites", {})["product-" + product.number];
        return (typeof favorites !== "undefined");
    };

    $scope.toggleFavorites = function(product){
        var favorites = Storage.get("user.favorites", {});
        if (typeof favorites["product-" + product.number] === "undefined"){
            // add to favorites
            favorites["product-" + product.number] = {
                product: product,
                category: $stateParams.id
            };
        } else {
            delete favorites["product-" + product.number];
        }
        Storage.set("user.favorites", favorites);
    };
})
