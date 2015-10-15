$app.controller('environmentCtrl', function($scope, $location, $routeParams, environmentAPI, orderProductAPI){
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
          var data = {
              id : env.id
            , name : env.name
          };
          console.log(data);

          environmentAPI.updateEnvironment(data).success(function(data) {
              $scope.editEnvId = undefined;
          });
      },
      getAll : function(idOrder, id) {
              environmentAPI.getEnvironment(idOrder, id).success(function(data) {
                  $scope.environments = data;
                  //Passando pra ser manipulado pelo controller productCtrl
                  // for (x in $scope.environments) {
                  //     product.getAll($scope.environments[x].id, x);
                  // }
              });
          }
  };

  environment.getAll(idOrder);

  $scope.addEnvironment = function(idOrder) {
      environment.add(idOrder);
  };

  $scope.delEnvironment = function(env) {
      environment.remove(env);
  };

  $scope.showInputEditEnv = function(id) {
      $scope.editEnvId = id;
  };

  $scope.changedNameEnv = function(env) {
      environment.update(env);
  };

});
