$app.controller('ordersCtrl', function($window, $scope, $location, $http, orderAPI, customerAPI, orderProductAPI) {
  var months = [
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
    {mes: "Dezembro", number: "12"}
  ];

  var returnCurrentMonth = function(months){
    for(i in months){
      if((new Date().getMonth() + 1) == months[i].number){
        return months[i].number;
      }
    }
    return months[0].number;
  };

  $scope.years = ["2015", "2016", "2017"];
  $scope.months = {
    availableMonths : months,
    selectedOption : returnCurrentMonth(months)
  };


  var getAll = function() {
    orderAPI.getOrder(null).success(function(data) {
      $scope.orders = data;
    });
  };

  var remove = function(id) {
    if (confirm("você tem certeza que deseja deletar o pedido com nº : " + id)) {
      orderProductAPI.getProduct(id).success(function(data) {
        if (data) {
          alert('Pedido nao pode ser deletado! \n Pois possui produtos cadastrados!');
        } else {
          orderAPI.deleteOrder(id).success(function(data) {
            alert("Pedido deletado com sucesso!");
            for (var x in $scope.orders) {
              if (id === $scope.orders[x].id)
                $scope.orders.splice(x, 1);
            }
          });
        }
      });
    };
  };

  getAll();
  $scope.addOrder = function() {
    $location.url('/order');
  };
  $scope.deleteOrder = function(ord) {
    remove(ord.id);
  };
})
.filter('byPeriodo', function(){
  return function(arr, year, month){
    year = (year === undefined || year === null) ? String(new Date().getFullYear()) : year;
    month = (month === undefined || month === null) ? Number(new Date().getMonth() + 1) : month;

    if(!arr) return arr = [];

    var arr = arr.filter(function(item) {
        if(year == item.date_register.substr(0,4)){
          if(month == item.date_register.substr(5,2)) return true;
          else if(month === "all"){
            return true;
          }else{
            return false;
          }
        }
      });
      return arr;
    };
});
