function reverse(str) {
    if (str === null || str === undefined) {
        return new Error("Error! string can't be null or undefined!");
    }
    if (typeof str !== "string") { str = str.toString(); }

    if(!str.trim()) return '';

    return str.split('').reverse().join('');
}

module.exports = reverse;