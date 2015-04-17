
$app.controller('supplierCtrl', function($scope, $http, $window) {
    $scope.upCustomer = false;
    $scope.action = "Cadastrar";

    $scope.getCustomers = function() {
        $http.get(svrUrl + '/supplier').success(function(data) {
            $scope.customers = data;
        });
    };
    //getCustomers();

    $scope.newCustomer = function() {
        $scope.upCustomer = true;
        $scope.action = "Cadastrar";
        resetCustomer();
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
        //$conf = $window.confirm();
        if($window.confirm("Você tem certeza que deseja deletar?")){
             $http.delete(svrUrl + "/supplier/" + data.id).success(function(data) {
                 $scope.getCustomer();
             }).error(function(data) {
                 console.log(data);
             });
         }
    };

    $scope.saveCustomer = function() {
        var data = $scope.customer;
        data.cnpj = CNPJ.strip($scope.customer.cnpj);
        data.phone = PHONE.strip($scope.customer.phone);
        data.celphone = PHONE.strip($scope.customer.celphone);
        console.log(data.phone);

        if(data.hasOwnProperty('id')) {
            //Update
            $http.put(svrUrl + '/supplier', data).success(function(data) {
                $scope.upCustomer = false;
                $scope.getCustomers();

                console.log(data);
            }).error(function(data){
                console.log("erro", data);

            });
        } else {
            // Novo
            $http.post(svrUrl + '/supplier', data).success(function(data) {
                $scope.upCustomer = false;
                $scope.getCustomers();
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
