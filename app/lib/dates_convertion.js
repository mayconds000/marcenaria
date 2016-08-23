var dateConvert = {
  toBr : function(value){
    var data = value.toString().split("-").reverse().join("/");
    return data;
  },
  toUs : function(value){
    var data = value.toString().split("/").reverse().join("-");
    return data;
  }
}
