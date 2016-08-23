currencyConvert = {
  toBr : function(value){
    return Number(value.toString().replace(".", ","));
  },
  toUs : function(value){
    return Number(value.toString().replace(",", "."));
  }
}
