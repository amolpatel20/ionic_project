app.service('loginService',function ($http) {
  this.login=function (user) {
    console.log("login service call....", user);
    // return	$http({	method :"POST",
    //   data:{
    //     "mobile_no":user.mobile_no,
    //     "password":user.password
    //   },
    //   url: "http://stg-api.spotcrunch.com/explorer/#!/app_user/app_user_login"
    // });
    return $http.post('http://stg-api.spotcrunch.com/stgapi/app_users/login?access_token=', user)
  }
})
