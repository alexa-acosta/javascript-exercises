const sumAll = function(start, end) {
    /* isNan() doesn't work for "90" */
    if (typeof start !== 'number' ||
        typeof end !== 'number') return "ERROR";
    if (start < 0 || end < 0) return "ERROR";

    let sum = start;
    while (start !== end) {
        (start < end) ? start++ : start--;
        sum += start;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
