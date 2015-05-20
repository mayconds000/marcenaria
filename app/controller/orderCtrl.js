$app.controller('orderCtrl', function($window, $scope, $http) {
    $scope.newOrder = true;
    var getCustomers = function() {
        $http.get( svrUrl + '/customer').success(function(data) {
            $scope.customers = data;
        });
    };

    getCustomers();




});
