$app.controller('orderCtrl', function($window, $scope, $http) {
    $scope.newOrder = false;
    $scope.selectionCustomer = false;
    var getCustomers = function() {
        $http.get( svrUrl + '/customer').success(function(data) {
            $scope.customers = data;
        });
    };

    getCustomers();

    $scope.addCustomer = function() {
        $scope.selectionCustomer = true;
    };


    var order = {
        new : function(customer, status) {
            var data = {};
            data.customer = customer;
            data.status = status;

            $http.post(svrUrl + '/order', data).success(function(data) {
                $scope.pedido = data;
                environment.add(data.id);
            });
        },
        getAll : function() {
            $http.get(svrUrl+ '/orders').success(function(data){
                $scope.orders = data;
            });
        },
        update : function(order) {
            $http.get(svrUrl + '/order/' + order.id).success(function(data) {
                $scope.pedido = data;
                environment.getAll(order.id);
            });

        },
        remove : function(number){
            if(confirm("você tem certeza que deseja deletar o pedido com nº : " + number)) {
                //primeiro verificar se tem algum ambiente no pedido se nao tiver
                //nenhum então deletar se tiver algum avisar que para deletar e
                //preciso que nao tenha nenhum ambiente cadastrado
                $http.get(svrUrl + '/environments/' + number).success(function(data){
                    if(data) {
                        alert("pedido nao pode ser deletado! \n
                        pois possui ambientes cadastrados!");
                    }else{
                        $http.delete(svrUrl + '/order/' + number).success(function(data) {
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

    $scope.selectCustomer = function(customer) {
            $scope.selectionCustomer = false;
            order.new(customer, 1);
    };

    $scope.addOrder = function() {
        $scope.newOrder = true;
    };

    $scope.editOrder = function(ordem) {
        $scope.newOrder = true;
        order.update(ordem);
    };

    $scope.deleteOrder = function(ord) {
        order.remove(ord.id);
    };

    $scope.addEnvironment = function() {
        environment.add(idOrder);
    };

    $scope.delEnvironment = function(env) {
        environment.remove(env);
    };

    var environment = {
        add : function(idOrder) {
            var data = {};
            data.idOrder = idOrder;
            data.name = "Ambiente";
            $http.post(svrUrl + '/environment', data).success(function(data) {
                //adiciono o ambiente ao pedido - adiciono ao fim do array;
                this.getAll(data.order_id);
            });
        },
        remove : function(env) {
            if(confirm("Você tem certeza de que deseja deletar o ambiente: " + env.name)){
                $http.delete(svrUrl + '/environment').success(function(data){

                });
            };

        },
        update : function() {

        },
        getAll : function(idOrder) {
            $http.get(svrUrl + '/environments/', idOrder).success(function(data) {
                $scope.environments = data;
            });
        }
    };

    $scope.product = {
        add : function() {

        },
        remove : function() {

        },
        update : function() {

        }
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
