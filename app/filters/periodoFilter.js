$app.filter('periodo', function() {
    return function(item, year, month) {
        var newDate = new Date();
        var y = String(newDate.getFullYear());
        var m = Number(newDate.getMonth() + 1);
        year = year === undefined ? y : year;
        month = month === undefined ? m : month;
        //console.log(year +" : "+month);
            result = [];
            total =0;
            for(x in item) {
                if(item[x].data.substr(0,4) == year) {
                    if(month == "all") {
                        result.push(item[x]);
                    }else{
                        if(item[x].data.substr(5,2) == month)
                        result.push(item[x]);
                    }
                }
            }
            for (x in result) {
                total += Number(result[x].valor);
            }
            result.push(total);
            return result;
    };

});
