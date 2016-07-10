angular.module('datoniApp.controllers')
.controller('AccountCtrl', function($cordovaDialogs, AccountManager, Storage, $http, $scope, $cordovaProgress, API) {
  $scope.account = new AccountManager();

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
});
