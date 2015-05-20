
$app.controller('customerCtrl', function($scope, $http, $window) {
    $scope.upCustomer = false;
    $scope.action = "Cadastrar";

    var getCustomers = function() {
       $http.get(svrUrl + '/customer').success(function(data) {
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

    $scope.delCustomer = function(data) {
        //$conf = $window.confirm();
        if($window.confirm("Você tem certeza que deseja deletar?")){
             $http.delete(svrUrl + "/customer/" + data.person_type + "/" + data.id).success(function(data) {
                 $scope.getCustomer();
             }).error(function(data) {
                 console.log(data);
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
            //Update
            $http.put(svrUrl + '/customer', data).success(function(data) {
                $scope.upCustomer = false;
                $scope.getCustomers();

                console.log(data);
            }).error(function(data){
                console.log("erro", data);

            });
        } else {
            // Novo
            $http.post(svrUrl + '/customer', data).success(function(data) {
                $scope.upCustomer = false;
                $scope.getCustomers();
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
