$app.controller('productCtrl', function($scope){
  var product = {
      add : function(idEnv, item) {
          item.environment = idEnv;
          item.value = item.value.replace(",", ".");
          $http.post(svrUrl + '/product', item).success(function(data) {
              for(x in $scope.environments) {
                  if($scope.environments[x].id === data.environment) {
                      $scope.environments[x].products.push(data);
                  }
              }
          });


      },
      remove : function(id) {
          if(confirm("Você tem certeza que deseja deletar este produto?")) {
              $http.delete(svrUrl = '/product/' + id).success(function(data) {
                  alert("produto deletado com sucesso!");
              });
          }
      },
      update : function(item) {
          $http.put(svrUrl + '/product', item).success(function(data) {
              alert("produto alterado com sucesso!");
          });
      },
      getAll : function(idEnv, i) {
          var items = [];
          $http.get(svrUrl+"/products/"+idEnv).success(function(data) {
              $scope.environments[i].products = data;
          });

      }
  };

  $scope.addProduct = function(idEnv, item) {
          product.add(idEnv, item);
      };

  $scope.editProduct = function(item) {
      product.update(item);
  }

});
