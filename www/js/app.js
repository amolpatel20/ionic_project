// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova','ion-google-autocomplete', 'tabSlideBox'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller:'SearchCtrl'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html',
          controller :'BowerCtrl'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
    })
.state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })
    .state('app.forgotpassword', {
      url: '/forgotpassword',
      views: {
        'menuContent': {
          templateUrl: 'templates/forgotpassword.html',
          controller: 'ForgotPassCtrl'
        }
      }
    })
    .state('app.register', {
      url: '/register',
      views: {
        'menuContent': {
          templateUrl: 'templates/register.html',
          controller: 'RegisterCtrl'
        }
      }
    })
    .state('app.takepicture',{
      url:'/takepicture',
      views :{
        'menuContent':{
          templateUrl:'templates/take_picture.html',
          controller :'TakePictureCtrl'
        }
      }
    })
    .state('app.contacts',{
    url:'/contacts',
    views :{
      'menuContent':{
        templateUrl:'templates/contacts.html',
        controller :'ContactsCtrl'
      }
    }
  })
    .state('app.sendsms',{
      url:'/sendsms',
      params: {
        'to':'to'
      },
      views :{
        'menuContent':{
          templateUrl:'templates/sendsms.html',
          controller :'SendsmsCtrl'
        }
      }
    })
    .state('app.restaurant-list',{
      url:'/restaurant-list',
      views :{
        'menuContent':{
          templateUrl:'templates/restaurant-list.html',
          controller :'RestaurantListCtrl'
        }
      }
    })
    .state('app.restaurant-details',{
      url:'/restaurant-details',
      params:{
        'id':'id',
        'lat':'lat',
        'long':'long',
        'restaurantName':'restaurantName'
      },
      views :{
        'menuContent':{
          templateUrl:'templates/restaurant-details.html',
          controller :'RestaurantDetailsCtrl'
        }
      }
    })
    .state('app.search-place',{
      url:'/search-place',
      views:{
        'menuContent':{
          templateUrl:'/templates/search-place.html',
          controller:'SearchPlace',

        }
      }
    })
    .state('app.confirm-order',{
      url:'/confirm-order',
      params: {
        selectedProducts: 'selectedProducts',
        delivery_charges:'delivery_charges',
        wholeTotal:'wholeTotal'
      },
      views:{
        'menuContent':{
          templateUrl:'/templates/confirm-order.html',
          controller:'ConfirmOrderCtrl'
        }
      }
    })
    .state('app.payment',{
      url:'/payment',

      views:{
        'menuContent':{
          templateUrl:'/templates/payment.html',
          controller:'PaymentCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
