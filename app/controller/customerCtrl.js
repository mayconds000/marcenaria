
$app.controller('customerCtrl', function($scope, $http, $window, customerAPI, orderAPI) {
    $scope.upCustomer = false;
    $scope.action = "Cadastrar";

    var getCustomers = function() {
       customerAPI.getCustomer().success(function(data) {
               for (var i in data) {
                   data[i].phone = PHONE.format(data[i].phone);
                   data[i].celphone = PHONE.format(data[i].celphone);
               }
               $scope.customers = data;
       });
  };
  getCustomers();

    $scope.newCustomer = function() {
        $scope.upCustomer = true;
        $scope.action = "Cadastrar";
        resetCustomer();
        $scope.customer.person_type = 0;
    } ;

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
        $scope.customer.person_type = "";
        $scope.customer.cpf= "";
        $scope.customer.rg = "";
        $scope.customer.cnpj = "";
        $scope.customer.ie = "";
    };

    $scope.editCustomer = function(customer) {
        $scope.upCustomer = true;
        $scope.action = "Editar";
        resetCustomer();
        $scope.customer = customer;
    };

    $scope.delCustomer = function(id) {
        if($window.confirm("Você tem certeza que deseja deletar?")){
          orderAPI.getOrderByCustomer(id).success(function(data){
            if(data){
                $window.alert('Você não pode deletar este cliente, \n pois existe pedidos cadastrados em nome do mesmo');
            } else {
              customerAPI.deleteCustomer(id).success(function(data) {
                $window.alert("Cliente deletado com sucesso");
                getCustomer();
              });
            }
          });
                      }
    };

    $scope.saveCustomer = function() {
        var data = $scope.customer;
        data.cpf = CPF.strip($scope.customer.cpf);
        data.cnpj = CNPJ.strip($scope.customer.cnpj);
        data.phone = PHONE.strip($scope.customer.phone);
        data.celphone = PHONE.strip($scope.customer.celphone);

        if(data.hasOwnProperty('id')) {
            customerAPI.updateCustomer(data).success(function(data) {
                $scope.upCustomer = false;
                getCustomers();
            });
        } else {
          customerAPI.saveCustomer(data).success(function(data) {
                $scope.upCustomer = false;
                getCustomers();
            });
        }
    };

    $scope.voltar = function() {
        $scope.upCustomer = false;
    };

    $scope.validateCpf = function(cpf) {
        $scope.cpfIsNotValid = !CPF.isValid(cpf);
    };

    $scope.validateCnpj = function(cnpj) {
        $scope.cnpjIsNotValid = !CNPJ.isValid(cnpj);
    };

});
