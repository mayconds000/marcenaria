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


    $scope.rm = function(compra) {
        if(window.confirm("Você tem certeza que deseja deletar o item: "+ compra.numero)){
            $http.delete(svrUrl + "/buy", compra).success(function(data) {
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
        data = $scope.compra;
        data.data = data.data.substr(0,5);
        data.valor = data.valor.replace(",",".");
        data = {dados: "dados"};
        if(data.hasOwnProperty('id')) {
            $http.put(svrUrl + "/buy", data).success(function(data) {
                console.log("deu certo essa porra!");
            }).error(function(data) {
                console.log("nao deu certo essa merda");
            });
        } else {
            $http.post(svrUrl + "/buy", data).success(function(data) {
                console.log("cadastrou a bagassa");
            }).error(function(data) {
                console.log(data);
            });
        }
    };

});
