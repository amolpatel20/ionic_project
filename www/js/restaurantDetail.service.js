app.service('RestaurantDetailService',function ($http) {
  this.getRestaurantDetail=function (id,lat,long) {
    return	$http({	method :"GET",

      url: "http://stg-api.spotcrunch.com/stgapi/restaurants/get-details/"+localStorage.getItem('loggedInUserId')+"/"+id+"/"+lat+"/"+long+"?access_token="+localStorage.getItem("id")

    })
  }
})
