// Datoni ionic App
angular.module("dibari.angular-ellipsis",[]).directive("ellipsis",["$timeout","$window","$sce",function(a,b,c){var d=function(b){var c=null,d=[];this.remove=function(b){-1!==d.indexOf(b)&&(d.splice(d.indexOf(b),1),0===d.length&&(a.cancel(c),c=null))},this.add=function(e){-1===d.indexOf(e)&&d.push(e),c||(c=a(function(){var a=d.slice();c=null,d.length=0,a.forEach(function(a){a()})},b))}},e=new d(0),f=new d(75);return{restrict:"A",scope:{ngBind:"=",ngBindHtml:"=",ellipsisAppend:"@",ellipsisAppendClick:"&",ellipsisSymbol:"@",ellipsisSeparator:"@",useParent:"@",ellipsisSeparatorReg:"="},compile:function(a,d,g){return function(a,d,g){function h(a){var b=0;return angular.forEach(a.parent().children(),function(c){c!=a[0]&&(b+=c.clientHeight)}),a.parent()[0].clientHeight-b}function i(){var b=a.ngBind||a.ngBindHtml,e=!1;if(c.isEnabled()&&angular.isObject(b)&&c.getTrustedHtml(b)&&(e=!0,b=c.getTrustedHtml(b)),b){var f=!a.ngBind&&!!a.ngBindHtml,i=0,k="undefined"!=typeof g.ellipsisSymbol?g.ellipsisSymbol:"&hellip;",l="undefined"!=typeof a.ellipsisSeparator?g.ellipsisSeparator:" ",m="undefined"!=typeof a.ellipsisSeparatorReg?a.ellipsisSeparatorReg:!1,n="undefined"!=typeof a.ellipsisAppend&&""!==a.ellipsisAppend?k+"<span>"+a.ellipsisAppend+"</span>":k,o=m?b.match(m):b.split(l);if(g.isTruncated=!1,f?d.html(b):d.text(b),j(d,a.useParent)){var p=o.length,q=a.useParent?h(d):d[0].clientHeight;for(f?d.html(b+n):d.text(b).html(d.html()+n),d.attr("data-overflowed","true");p>i;i++)if(o.pop(),f?d.html(o.join(l)+n):d.text(o.join(l)).html(d.html()+n),(a.useParent?d.parent()[0]:d[0]).scrollHeight<q||j(d,a.useParent)===!1){g.isTruncated=!0;break}k!=n&&"undefined"!=typeof a.ellipsisAppendClick&&""!==a.ellipsisAppendClick&&d.find("span").bind("click",function(b){a.$apply(function(){a.ellipsisAppendClick.call(a,{event:b})})}),!e&&c.isEnabled()&&c.trustAsHtml(b)}}}function j(a,b){return a=b?a.parent():a,a[0].scrollHeight>a[0].clientHeight}function k(){(g.lastWindowResizeWidth!=window.innerWidth||g.lastWindowResizeHeight!=window.innerHeight)&&i(),g.lastWindowResizeWidth=window.innerWidth,g.lastWindowResizeHeight=window.innerHeight}function l(){f.add(k)}g.lastWindowResizeTime=0,g.lastWindowResizeWidth=0,g.lastWindowResizeHeight=0,g.lastWindowTimeoutEvent=null,g.isTruncated=!1,a.$watch("ngBind",function(){e.add(i)}),a.$watch("ngBindHtml",function(){e.add(i)}),a.$watch("ellipsisAppend",function(){i()});var m=angular.element(b);m.bind("resize",l),a.$on("$destroy",function(){m.unbind("resize",l),e.remove(i),f.remove(k)})}}}}]);
angular.module('datoniApp', ['ionic', 'ngAnimate', 'ngCordova', 'dibari.angular-ellipsis', 'datoniApp.controllers', 'datoniApp.services'])

.run(function($ionicPlatform, $cordovaAppRate, $ionicLoading, API, $interval, $http, $cordovaAppVersion, $rootScope, $cordovaInAppBrowser, $cordovaDialogs) {
  $rootScope.badge = {
    cart: 0
  }
  $ionicPlatform.ready(function() {
    //$rootScope.account = new AccountManager();
    if ("cordova" in window) {
      $cordovaAppVersion.getAppVersion().then(function (version) {
          $rootScope.version = version;
      });
    } else {
      $rootScope.version = "2.0.0";
    }

    // ping service for backend
    $interval(function(){
      var ping = "" + (+new Date());
      var pong = "";
      $http.post(API.to("/ping"), {
        ping: ping // TODO: add more device data here.
      }).then(function(data){
        if (data.pong !== ping){
          $rootScope.serverError = 1;
        } else {
          $rootScope.serverError = 0;
        }
      })
    }, 20000);

    $rootScope.$on('loading:show', function(){
      $ionicLoading.show({ template: '<ion-spinner icon="android" class="spinner-positive"></ion-spinner><br/>Wird geladen...' });
    });

    $rootScope.$on('loading:hide', function(){
      $ionicLoading.hide();
    });

    $rootScope.goto = function(href){
        $cordovaInAppBrowser.open(href, "_blank", {
          'location': 'yes',
          'clearcache': 'yes',
          'toolbar': 'no'
        });
        return false;
    }

    if (typeof AppRate !== "undefined"){
      $cordovaAppRateProvider.setPreferences({
        androidURL: 'https://play.google.com/store/apps/details?id=de.pascalraszyk.datoniapp',
        iosURL: '1131040971',
        appName: 'Da Toni',
        language: 'de',
        usesUntilPrompt: 3,
        openStoreInApp: false
      });
      $cordovaAppRate.promptForRating();
    }
  
    $rootScope.rateApp = function(){
         $cordovaAppRate.promptForRating(true);
    }
    
    // add datoni maintenance interceptor TODO

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }



  });


})

