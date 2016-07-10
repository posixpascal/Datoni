angular.module('datoniApp.services')
.factory("Cache", function(){
  window.CACHE = window.CACHE || {};
  return {
    set: function(key, data){
      window.CACHE[key] = data;
    },
    get: function(key, value){
      if (typeof window.CACHE[key] === "undefined"){
        return false;
      }
      return window.CACHE[key];
    },
    clear: function(){
      window.CACHE = {}; // brilliant... lol
    }
  };
});
