angular.module('datoniApp.services')

.factory('API', function(){
  return {
    to: function(segment){
      if (true) return "http://46.101.178.178:3001/api/v1/" + segment;
      return "http://localhost:3000/api/v1/" + segment;
    }
  };
})
