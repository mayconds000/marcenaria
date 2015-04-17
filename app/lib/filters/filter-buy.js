$app.filter("buy_periodo", function() {
    return function(array, date1, date2) {
        date1 = new Date(date1);
        date2 = new Date(date2);
        result = [];
        for(var i=0; i < array.length; i++) {
            array[i].data = new Date(array[i].data);
            if(array[i].data >= date1 && array[i].data <= date2){
                result.push(array[i]);
            }
        }
        if(result == undefined || result == 0){
            return "not found orders";
        }else{
            return result;
        }
    }
});
