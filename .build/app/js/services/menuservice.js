angular.module('datoniApp.services')
.service('MenuService', function($http, API) {
  var MenuService = function(){
    return this;
  };

  MenuService.prototype.getMenu = function(menu){
    return $http.get(API.to("categories/" + menu + ".json"));
  };

  return new MenuService();


})
