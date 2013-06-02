define(function () {

    /**
     * converts number into ordinal form (st, nd, rd, th)
     */
    function ordinal(num){
        num = ~~num;
        var lastDigit = String(num).slice(-1);
        switch (lastDigit) {
            case '1':
                return num < 10 || num > 20? num +'st' : num +'th';
            case '2':
                return num < 10 || num > 20? num +'nd' : num +'th';
            case '3':
                return num < 10 || num > 20? num +'rd' : num +'th';
            default:
                return num +'th';
        }
    }

    return ordinal;

});
