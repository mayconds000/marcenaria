$app.factory('orderProductAPI', function($http){
  var _getProduct = function(idOrder, id){
    if(!id){return $http.get(svrUrl + '/products/' + idOrder);}
    else {return $http.get(svrUrl + '/product/' + id);}
  };
  var _saveProduct = function(data){
    return $http.post(svrUrl + '/product', data);
  };
  var _updateProduct = function(data){
    return $http.put(svrUrl + '/product/' + data.id, data);
  };
  var _deleteProduct = function(id){
    return $http.delete(svrUrl + '/product/' + id);
  };
  var _getTotal = function(idOrder){
    return $http.get(svrUrl + '/products/' + idOrder);
  };
  return {
    getProduct : _getProduct,
    saveProduct : _saveProduct,
    updateProduct : _updateProduct,
    deleteProduct : _deleteProduct,
    getTotal: _getTotal
  };
});
