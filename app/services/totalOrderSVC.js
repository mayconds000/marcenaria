$app.service('totalOrderSVC', function(){
  var total = 0;
  return {
    getTotalPedido: function(){return total;},
    setTotalPedido: function(value){ total = value;}
  }
});
