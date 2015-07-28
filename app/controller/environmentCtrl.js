$app.controller('environmentCtrl', function($scope, $location, $routeParams, environmentAPI){
  var idOrder = $routeParams.id;
  var environment = {
      add : function(idOrder) {
          var data = {
              idOrder : idOrder,
              name : "Ambiente"
          };
          environmentAPI.saveEnvironment(data).success(function(data) {
              //adiciono o ambiente ao pedido - adiciono ao fim do array;
              if($scope.environments) {
                  $scope.environments.push(data);
              } else {
                  $scope.environments[0] = data;//passo todos os environments
              }
          });
      },
      remove : function(env) {
          if(confirm("Você tem certeza de que deseja deletar o ambiente: " + env.name)){
              environmentAPI.deleteEnvironment(env.id).success(function(data){
                  for(x in $scope.environments) {
                      if($scope.environments[x].id === data) {
                          $scope.environments.splice(x,1);
                      }
                  }
                  alert("Ambiente deletado com sucesso!");

              });
          };

      },
      update : function(env) {
          data = {
              id : env.id,
              name : env.name
          };
          environmentAPI.updateEnvironment(data).success(function(data) {
              $scope.editEnvId = undefined;
          });
      },
      getAll : function(idOrder) {
              environmentAPI.getEnvironment(idOrder).success(function(data) {
                  $scope.environments = data;
                  for (x in $scope.environments) {
                      product.getAll($scope.environments[x].id, x);
                  }
              });
          }
  };

  environment.getAll(idOrder);

});
