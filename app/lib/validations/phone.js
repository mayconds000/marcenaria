var PHONE = {

          format : function(number) {
            return this.strip(number).replace(/^(\d{2})(\d{4})(\d{4}?)$/, "[$1] $2-$3");
        },

          strip : function(number) {
            return (number || "").toString().replace(/[^\d]/g, "");
        }
    };
