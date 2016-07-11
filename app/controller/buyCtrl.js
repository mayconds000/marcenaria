$app.controller('buyCtrl', function($scope, $http, $window, $filter, supplierAPI) {
    $scope.newBuy = false;
    $scope.panelMsg = false;
    $scope.msg = "";
    $scope.years = ["2015", "2016", "2017"];
    $scope.months = [
        {mes: "Todos", number: "all"},
        {mes: "Janeiro", number: "01"},
        {mes: "Fevereiro", number: "02"},
        {mes: "Março", number: "03"},
        {mes: "Abril", number: "04"},
        {mes: "Maio", number: "05"},
        {mes: "Junho", number: "06"},
        {mes: "Julho", number: "07"},
        {mes: "Agosto", number: "08"},
        {mes: "Setembro", number: "09"},
        {mes: "Outubro", number: "10"},
        {mes: "Novembro", number: "11"},
        {mes: "Dezembro", number: "12"}];

    (function() {
      supplierAPI.getSupplier().success(function(data) {
            $scope.suppliers = data;
        });
    })();

    var getOrders = function() {
        $http.get(svrUrl + '/buy').success(function(data) {
             $scope.orders = data;
        }).error(function(data) {
            console.log(data);
        });

    };

    getOrders();

    $scope.add = function() {
      $scope.newBuy = true;
      $scope.compra = {};

    };


    $scope.rm = function(compra) {
        if(window.confirm("Você tem certeza que deseja deletar o item: "+ compra.numero)){
            $http.delete(svrUrl + "/buy/"+ compra.id).success(function(data) {
                $scope.orders = $scope.orders.filter(function(obj){
                  if(compra.id != obj.id)
                  return true;

                  return false;
                });
                console.log("compra deletado com sucesso");

            });
        }
    };

    $scope.edit = function(compra) {
        $scope.newBuy = true;
        $scope.compra = {};
        $scope.compra = compra;
        $scope.compra.fornecedor = compra.fornecedor_id;
        $scope.compra.data = new Date(compra.data);
        $scope.compra.valor = $scope.compra.valor.replace(".",",");
    };

    $scope.back = function() {
        $scope.newBuy = false;
    };

    $scope.saveBuy = function() {
        data = JSON.parse(JSON.stringify($scope.compra));
        data.data = data.data.substr(0,10);
        data.valor = data.valor.replace(",",".");
        console.log(data);
        if(data.hasOwnProperty('id')) {
            $http.put(svrUrl + "/buy", data).success(function(data) {
                $scope.msg = "compra Atualizada com sucesso!"
                $scope.panelMsg = true;
                setTimeout(function() {
                    getOrders();
                    $scope.newBuy = false;
                    $scope.panelMsg = false;
                }, 3000);
            }).error(function(data) {
                console.log(data);
            });
        } else {
            $http.post(svrUrl + "/buy", data).success(function(data) {
                $scope.msg = "compra cadastrada com sucesso!"
                $scope.panelMsg = true;
                setTimeout(function() {
                    getOrders();
                    $scope.newBuy = false;
                    $scope.panelMsg = false;
                }, 3000);
            }).error(function(data) {
                console.log(data);
            });
        }
    };
    var soma = function() {
            console.log("funcionando filtro");
    };


});
