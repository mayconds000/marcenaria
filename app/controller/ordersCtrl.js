$app.controller('ordersCtrl', function($window, $scope, $location, $http, orderAPI, customerAPI, orderProductAPI) {
  var getAll = function() {
    orderAPI.getOrder(null).success(function(data) {
      $scope.orders = data;
    });
  };

  var remove = function(id) {
    if (confirm("você tem certeza que deseja deletar o pedido com nº : " + id)) {
      orderProductAPI.getProduct(id).success(function(data) {
        if (data) {
          alert('Pedido nao pode ser deletado! \n Pois possui produtos cadastrados!');
        } else {
          orderAPI.deleteOrder(id).success(function(data) {
            alert("Pedido deletado com sucesso!");
            for (var x in $scope.orders) {
              if (id === $scope.orders[x].id)
                $scope.orders.splice(x, 1);
            }
          });
        }
      });
    };
  };

  getAll();
  $scope.addOrder = function() {
    $location.url('/order');
  };
  $scope.deleteOrder = function(ord) {
    remove(ord.id);
  };
});
