app.service('flickService',function ($http) {
  this.getFlicks=function (user) {
    console.log("flick service call....", user);
    return	$http({	method :"GET",

      url: "http://stg-api.spotcrunch.com/stgapi/flicks/getFeeds?app_user_id=10&page=2&no_of_flicks=5&access_token="+localStorage.getItem("id")

    })
    //return $http.post('http://stg-api.spotcrunch.com/stgapi/app_users/login?access_token=', user)
  }
})
