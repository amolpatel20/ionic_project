
app.controller('LoginCtrl', function($scope, $state,loginService) {
  console.log("login ctrl....");



  // Perform the login action when the user submits the login form
  $scope.doLogin = function(user) {
    $scope.user=user;
    console.log('Doing login', $scope.user);
    loginService.login($scope.user).then(function (data) {
      console.log('data',data);
      localStorage.setItem("id", data.data.id);

      console.log("in local storGE",localStorage.getItem("id"))
      $state.go('app.search');
    },function (err) {
      console.log('err', err);
    })
  };
  $scope.forgotPassword=function () {

    $state.go('app.forgotpassword');
  }

});
