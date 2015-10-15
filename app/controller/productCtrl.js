$app.controller('productCtrl', function($scope, $routeParams, orderProductAPI) {
  var idOrder = $routeParams.id;
  $scope.updateP = false;

  var add = function(data) {
    data.value = data.value.replace(",", ".");
    data.order = idOrder;
    orderProductAPI.saveProduct(data).success(function(data) {
      $scope.products.push(data);
      getTotal();
    });
  };
  var remove = function(id) {
    if (confirm("Você tem certeza que deseja deletar este produto?")) {
      orderProductAPI.deleteProduct(id).success(function(data) {
        alert("produto deletado com sucesso!");
        getTotal();
      });
    }
  };
  var update = function(data) {
    data.value = data.value.replace(",", ".");
    orderProductAPI.updateProduct(data).success(function(data) {
      alert("produto alterado com sucesso!");
      getTotal();
    });
  };
  var getAll = function(idOrder, id) {
    orderProductAPI.getProduct(idOrder, id).success(function(data) {
      $scope.products = data;
      getTotal();
    });

  };

  $scope.addProduct = function(item) {
    if (!idOrder) {
      alert("Você precisar selecionar um cliente antes!")
    } else {
      add(item);
      $scope.item = {};
    }
  };

var getTotal =  function(){
    data = $scope.products;
    total = 0;
    for(i in data){
      total += data[i].qtd * data[i].value;
    }
    $scope.totalPedido = total;
  };

  $scope.updateProduct = function(product) {
    update(product);
    $scope.item = {};
    $scope.updateP = false;
  };
  $scope.removeProduct = function(id, index) {
    remove(id);
    $scope.products.splice(index, 1);
  };

  getAll(idOrder, null);
});
