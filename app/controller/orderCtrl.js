$app.controller('orderCtrl', function($scope, $routeParams, $location, $route, orderAPI, customerAPI, orderProductAPI) {
  "use strict";
  $scope.selectionCustomer = false;
  var id = $routeParams.id;

  if (id) {
    $scope.addOrUpdate = "Alterar";
    orderAPI.getOrder(id).success(function(data) {
      $scope.pedido = data;
    });
  } else {
    $scope.addOrUpdate = "Adicionar cliente";
  }

  $scope.addCustomer = function() {
    customerAPI.getCustomer(null).success(function(data) {
      $scope.customers = data;
      $scope.selectionCustomer = true;
    });
  };

  $scope.selectCustomer = function(data) {
    $scope.selectionCustomer = false;
    data.status = 1;
    data.customer = data.id;
    if (!id) {
      orderAPI.saveOrder(data).success(function(data) {
        $location.url('/order/' + data.id);
      });
    } else {
      orderAPI.updateOrder(data).success(function() {
        $route.reload();
      });
    }
  };

  $scope.backToOrder = function(){
    $scope.selectionCustomer = false;
  };

  $scope.confirm = function(){
    data = $scope.pedido;
    data.status = 2;

    orderAPI.updateOrder(data).success(function(){
      $route.reload();
    }).error(function(err){
      console.log(err);
    });
  };

$scope.update = function() {
  $scope.pedido.status = 'Orçamento';
};


});
