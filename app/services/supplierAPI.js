$app.factory('supplierAPI', function($http){
  var _getSupplier = function(){
    return $http.get(svrUrl + '/suppliers');
  };
  var _saveSupplier = function(data){
    return $http.post(svrUrl +  '/supplier', data);
  };
  var _updateSupplier = function(data){
    return $http.put(svrUrl + '/supplier/' + data.id, data);
  };
  var _deleteSupplier = function(id){
    return $http.delete(svrUrl + '/supplier/' + id);
  };
  return {
    getSupplier : _getSupplier,
    saveSupplier : _saveSupplier,
    updateSupplier : _updateSupplier,
    deleteSupplier : _deleteSupplier,
  };
});
