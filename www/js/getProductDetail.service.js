app.service('GetProductDetails',function ($http) {
  this.getProductDetails=function (id) {
    return	$http({	method :"GET",

      url: "http://stg-api.spotcrunch.com/stgapi/products/getProductDetails?productId="+id+"&access_token="+localStorage.getItem("id")
    })
  }
})
