var svrUrl = "http://dev.ads/server/index.php";
var dateToBr = function(data) {
    return data.toString().split("-").reverse().join("/");
};

var dateToUs = function(data) {
    return data.toString().split("/").reverse().join("-");
};

var moneyToBr = function(valor) {
    valor.toString().replace(".",",");
};

var moneyToUs = function(valor) {
    valor.toString().replace(",",".");
};

$app = angular.module('app', ['ngRoute', 'ngMask']);

$app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'mainCtrl',
        templateUrl: 'app/view/home.html'
    })
    .when('/customer', {
        controller:'customerCtrl',
        templateUrl:'app/view/customer.html'
    })
    .when('/supplier', {
        controller:'supplierCtrl',
        templateUrl:'app/view/supplier.html'
    })
    .when('/buy', {
        controller:'buyCtrl',
        templateUrl: 'app/view/buy.html'
    })
    .when('/order', {
        controller:'orderCtrl',
        templateUrl:'app/view/order.html'
    })
    .otherwise({redirectTo:'/'});

}]);

$app.controller('HeaderController', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    }
})
