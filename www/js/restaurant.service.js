app.service('RestaurantService',function ($http) {
  this.getRestaurants=function (lat,long) {
    console.log('service lat',lat);
    console.log('service long',long);
    return	$http({	method :"GET",

      url: "http://stg-api.spotcrunch.com/stgapi/restaurants/restaurantNearBy?user_lat="+lat+"&user_lng="+long+"&page=1&limit=5&access_token="+localStorage.getItem("id")

    })
  }
})
