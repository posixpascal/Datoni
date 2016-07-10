angular.module('datoniApp.services', [])

// I hope no one sees this ... ever.
.filter("fixGrammar", function(){
  return function(input){
    return input.replace("Gross", "Groß").replace("Default", "Normal")
  }
}).filter("unfixGrammar", function(){
  return function(input){
    return input.replace("Groß", "Gross")
  }
})

.filter('price', function(){
  return function(product){
    var prices = product.prices;
    var price = prices[0].price;
    if (price === null){
      price = prices[1].price;
    }

    return parseFloat(price, 10);
  };
})

.filter('capitalized', function(){
  return function(s){
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
})

.filter('orderNameForType', function(){
  return function(orderType){
    return (orderType == 'pickup') ? "Abholtermin" : "Liefertermin";
  };
})

.service("Updater", function($http, API){
  $http.get(API.to('updates')).success(function(){
    
  });
})

.service("Migration", function(Storage, $rootScope){
  return {
    migrate: function(){
      if (typeof this.migrators[$rootScope.version] !== "undefined"){
        this.migrators[$rootScope.version]();
      }
    },
    migrators: {
      '2.0.0': function(){
        // delete orders
        localStorage.removeItem("user.orders");
      }
    }
  }
})
;
