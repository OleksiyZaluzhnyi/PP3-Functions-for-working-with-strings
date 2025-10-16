function capitalize(str) {
    if (str === null || str === undefined) {
        return new Error("Error! string can't be null or undefined!");
    }

    if (typeof str !== "string" && typeof str !== "boolean") {
        return new Error("Error! String can't be a number or any other data types, except boolean!");
    }

    if (typeof str === "boolean") {
        str = str.toString();
    }

    if (!str.trim()) return '';

    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

module.exports = capitalize;
