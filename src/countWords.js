function countWords(string, searchWord) {
    if (typeof string !== "string" || typeof searchWord !== "string") {
        return new Error("This data is not a string!");
    }

    if (string.length === 0) {
        return new Error("String can't be empty!");
    }

    if (searchWord.length === 0) {
        return 0;
    }

    let counter = 0;
    const array = string.split(/\s+/);

    for (let word of array) {
        if (word.includes(searchWord)) {
            if (searchWord.length === 1) {
                for (let char of word) {
                    if (char === searchWord) counter++;
                }
            } else {
                counter++;
            }
        }
    }

    return counter;
}

module.exports = countWords;
