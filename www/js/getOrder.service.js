app.service('GetOrderService',function ($http) {
  this.getOrder=function (id) {
    return	$http({	method :"GET",

      url: "http://stg-api.spotcrunch.com/stgapi/restaurants/order-page/"+id+"?access_token="+localStorage.getItem("id")
    })
  }
})
