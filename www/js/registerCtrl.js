
app.controller('RegisterCtrl', function($scope, $state,registerService) {
  $scope.user ={};
  $scope.registerUser=function () {

    registerService.register($scope.user).then(function (data) {
      console.log('data',data);
      $state.go('app.login');
    },function (err) {
      console.log('err', err);
    })
  }
});
