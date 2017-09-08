app.controller('ConfirmOrderCtrl',function ($scope,$state,$ionicPopup) {
  $scope.selectedProducts=$state.params.selectedProducts;
  $scope.delivery_charges=$state.params.delivery_charges;
  $scope.wholePrize=$state.params.wholeTotal;
  $scope.wholePrize=$scope.wholePrize+$scope.delivery_charges;
  $scope.confirmOrder=function () {


    var confirmPopup = $ionicPopup.confirm({
      title: 'SpotCrunch',
      template: 'Once you place this order, it cannot be cancelled. Click OK to Proceed?',
      buttons: [{
        text: 'CANCEL',
        type: 'button button-clear button-balanced',
        scope: null,
        onTap: function(e) {

        }

      }, {
        text: 'OK',
        type: 'button button-clear button-balanced',
        onTap: function(e) {
          $state.go('app.payment');
        }
      }]
    });

  }

})
