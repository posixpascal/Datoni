angular.module('datoniApp.services')

.service('Storage', function(){
    var Storage = function(){
        return this;
    };

    Storage.prototype.set = function(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    };

    Storage.prototype.get = function(key, defaultValue){
        if (localStorage.getItem(key) === null){
            this.set(key, defaultValue);
        }
        var data = defaultValue;
        // users might mess up localStorage
        try {
          data = JSON.parse(localStorage.getItem(key));
        } catch (e){}
        return data;
    }

    return new Storage();
})
