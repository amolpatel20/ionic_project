app.service('resetPassService',function ($http) {
  this.forgotPass=function (user) {
    return	$http({	method :"POST",
      data:{
        "email":user.email
      },
      url: "http://10.0.28.175:5002/api/residencies/reset"
    });
  }
})
