angular.module("datoniApp.services")
.service('Cart', function(AccountManager, $rootScope, $cordovaToast, $ionicPopup, $timeout){
  var Cart = function(){
      this.items = [];
    return this;
  };
  Cart.prototype.hasItem = function(item){
       var hasItem = false;
        angular.forEach(this.items, function(theItem){
           var hasEqualIngredients = false;
           if ((typeof item.addedIngredients !== "undefined" && typeof theItem.removedIngredients !== "undefined" &&
               typeof item.removedIngredients !== "undefined" && typeof theItem.removedIngredients !== "undefined") && (
             item.addedIngredients.sort().join("|") === theItem.addedIngredients.sort().join("")
               || item.removedIngredients.sort().join("|") === theItem.removedIngredients.sort().join(""))){
                 hasEqualIngredients = true;
               }
          
           if (item.addedIngredients == theItem.addedIngredients || item.removedIngredients == theItem.removedIngredients){
             hasEqualIngredients = true;
           }
           if (item.product && theItem.product){
            if (item.product.number === theItem.product.number && hasEqualIngredients){
                 hasItem = true;
                 theItem = item;
            }
           }
       });
       return hasItem;
  }



  Cart.prototype.addItem = function(theItem, category){
     // if ("cordova" in window) $cordovaToast.show(theItem.name + " hinzugefügt.", "short", "top");

      var hasItem = this.hasItem(theItem);
      if (!hasItem){
          if (typeof theItem.price === "undefined"){
            var itemPrice = theItem.prices[0];
            if (itemPrice.price === null){
              // lets remove this then.
              theItem.prices.shift();
              itemPrice = theItem.prices[0];
            }
            if (theItem.prices.length > 1){
              itemPrice = theItem.prices[1];
            }
          } else {
            itemPrice = theItem.price
          }



          // added/removed ingredients
          var removedIngredients = [];
          var addedIngredients = [];

          var ingredients = Object.keys(theItem.ingredients);
          for (var i = 0, len = ingredients.length; i < len; i++){

            var ingredient = ingredients[i];
            var ing = theItem.ingredients[ingredient];

            if ( (category == 1 || category == 5 || category == 3 || category == 4) && typeof theItem.defaultIngredients !== "undefined" && theItem.defaultIngredients.indexOf(ingredient) == -1){
              if (ing){
                addedIngredients.push(ingredient);
              }
            } else if  ((category == 1 || category == 5 || category == 3 || category == 4) && typeof theItem.defaultIngredients !== "undefined" && theItem.defaultIngredients.indexOf(ingredient) > -1) {
              if (!ing){
                removedIngredients.push(ingredient);
              }
            }
          }

          theItem = angular.copy(theItem);
          if (typeof theItem.dressing !== "undefined" && theItem.dressing){
            theItem.name += " (" + theItem.dressing + ")";
          }
          
          theItem.name = theItem.name.replace("(null)", "");

          this.items.push({sid: +new Date(), category: category, product: theItem, ingredients: theItem.ingredients, addedIngredients: addedIngredients, removedIngredients: removedIngredients, quantity: 1, size: itemPrice.size, price: itemPrice.price})
          //alertify.success(theItem.name + " hinzugefügt");
          showDialog(theItem.name + " hinzugefügt", "ion-checkmark-circled");

      } else {
          this.changeQuantity(theItem, ++theItem.quantity);
      }
      $rootScope.badge.cart = this.items.length;
  };

  var showDialog = function(message, icon){
             var $dialog = $ionicPopup.show({
                 title: message,
                 template: '<i class="ion ' + icon + ' dialog-icon"></i>',
                 cssClass: 'dialog-popup'
             });
             $timeout(function(){
                 $dialog.close();
             }, 1000);
         }

  Cart.prototype.clear = function(){
    this.items = [];
  };

  Cart.prototype.changeQuantity = function(theItem, quantity){
      newItems = [];
      if (quantity < 1 || quantity > 10){ return; } // we limit this to prevent abusing.
      angular.forEach(this.items, function(item){
          if (item.product.number === theItem.product.number && item.sid === theItem.sid){
              item.quantity = quantity;
          }
          newItems.push(item);
      });
      this.items = newItems;
  };

  Cart.prototype.getNumber = function(){
      return this.items.length;
  };
  Cart.getPrice = function(item){
      if (typeof item.addedIngredients === "undefined" || item.addedIngredients.length == 0){ return item.price; }
      var price = item.price;
      var ingredientPricePerSize = 0.50; // klein
      var sizes = item.product.prices;
      for (var i = 0, len = sizes.length; i < len; i++){
        if (sizes[i].price == item.price){
          var itemSize = sizes[i].size;
        }
      }
      console.log(itemSize);
      ingredientsPrice = 0;
      item.addedIngredients.forEach(function(i){
          console.log(i);
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





  Cart.prototype.getPostData = function(){
    return this.items.map(function(i){ return {product: i.product, size: i.size, quantity: i.quantity, price: Cart.getPrice(i), addedIngredients: i.addedIngredients, removedIngredients: i.removedIngredients}; });
  };

  Cart.prototype.removeItem = function(theItem){
      newItems = [];
      angular.forEach(this.items, function(item){
          if (item.product.number === theItem.product.number && item.sid === theItem.sid){
              return;
          }
          newItems.push(item);
      });
      this.items = newItems;
      try {
        alertify.error(item.name + " hinzugefügt");
      } catch (e){
        // ignore. wow such bad. not much developer.
      }
      $rootScope.badge.cart = this.items.length;
  };

  Cart.prototype.checkout = function(){

  };

  return Cart;
})
