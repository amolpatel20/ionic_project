app.controller('RestaurantDetailsCtrl',function ($scope,$state,$cordovaProgress,$ionicModal,DeliveryLocationService,RestaurantDetailService,GetOrderService,GetProductDetails) {
  var init=function () {
    $scope.restaurant={};
    $scope.totalStarter=0;
    $scope.wholeTotal=0;
    $scope.imageName=false;
    $scope.productsCnt=[];
    $scope.cnt=0;
    $scope.starterCnt=0;
    $scope.cartFlag=false;
    $scope.deliveryStatus='Out of Area';
    $scope.id=$state.params.id;
    $scope.lat=$state.params.lat;
    $scope.long=$state.params.long;
    $scope.currency_symbol='';
    $scope.restaurantName=$state.params.restaurantName;
    console.log('restaurant id',$scope.id);
    console.log('restaurant id',$scope.lat);
    console.log('restaurant id',$scope.long);
    console.log('restaurant id',$scope.restaurantName);
    $scope.getRestauDetails();
  }
  $scope.getRestauDetails=function () {
    RestaurantDetailService.getRestaurantDetail($scope.id,$scope.lat,$scope.long).then(function (data) {
      console.log('restaurant',data);
      //$scope.restaurant=data.data.restauant;

    },function (err) {
      console.log(err);
    });
    GetOrderService.getOrder($scope.id).then(function (data) {
      console.log('order data',data);
      $scope.restaurant=data.data.restaurant;


      $scope.delivery_charges=data.data.restaurant.delivery_charges;

      $scope.product_categories=data.data.product_categories;

      // console.log("pc",$scope.product_categories.products);

      console.log("pc",$scope.products);
      for (var i=0;i<$scope.product_categories.length;i++){

        $scope.products=$scope.product_categories[i];
        console.log('products',$scope.products);
        for (var j=0;j<$scope.products.length;j++){

          angular.forEach($scope.products[j],function (value) {

            console.log('product',$scope.products[j]);
            data.data.product_categories[i].products[j].cnt=0;
          })

        }

      }





      $scope.restaurant_base_url=data.data.restaurant.restaurant_base_url;
      $scope.restaurant_image=$scope.restaurant.restaurant_image;
      $scope.currency_symbol=$scope.restaurant.country.currency_symbol;


      console.log('product categories',$scope.product_categories);


      console.log('restaurant',$scope.restaurant);
      $scope.min_order_amt=$scope.restaurant.min_order_amt;


      // angular.forEach($scope.product_categories,function (value) {
      //
      //   console.log(value);
      //   value.cnt=0;
      // })


    },function (err) {
      console.log(err);
    });
  }
  $scope.tab = 1;
  $scope.subtab=0;
  $scope.setTab = function(newTab){

    $scope.tab = newTab;
  };

  $scope.data = {};

//Optional
  $scope.countryCode = 'IN';

//Optional
  $scope.onAddressSelection = function (location) {

    //Do something
   // alert(location.formatted_address);
    //$cordovaProgress.showSimple(true);
    console.log('location',location.geometry.location.lat());
    console.log('location',location.geometry.location.lng());
    DeliveryLocationService.getDileveryLocationFlag(location.geometry.location.lat(),location.geometry.location.lng(),$scope.id).then(function (data) {
      console.log('data dilevery',data);
      if(data.data.status){
        $scope.deliveryStatus='In Area';
      }else {
        $scope.deliveryStatus='Out of Area';
      }

    },function (err) {
      console.log('err',err);
    })
   // $cordovaProgress.hide();
  };

  $scope.isSet = function(tabNum){

    return $scope.tab === tabNum;

  };

  $scope.setSubTab = function(index,name){

    //console.log(name);



    $scope.subtab = index;
   $scope.products=$scope.product_categories[index].products;



  };

  $scope.isSetSubTab = function(index){
    return $scope.subtab === index;
    $scope.products=$scope.product_categories[index].products;

  };

  $scope.plusCnt=function (price,object) {


    console.log(object)
    object.cnt=object.cnt+1;
    $scope.total=price*object.cnt;
    $scope.wholeTotal=$scope.total+$scope.totalStarter;
    if($scope.wholeTotal>=$scope.min_order_amt){
      $scope.cartFlag=true;
    }else {
      $scope.cartFlag=false;
    }

    // $scope.cnt=$scope.cnt+1;
    //
    // $scope.total=price*$scope.cnt;
    // $scope.wholeTotal=$scope.total+$scope.totalStarter;
    // if($scope.wholeTotal>=$scope.min_order_amt){
    //   $scope.cartFlag=true;
    // }else {
    //   $scope.cartFlag=false;
    // }
  };


  $scope.minusCnt=function (price,object) {

    //console.log(object)
    if(object.cnt>0){
      object.cnt=object.cnt-1;
      $scope.total=price*object.cnt;

    }
    $scope.wholeTotal=$scope.total+$scope.totalStarter;
    if($scope.wholeTotal>=$scope.min_order_amt){
      $scope.cartFlag=true;
    }else {
      $scope.cartFlag=false;
    }
    // if($scope.cnt>0){
    //   $scope.products.product_name.cnt=$scope.cnt;
    //   $scope.cnt=$scope.cnt-1;
    //   //$scope.total=price*$scope.cnt;
    //   $scope.total=price*$scope.products.product_name.cnt;
    //
    // }
    // $scope.wholeTotal=$scope.total+$scope.totalStarter;
    // if($scope.wholeTotal>=$scope.min_order_amt){
    //   $scope.cartFlag=true;
    // }else {
    //   $scope.cartFlag=false;
    // }


  }

  $scope.plusStarterCnt=function (price) {
    $scope.starterCnt=$scope.starterCnt+1;
    $scope.totalStarter=price*$scope.starterCnt;
    $scope.wholeTotal=$scope.totalStarter+$scope.total;
    if($scope.wholeTotal>=$scope.min_order_amt){
      $scope.cartFlag=true;
    }else {
      $scope.cartFlag=false;
    }
  }
  $scope.minusStarterCnt=function (price) {
    if($scope.starterCnt>0){
      $scope.starterCnt=$scope.starterCnt-1;
      $scope.totalStarter=price*$scope.starterCnt;
    }
    $scope.wholeTotal=$scope.totalStarter+$scope.total;
    if($scope.wholeTotal>=$scope.min_order_amt){
      $scope.cartFlag=true;
    }else {
      $scope.cartFlag=false;
    }

  }
  $scope.openDeliveryZone=function () {
    $state.go();
  };


  $ionicModal.fromTemplateUrl('templates/info-model.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then( function (modal) {
    $scope.modal = modal;
  });



  $scope.openModal = function(id) {
    $scope.productid=id;
    GetProductDetails.getProductDetails(id).then(function (data) {
      console.log('product details',data);
      $scope.baseImage_url=data.data.product_image_base_url;
      $scope.productDetails=data.data.product_details;
      $scope.product_feature=data.data.product_details.product_feature;
      console.log('product details1',$scope.productDetails);
      console.log('product_feature',$scope.product_feature);
    },function (err) {
      console.log(err);
    })
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };



  $ionicModal.fromTemplateUrl('templates/cart-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then( function (modalCart) {
    $scope.modalCart = modalCart;
  });




  $scope.showCartModal=function () {
    $scope.modalCart.show();
  }
  $scope.closeCartModal=function () {
    $scope.modalCart.hide();
  }
  $scope.goToConfirmOrder=function () {
    $scope.selectedProducts=[];
    if($scope.total>=$scope.products_one[0].price){
      $scope.selectedProducts.push({'name': $scope.products_one[0].product_name,'totalPrize':$scope.total,'cnt':$scope.cnt});
    }
    if($scope.totalStarter>=$scope.products_two[0].price){
      $scope.selectedProducts.push({'name':$scope.products_two[0].product_name,'totalPrize':$scope.totalStarter,'cnt':$scope.starterCnt});
    }
    $state.go('app.confirm-order',{selectedProducts: $scope.selectedProducts,delivery_charges:$scope.delivery_charges,wholeTotal:$scope.wholeTotal});
    $scope.modalCart.hide();
  }

  $scope.goTo=function () {
    $state.go('app.search-place');
  }
  init();
})
