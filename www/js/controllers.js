var app = angular.module('starter.controllers', []);

app.controller('AppCtrl', function($scope,$state, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Open the login modal
  $scope.login = function() {
    $state.go('app.login');
  };

  $scope.registerPage=function () {

    $state.go('app.register');
    console.log('register button click...');
  };


});

app.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
});

app.controller('PlaylistCtrl', function($scope, $stateParams) {
});
