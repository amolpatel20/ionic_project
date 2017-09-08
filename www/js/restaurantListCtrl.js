app.controller('RestaurantListCtrl',function ($scope,$state, $cordovaGeolocation,RestaurantService) {

  var init=function () {

    $scope.restaurants=[];
    $scope.imageName=false;
    $scope.findLoc();

  }

  $scope.findLoc=function () {
    console.log('search rest call..');
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        $scope.lat  = position.coords.latitude;
        $scope.long = position.coords.longitude;
        console.log('lat',$scope.lat);
        console.log('long',$scope.long);

        RestaurantService.getRestaurants($scope.lat,$scope.long).then(function (data) {
          console.log('restaurants data',data);
          $scope.restaurants=data.data.restaurants;
          $scope.restaurantBaseUrl=data.data.baseUrl;

          localStorage.setItem('loggedInUserId',data.data.loggedInUserId);
          console.log($scope.restaurants);
        },function (err) {
        })

      }, function(err) {
        // error
      });

  }
  $scope.goTo=function (id,lat,long,restaurantName) {
    $state.go('app.restaurant-details',{'id':id,'lat':lat,'long':long,'restaurantName':restaurantName});
  }
  init();
});
