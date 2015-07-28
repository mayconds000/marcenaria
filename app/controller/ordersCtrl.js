$app.controller('ordersCtrl', function($window, $scope, $location, $http, orderAPI, customerAPI) {

    var order = {
        new : function(customer, status) {
            var data = {};
            data.customer = customer;
            data.status = status;

          orderAPI.saveOrder().success(function(data) {
                $scope.pedido = data;
                environment.add(data.id);
            });
        },
        getAll : function() {
            orderAPI.getOrder(null).success(function(data){
                $scope.orders = data;
            });
        },
        update : function(order) {
            orderAPI.updateOrder(order).success(function(data) {
                $scope.pedido = data;
                environment.getAll(data.id);
            });

        },
        remove : function(number){
            if(confirm("você tem certeza que deseja deletar o pedido com nº : " + number)) {
                //primeiro verificar se tem algum ambiente no pedido se nao tiver
                //nenhum então deletar se tiver algum avisar que para deletar e
                //preciso que nao tenha nenhum ambiente cadastrado
                $http.get(svrUrl + '/environments/' + number).success(function(data){
                    if(data) {
                        alert("pedido nao pode ser deletado! <br /> pois possui ambientes cadastrados!");
                    }else{
                        orderAPI.deleteOrder(number).success(function(data) {
                            alert("pedido deletado com sucesso!");
                            for(var x in $scope.orders){
                                if(number === $scope.orders[x].id){
                                    $scope.orders.splice(x,1);
                                }
                            }

                        });
                    }
                });


            };
        } //remove
    }; // end order

    order.getAll();

    $scope.addOrder = function(){
      $location.url('/order');
    }

    $scope.deleteOrder = function(ord) {
        order.remove(ord.id);
    };



    var pagamento = {
            add : function() {

            },
            remove : function() {

            },
            read: function() {

            },
            update: function() {

            }
    };
});
