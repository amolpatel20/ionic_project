app.service('DeliveryLocationService',function ($http) {

  this.getDileveryLocationFlag=function (lat,lng,rest_id) {
    return	$http({	method :"POST",
      data:{
      lat:lat,
        lng:lng,
        rest_id:rest_id
      },
      url: "http://stg-api.spotcrunch.com/stgapi/app_user_orders/checkRestaurantRadius?access_token="+localStorage.getItem("id")


    })
    //return $http.post('http://stg-api.spotcrunch.com/stgapi/app_users/login?access_token=', user)
  }
})
