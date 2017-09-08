app.controller("TakePictureCtrl",function ($scope, $cordovaCamera,$ionicPlatform, $cordovaFile,$ionicActionSheet,FileService,ImageService) {

  $scope.pictureUrl = "http://placehold.it/300*300";
  $scope.images = [];

  // $ionicPlatform.ready(function () {
  //   $scope.images=FileService.images();
  // });

  $scope.addImage=function () {

    // ImageService.handleMediaDialog(type).then(function () {
    //   $scope.apply();
    // })

      var options={
        quality: 100,
        destinationType : Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        popoverOptions: CameraPopoverOptions,
        allowEdit:false,
        targetWidth: 300,
        targetHeight: 300,
        correctOrientation :true,
        encodingType : Camera.EncodingType.JPEG,
        saveToPhotoAlbum:true
      };
      $cordovaCamera.getPicture(options).then(function(imageData) {

        // 4
        onImageSuccess(imageData);

        function onImageSuccess(fileURI) {
          createFileEntry(fileURI);
        }

        function createFileEntry(fileURI) {
          window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
        }

        // 5
        function copyFile(fileEntry) {
          var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
          var newName = makeid() + name;

          window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
              fileEntry.copyTo(
                fileSystem2,
                newName,
                onCopySuccess,
                fail
              );
            },
            fail);
        }

        // 6
        function onCopySuccess(entry) {
          $scope.$apply(function () {
            $scope.images.push(entry.nativeURL);
          });
        }

        function fail(error) {
          console.log("fail: " + error.code);
        }

        function makeid() {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

          for (var i=0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          return text;
        }

      }, function(err) {
        console.log(err);
      });

    // $cordovaCamera.getPicture(options)
    //   .then(function (data) {
    //     $scope.pictureUrl = "data:image/jpeg;base64," + data;
    //   },function (err) {
    //     console.log("err",err);
    //   })

    }
    // $scope.addMedia=function () {
    //   $scope.hideSheet=$ionicActionSheet.show({
    //     buttonClicked:function (index) {
    //       $scope.addImage(index);
    //     }
    //   });
    // }
    $scope.urlForImage=function (imageName) {
      var name = imageName.substr(imageName.lastIndexOf('/') + 1);
      var trueOrigin = cordova.file.dataDirectory + name;
      return trueOrigin;
    }
})
