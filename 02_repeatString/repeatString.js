const repeatString = function(string, num) {
    /*  library function solution:
        return (num >= 0 
        ? string.repeat(num) 
        : "ERROR"); */

    if (num < 0) return "ERROR";

    let repeated = '';
    for (let n = 0; n < num; n++) {
        repeated += string;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
