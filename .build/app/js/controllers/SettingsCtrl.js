angular.module("datoniApp.controllers")
.controller('SettingsCtrl', function($scope, $cordovaProgress,$cordovaAppRate, $cordovaInAppBrowser, $cordovaAppVersion, Storage, $ionicModal, $rootScope){

     $scope.showFeedbackModal = function() {
       $scope.modal.show();
     };
     $scope.closeFeedbackModal = function() {
       $scope.modal.hide();
     };
     var currentMiniGameToggles = 0;
     var miniGameMessages = [
      undefined,
      undefined,
      undefined,
      "Hör auf...",
      "Kalt...",
      "Kalt...",
      "Wärmer...",
      "Brennend heiß...",
      "Kalt. hahaha.",
      undefined,
      undefined,
      "Lässt nicht locker oder?",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      "????",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      "Das... funktioniert nicht.",
      undefined,
      undefined,
      undefined,
      "Es wird nicht funktionieren...",
      undefined,
      undefined,
      undefined,
      
      undefined,
      undefined,
      undefined,
      
      undefined,
      undefined,
      undefined,
      
      undefined,
      undefined,
      undefined,
      
      undefined,
      undefined,
      undefined,
      
      "...",
     ];

     var playMiniGame = function(){
      alert("Alles klar. Wenn du hier 2000 Punkte bekommst geb ich dir ne Pizza aus ok? ;).");
      window.location.href = "minigame/index.html";
     };

     $scope.toggleMiniGame = function(){
        currentMiniGameToggles++;

        if (typeof miniGameMessages[currentMiniGameToggles] !== "undefined"){
          alert(miniGameMessages[currentMiniGameToggles]);
        }
        if (currentMiniGameToggles >= miniGameMessages.length){
          currentMiniGameToggles = 0;
          playMiniGame();
        }
     };



     $scope.rateApp = function(){
      
      $cordovaAppRate.promptForRating(true);
     }

   $scope.version = $rootScope.version;



    $scope.saveSettings = function(){
        Storage.set("app.settings", angular.copy($scope.settings));
    };

    $scope.getSettings = function(){
        return Storage.get("app.settings", {
            hasSubscribed: true
        });
    };

    $scope.goto = function(url){
      $cordovaInAppBrowser.open(url, "_system");
    }

    $scope.settings = $scope.getSettings();

})
