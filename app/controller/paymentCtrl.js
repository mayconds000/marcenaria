$app.controller("paymentCtrl",
function(orderProductAPI, paymentAPI, $scope, $routeParams, $route){
  var order = $routeParams.id;
  var isUpdate = false;
  $scope.order = order;
  $scope.pagamento = {};
  $scope.pagamento.isDefined = true;
  $scope.totalPedido = 0;
  $scope.formaPagamento = 1;

  function getTotal() {
    orderProductAPI.getTotal(order).success(function(products){
      var total = 0;
      for(x in products){
        total += products[x].qtd * products[x].value;
      }
      $scope.totalPedido = total;
      desconto();
    });
  }

  paymentAPI.getPayment(order).success(function(data){
    if(data){
      isUpdate = true;
      $scope.pagamento.isDefined = true;
      $scope.pagamento.description = data.description;
      $scope.pagamento.desconto = data.discount;
      $scope.pagamento.entrada = data.entry;
      $scope.formatPagamento = data.type;
      getTotal();
      return;
    }else{
      isUpdate = false;
      $scope.pagamento.isDefined = false;
      $scope.pagamento.desconto = 0;
      $scope.pagamento.entrada = 0;
      getTotal();
    }
  }).error(function(data){
    isUpdate = false;
    $scope.pagamento.isDefined = false;
    $scope.pagamento.desconto = 0;
    $scope.pagamento.entrada = 0;
    getTotal();
    console.error(data);
  });

  var add = function(){
    if($scope.pagamento.description === undefined)
    return;

    var d = new Date().toLocaleString().substr(0,10);
    d = dateConvert.toUs(d);
    //da pra refatorar colocando o que nao pertencer ao objeto pagamento dentro do mesmo
    var data = {
      description : $scope.pagamento.description,
      total_order: $scope.totalPedido,
      entry: $scope.pagamento.entrada,
      discount: $scope.pagamento.desconto,
      date_register: d,
      type : $scope.formaPagamento,
      order_id : order
    };

    if(!isUpdate){
      paymentAPI.savePayment(data).success(function(result){
        $scope.pagamento.isDefined = true;
        $route.reload();
      }).error(function(data){
        console.log(data.message);
      });
    } else {
      paymentAPI.updatePayment(data).success(function(data){
        $scope.pagamento.isDefined = true;
        console.log("atualizou com sucesso");
      });
    }

  };

  var remove = function(data, order){

  };

  var update = function(){
    $scope.pagamento.isDefined = false;
    $scope.isUpdate = true;
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
  $scope.add = add;
  $scope.update = update;
});
