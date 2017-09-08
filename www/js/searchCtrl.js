app.controller('SearchCtrl',function ($scope,$state,$cordovaGeolocation,flickService) {

  var init=function () {
    $scope.flicks={};
    $scope.getFlicks();
  }

  $scope.getFlicks=function () {

    flickService.getFlicks().then(function (data) {
      console.log('flicks data',data.data);
      $scope.flicks = data.data.data.flicks;
      console.log('flicks :',$scope.flicks);
      $scope.flick_image_baseUrl=data.data.data.flick_image_baseUrl;
      console.log('flicks url :',$scope.flick_image_baseUrl);
      $scope.flick_sender_pic_baseUrl=data.data.data.flick_sender_pic_baseUrl;
    },function (err) {
      console.log('err',err);
    })
  }
  $scope.searchRestaurant=function () {

    $state.go('app.restaurant-list');


  }
  init();
})
