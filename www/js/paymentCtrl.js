app.controller('PaymentCtrl',function ($scope) {
  var init=function () {
    $scope.currentYear=new Date().getFullYear();
    var now = new Date();
    $scope.daysCnt=new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    console.log('month days',$scope.daysCnt);
    $scope.years=[];
    $scope.months=[];
    for(var year=$scope.currentYear;year<=2029;year++){
      $scope.years.push(year);
    }
    for(var month=1;month<=12;month++){
      $scope.months.push(month);
    }
  }
  init();
})
