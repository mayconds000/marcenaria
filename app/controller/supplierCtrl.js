$app.controller('supplierCtrl', function($scope, $http, $window, supplierAPI) {
  $scope.upCustomer = false;
  $scope.action = "Cadastrar";

  var getCustomers = function(id) {
    supplierAPI.getSupplier(id).success(function(data) {
      for (var i in data) {
        data[i].phone = PHONE.format(data[i].phone);
        data[i].celphone = PHONE.format(data[i].celphone);
      }
      $scope.customers = data;
    });
  };
  //Inicializado Customers
  getCustomers();

  $scope.newCustomer = function() {
    $scope.upCustomer = true;
    $scope.action = "Cadastrar";
    resetCustomer();
  };

  var resetCustomer = function() {
    $scope.customer = {};
    $scope.customer.firstName = "";
    $scope.customer.lastName = "";
    $scope.customer.address = "";
    $scope.customer.number = "";
    $scope.customer.neighborhood = "";
    $scope.customer.cep = "";
    $scope.customer.city = "";
    $scope.customer.state = "";
    $scope.customer.phone = "";
    $scope.customer.celphone = "";
    $scope.customer.email = "";
    $scope.customer.cnpj = "";
    $scope.customer.ie = "";
  };

  $scope.editCustomer = function(customer) {
    $scope.upCustomer = true;
    $scope.action = "Editar";
    resetCustomer();
    $scope.customer = customer;
    $scope.customer.cnpj = CNPJ.format($scope.customer.cnpj);
    $scope.customer.phone = PHONE.format($scope.customer.phone);
    $scope.customer.celphone = PHONE.format($scope.customer.celphone);
  };

  $scope.delCustomer = function(data) {
    if ($window.confirm("Você tem certeza que deseja deletar?")) {
      supplierAPI.deleteSupplier(data.id).success(function(data) {
        getCustomers(null);
      }).error(function(err){
        $window.alert("você não pode deletar este fornecedor pois existe pedidos cadastrados para o mesmo! \r"
        + "Certifique-se de que não haja mais pedidos e então delete o fornecedor");
      });
    }
  };

  $scope.saveCustomer = function() {
    var data = $scope.customer;
    data.cnpj = CNPJ.strip($scope.customer.cnpj);
    data.phone = PHONE.strip($scope.customer.phone);
    data.celphone = PHONE.strip($scope.customer.celphone);
    if (data.hasOwnProperty('id')) {
      supplierAPI.updateSupplier(data).success(function(data) {
        $scope.upCustomer = false;
        getCustomers(null);
      });
    } else {
      supplierAPI.saveSupplier(data).success(function(data) {
        $scope.upCustomer = false;
        getCustomers(null);
      });
    }
  };

  $scope.voltar = function() {
    $scope.upCustomer = false;
  };

  $scope.validateCnpj = function(cnpj) {
    $scope.cnpjIsNotValid = ((cnpj == "") ? false : !CNPJ.isValid(cnpj));

  };
  $scope.formatPhone = function(customer) {
    $scope.customer = cutomer;
    $scope.customer.phone = PHONE.format(customer.phone);
    $scope.customer.celphone = PHONE.format(customer.celphone);
  };

});
