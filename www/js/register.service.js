app.service('registerService',function ($http) {
  this.register=function (user) {
    console.log("register service call....", user);
    return	$http({	method :"POST",
      data:{
        "name":user.first_name,
        "address":user.address,
        "password":user.password,
        "username":user.username,
        "email": user.email
      },
      url: "http://10.0.28.175:5002/api/residencies"
    });
    //return $http.post('http://staging.php-dev.in:8844/trainingapp/api/users/register', user)
  }
})
