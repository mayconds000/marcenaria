$app.filter('periodo', function() {
    return function(item, year, month) {
        year = year === undefined ? "2015" : year;
        month = month === undefined ? "all" : month;
            result = [];
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

            return result;
    };

});
