$app.controller('buyCtrl', function($scope, $http, $window, $filter) {

    (function() {
        $http.get(svrUrl + '/supplier').success(function(data) {
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
    $scope.searchIsTrue = true;
    $scope.newBuy = false;
    $scope.cadSuccess = false;
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

    $scope.add = function() {
      $scope.newBuy = true;
      $scope.compra = {};

    };


    $scope.rm = function() {
        if(window.confirm("Você tem certeza que deseja deletar o item: "+ compra.id)){
            $http.delete(svrUrl + "/buy", data).success(function(data) {
                console.log("compra deletado com sucesso")
            });
        }
    };

    $scope.edit = function(compra) {
        $scope.newBuy = true;
        $scope.compra = {};
        $scope.compra = compra;
        $scope.compra.fornecedor = compra.fornecedor_id;
        $scope.compra.data = new Date(compra.data);
        $scope.compra.valor = $filter('currency')($scope.compra.valor);
    };

    $scope.back = function() {
        $scope.newBuy = false;
    };

    $scope.save = function() {
        var data = (JSON.parse(JSON.stringify($scope.compra)));
        data.data = data.data.substr(0,10);
        data.valor = data.valor.toString().replace(",",".");
        if(data.hasOwnProperty('id')){
            //editar
            console.log("editar");
            $http.put(svrUrl + "/buy", data).success(function() {
                console.log("atualizado - " + data);
                $scope.cadSuccess = true;

                setTimeout(function() {
                    $scope.newBuy = false;
                    $scope.cadSuccess = false;
                    getOrders();
                }, 10000);
            });
        } else {
            //criar
            console.log("criar nova compra");
            $http.post(svrUrl + "/buy", data).success(function(data) {

                $scope.cadSuccess = true;

                setTimeout(function() {
                    $scope.newBuy = false;
                    $scope.cadSuccess = false;
                    getOrders();
                }, 3500);
            });
        }
    };


});

$app.filter('tempo', function() {
    return function(item, year, month) {
        year = year === undefined ? "2015" : year;
        month = month === undefined ? "all" : month;
        if(item != undefined) {
            result = [];
            for(x in item) {
                if(item[x].data.substr(0,4) == year) {
                    if(month == "all") {
                        result.push(item[x]);
                    }else{
                        if(item[x].data.substr(5,2) == month)
                        result.push(item[x]);
                    }
                }
            }

            return result;
        }
    };

});
