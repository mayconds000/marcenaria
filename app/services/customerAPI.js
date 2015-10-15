$app.factory('customerAPI', function($http){
  var _getCustomer = function(id){
    if(!id){return $http.get(svrUrl + '/customers');}
    else {return http.get(svrUrl + '/customer/' + id);};
  };
  var _saveCustomer = function(data){
    return $http.post(svrUrl + '/customer', data);
  };
  var _updateCustomer = function(data){
    return $http.put(svrUrl + '/customer/' + data.id, data);
  };
  var _deleteCustomer = function(data){
    return $http.delete(svrUrl + '/customer/' + data.person_type + "/" + id);
  };

  return {
    getCustomer : _getCustomer,
    saveCustomer : _saveCustomer,
    updateCustomer : _updateCustomer,
    deleteCustomer : _deleteCustomer
  };
});
