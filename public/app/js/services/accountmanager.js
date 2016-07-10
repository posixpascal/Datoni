angular.module('datoniApp.services')
.service('AccountManager', function(Storage){
  var AccountManager = function(){
    this.getCredentials =  function(){
      return Storage.get("user.credentials", {
          "signedIn": false
      });
    };

    var creds = this.getCredentials();
    if (creds.signedIn){
        this.signedIn = true;
    } else {
        this.signedIn = false;
        if (Storage.get('phonenumber', false)){
          this.view = 'enter-code';
        } else {
          this.view = 'modal';
        }
    }
    return this;
  };



  AccountManager.prototype.saveCredentials = function(creds){
      Storage.set("user.credentials", creds);
  };


  AccountManager.prototype.isSignedIn = function(){
      return this.signedIn;
  };


  AccountManager.prototype.getUser = function(){

  };

  AccountManager.prototype.verifySMS = function(sms){

  };

  return AccountManager;
})
