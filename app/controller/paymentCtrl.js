$app.controller("paymentCtrl",
function(orderProductAPI, paymentAPI, $scope, $routeParams){
  var order = $routeParams.id;
  $scope.totalPedido = 0;

  orderProductAPI.getTotal(order).success(function(products){
    var total = 0;
    for(x in products){
      total += products[x].qtd * products[x].value;
    }
    $scope.totalPedido = total;
    desconto();
  });

  $scope.pagamento = {};
  $scope.pagamento.desconto = 0;
  $scope.pagamento.entrada = 0;

  var add = function(payment, order){

  };

  var remove = function(payment, order){

  };

  var update = function(payment, order){

  };

var desconto = function(){
  var totalPedido = currencyConvert.toUs($scope.totalPedido);
    var entrada = currencyConvert.toUs($scope.pagamento.entrada);
  var desconto = currencyConvert.toUs($scope.pagamento.desconto);

  desconto = desconto == 0 ? totalPedido * 0.05 : desconto;

   var totalComDesconto = totalPedido - desconto - entrada;
   $scope.totalComDesconto = currencyConvert.toBr(totalComDesconto);
   calculoParcelasCheques(entrada, totalPedido, desconto);
   calculoParcelasBoletos(entrada, totalPedido, desconto);
   calculoParcelasCartao(entrada, totalPedido, desconto);
   $scope.totalPedido = currencyConvert.toBr(totalPedido);
   $scope.pagamento.entrada = currencyConvert.toBr(entrada);
   $scope.pagamento.desconto = currencyConvert.toBr(desconto);

  };

  var calculoParcelasBoletos = function(entrada, totalPedido, desconto){
    var juros = 0.035;
    var entrada = entrada;
    var desconto = desconto;
    var totalPedido = totalPedido;
    var boleto = [];
    if(entrada != 0 || desconto != 0){
      totalPedido = totalPedido - entrada - desconto;
    }
    for(i=0; i<10; i++){
      // if(i === 0)
      //   continue;
      var coefFinanciamento = juros/(1-(1/Math.pow(1+juros, i+1)));
      var obj = {
        parcela : (i+1) + "x",
        valorParcela :  Math.round(totalPedido * coefFinanciamento)
      }
      boleto.push(obj);
    };
  $scope.parcelasBoleto = boleto;
  };

  var calculoParcelasCartao = function(entrada, totalPedido, desconto){
    var juros = 1.5;
    var entrada = entrada;
    var desconto = desconto;
    var totalPedido = totalPedido;
    var arr = [];
    if(entrada != 0 || desconto != 0){
      totalPedido = totalPedido - entrada - desconto;
    }
    for(i=0; i<12; i++){
      if(i === 0){
        var obj = {
          parcela : i+1,
          valorParcela : Math.round(totalPedido * 1.046)
        };
      } else {
        var obj = {
          parcela : i+1,
          valorParcela :  Math.round((totalPedido * (1.046 + (i*0.015))) / (i+1))
        };
      }
      arr.push(obj);
    };
  $scope.parcelasCartao = arr;
  };

  var calculoParcelasCheques = function(entrada, totalPedido, desconto){
    var juros = 0.025;
    var entrada = entrada;
    var desconto = desconto;
    var totalPedido = totalPedido;
    var cheques = [];
    if(entrada != 0 || desconto != 0){
      totalPedido = totalPedido - entrada - desconto;
    }
    for(i=0; i<4; i++){
      if(i === 0)
        continue;
      var coefFinanciamento = juros/(1-(1/Math.pow(1+juros, i+3)));
      var obj = {
        parcela : (i+1) + "x",
        valorParcela : Math.round(totalPedido * coefFinanciamento)
      }
      cheques.push(obj);
    };
  $scope.parcelasCheques = cheques;
  };

  $scope.pedidoDesconto =  desconto;
});
