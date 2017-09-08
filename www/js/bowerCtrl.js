app.controller('BowerCtrl',function ($scope, $state) {

  var init=function () {
    $scope.updateFlag=false;
    $scope.selectedId=0;
    $scope.listItems=[{'name':'abc'},{'name':'xyz'}];
  }
  init();
  $scope.addTOList=function (name) {
    console.log('name',name);
    $scope.name={'name': name};
    $scope.listItems.push($scope.name);
  }
  $scope.deleteItem=function (item) {
    var idx = $scope.listItems.indexOf(item);
   // var st = $scope.currentTask.subtasks[idx];
    // remove from DB
    //SubTask.remove({'name': subtask.id});
    // remove from local array
    $scope.listItems.splice(idx,1)
  }
  $scope.editItem=function (item) {
    $scope.updateFlag=true;
    $scope.name=item.name;
    $scope.selectedId=item.index;
  }
  $scope.updateItem=function (name) {
    console.log('selected item',$scope.selectedId);
    $scope.listItems[$scope.selectedId].name=name;

    // for (var i = 0; i < $scope.listItems.length; i++) {
    //   if ($scope.listItems[i].name === name) {
    //     $scope.listItems[i].name=name;
    //   }
    // }
  }
  $scope.openContacts=function (name) {
    localStorage.setItem("sms", name);
    $state.go('app.contacts');
  }
})
