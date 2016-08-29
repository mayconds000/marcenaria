currencyConvert = {
  toBr : function(value){
    var value = value.toString().replace(".", ",");
    var arr = value.split(',');
    if(arr.length == 2){
      arr[1] = arr[1].substr(0,2);
      value = arr.join(",");
      return value;
    }
    return value;
  },
  toUs : function(value){
    return Number(value.toString().replace(",", "."));
  }
}
