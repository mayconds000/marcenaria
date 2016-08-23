$app.filter('periodo', function() {
    return function(item, year, month) {
        var result = [];
        if (item) {
            var newDate = new Date();
            var y = String(newDate.getFullYear());
            var m = Number(newDate.getMonth() + 1);
            var year = year === undefined ? y : year;
            var month = month === undefined ? m : month;
            var total = 0;
            for (x in item) {
                if (item[x].data.substr(0, 4) == year) {
                    if (month === "all") {
                        result.push(item[x]);
                    } else {
                        if (item[x].data.substr(5, 2) === month)
                            result.push(item[x]);
                    }
                }
            }
            for (x in result) {
                total += Number(result[x].valor);
            }
            result.push(total);
            return result;
        } else {
            return result;
        }
    };
});
