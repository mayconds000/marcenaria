$app.controller('orderCtrl', function($scope, $routeParams, orderAPI, customerAPI){
  $scope.selectionCustomer = false;
  $scope.environments = [];
  $scope.editEnvId = undefined;
  if($routeParams.id){$scope.addOrUpdate = "Alterar cliente";}
  else{$scope.addOrUpdate = "Add cliente";}


  orderAPI.getOrder($routeParams.id).success(function(data){
    $scope.pedido = data;
  });

//Colocar pra chamar somente quando eu for selecionar o cliente pq se não eu vou
// estar chamando mesmo quando eu entro em modo de edição;
  (function() {
      customerAPI.getCustomer(null).success(function(data) {
          $scope.customers = data;
      });
  }());

  $scope.addCustomer = function() {
      $scope.selectionCustomer = true;
  };

  $scope.selectCustomer = function(customer) {
          $scope.selectionCustomer = false;
          order.new(customer, 1);
  };

  $scope.addEnvironment = function(idOrder) {
      environment.add(idOrder);
  };

  $scope.delEnvironment = function(env) {
      environment.remove(env);
  };

  $scope.showInputEditEnv = function(id) {
      $scope.editEnvId = id;
      console.log("funcao executou");
  };

  $scope.changedNameEnv = function(env) {
      environment.update(env);
  };

});
