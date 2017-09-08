app.controller('ForgotPassCtrl', function($scope, $state,resetPassService) {
  $scope.forgotPass=function (user) {
    $scope.user=user
    resetPassService.forgotPass($scope.user).then(function (data) {
      console.log('data',data);
      $state.go('app.search');
    },function (err) {
      console.log('err', err);
    })
  }
});
