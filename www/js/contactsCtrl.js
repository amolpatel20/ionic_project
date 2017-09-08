app.controller('ContactsCtrl',function ($scope,$state,$cordovaContacts,$ionicLoading) {
  var init=function () {

    $cordovaContacts.find([]).then(function (allCantacts) {
      $scope.contacts=allCantacts;
      console.log('all contacts',$scope.contacts);

    })


  }
  $scope.openSms=function (to) {
    $state.go('app.sendsms',{to:to});
  }
  $scope.searchContact=function (searchText) {

      var opts = {                                           //search options
        filter : searchText,                                 // 'Bob'
        multiple: true,                                      // Yes, return any contact that matches criteria
        fields:  [ 'displayName', 'name' ]                   // These are the fields to search for 'bob'.
      };

      if ($ionicPlatform.isAndroid()) {
        opts.hasPhoneNumber = true;         //hasPhoneNumber only works for android.
      };


    $cordovaContacts.find(opts).then(function (contactsFound) {
      $scope.contacts = contactsFound;
    });

  }
  init();
})