.config(function($cordovaAppRateProvider, $stateProvider, $httpProvider, $urlRouterProvider, $ionicConfigProvider) {
    $httpProvider.defaults.headers.common['X-API-KEY'] = '018f07057ca5ea82299cccb7ce6c4c74';
    $httpProvider.defaults.headers.common['X-API-TOKEN'] = 'eb730d12-29c8-4a86-a03f-2d2bc932832e';

    if (typeof AppRate !== "undefined"){


    }

    $ionicConfigProvider.tabs.position("bottom");
    $ionicConfigProvider.tabs.style("standard");
    /*$ionicConfigProvider.views.transition("ios");
    ;
    */
    $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html",
    controller: 'TabCtrl'
  })


  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.coupons', {
    url: '/coupons',
    views: {
      'tab-coupons': {
        templateUrl: 'templates/tab-coupons.html',
        controller: 'CouponCtrl'
      }
    }
  })

  .state('tab.profile', {
    abstract: true,
    url: '/profile',
    views: {
      'tab-profile': {
        template: "<ion-nav-view></ion-nav-view>"
      }
    },
    controller: "ProfileCtrl"
  })
  
  .state('tab.profile.phonenumber', {
    url: '/phonenumber',
    templateUrl: 'templates/profile/phonenumber.html',
    controller: 'ProfileCtrl'
  })

  .state('tab.menu', {
     abstract: true,
     url: '/menu',
     views: {
      'tab-menu': {
        template: '<ion-nav-view></ion-nav-view>'
      }
     }
  })
  
  .state('tab.menu.list', {
    url: '',
    templateUrl: 'templates/tab-menu-list.html',
    controller: 'MenuCtrl'
  })
  
  .state('tab.menu.view', {
    url: '/view/:id',
    templateUrl: 'templates/tab-menu-view.html',
    controller: 'MenuViewCtrl'
  })
 .state('tab.cart', {
     abstract: true,
     url: '/cart',
     views: {
      'tab-cart': {
        template: '<ion-nav-view></ion-nav-view>'
      }
     }
  })
  
  .state('tab.cart.view', {
      url: '',
      templateUrl: 'templates/tab-cart.html',
      controller: 'MenuCartCtrl',
  })
  
  .state('tab.cart.checkout', {
      url: '/checkout',
      templateUrl: 'templates/tab-menu-checkout.html',
      controller: 'MenuCartCtrl'
  })
  
  .state('tab.cart.locations', {
    url: '/locations',
    templateUrl: 'templates/tab-locations.html',
    controller: 'LocationCtrl'
  })
  
  .state('tab.cart.address', {
    url: '/locations',
    templateUrl: 'templates/tab-menu-address.html',
    controller: 'LocationCtrl'
  })

  
  .state('tab.profile.view', {
    url: '',
    templateUrl: 'templates/tab-profile.html',
    controller: 'ProfileCtrl'
  })
  .state('tab.profile.orders', {
    url: '/orders',
    templateUrl: 'templates/profile/orders.html',
    controller: 'ProfileCtrl'
  }).state('tab.profile.order_success', {
    url: '/order-success',
    templateUrl: 'templates/profile/order_success.html',
    controller: 'ProfileCtrl'
  }).state('tab.profile.favorites', {
    url: '/favorites',
    templateUrl: 'templates/profile/favorites.html',
      controller: 'ProfileCtrl'
  }).state('tab.profile.address', {
    url: '/address',
    templateUrl: 'templates/profile/address.html',
    controller: "ProfileCtrl"
  })

  .state('tab.settings', {
    abstract: true,
    url: '/settings',
    views: {
      'tab-settings': {
        template: '<ion-nav-view></ion-nav-view>'
      }
    }
  }).state('tab.settings.frontview', {
    url: '',
    templateUrl: 'templates/tab-settings.html',
    controller: 'SettingsCtrl'
    }).state('tab.settings.imprint', {
    url: '/settings/imprint',
    templateUrl: 'templates/tab-settings-imprint.html',
    controller: 'SettingsCtrl'


  }).state('tab.settings.dataprivacy', {
    url: '/settings/dataprivacy',

    templateUrl: 'templates/tab-settings-dataprivacy.html',
    controller: 'SettingsCtrl'

  }).state('tab.settings.disclaimer', {
    url: '/settings/disclaimer',
    templateUrl: 'templates/tab-settings-disclaimer.html',
    controller: 'SettingsCtrl'

  })

  .state('tab.specials', {
    url: '/specials',
    views: {
      'tab-specials': {
        templateUrl: 'templates/tab-specials.html',
        controller: 'SpecialsCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/menu');

});
