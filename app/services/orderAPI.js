$app.factory('orderAPI', function($http){
  var _getOrder = function(id){
    if(!id){return $http.get(svrUrl + '/orders')}
    else {return $http.get(svrUrl + '/order/' + id)}
  };
  var _saveOrder = function(){
    return $http.post(svrUrl + '/order', data);
  };
  var _updateOrder = function(data){
    return $http.put(svrUrl + '/order/' + data.id, data);
  };
  var _deleteOrder = function(id){
    return $http.delete(svrUrl + '/order/' + id);
  };

  return {
    getOrder : _getOrder,
    saveOrder : _saveOrder,
    updateOrder : _updateOrder,
    deleteOrder : _deleteOrder
  };

});
