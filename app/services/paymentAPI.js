$app.factory('paymentAPI', function($http){
  var _getPayment = function(order){
    return $http.get(svrUrl + '/payment/' + order);
  };

  var _savePayment = function(data){
    return $http.post(svrUrl + '/payment', data);
  };

  var _updatePayment = function(data){
    return $http.put(svrUrl + '/payment/' + data.id, data);
  };

  var _deletePayment = function(id){
    return $http.delete(svrUrl + '/payment/' + id);
  }
  return {
    getPayment: _getPayment,
    savePayment: _savePayment,
    updatePayment: _updatePayment,
    deletePayment: _deletePayment
  };
});
