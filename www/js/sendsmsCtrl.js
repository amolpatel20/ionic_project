app.controller('SendsmsCtrl',function ($scope,$state,$cordovaSms) {
  $scope.to = $state.params.to;
  $scope.sms=localStorage.getItem('sms');


  $scope.sendSms=function () {
    $cordovaSms.send($scope.to,$scope.sms).then(function (data) {
      console.log('data send sms',data);
    },function (err) {
      console.log('err in sms send',err);
    })
  }
});
