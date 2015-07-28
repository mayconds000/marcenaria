$app.factory('environmentAPI', function($http){
  var _getEnvironment = function(id){
    if(!id){return $http.get(svrUrl + '/environments/'+ id)}
    else {return $http.get(svrUrl + '/environment/' + id)}
  };
  var _saveEnvironment = function(data){
    return $http.post(svrUrl + '/environment', data);
  };
  var _updateEnvironment = function(data){
    return $http.put(svrUrl +'/environment/' + data.id, data);
  };
  var _deleteEnvironment = function(id){
    return $http.delete(svrUrl +'/environment/'+ id);
  };

  return {
    getEnvironment : _getEnvironment,
    saveEnvironment : _saveEnvironment,
    updateEnvironment : _updateEnvironment,
    deleteEnvironment : _deleteEnvironment
  }
});
