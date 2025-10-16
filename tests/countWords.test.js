const countWordsTest = require("../src/countWords");

test("Entering non-string as first argument should return Error", () => {
    const invalidValues = [123, 123n, true, false, null, undefined, Symbol("Test"), {}, [], () => {}];
    for (const val of invalidValues) {
        const result = countWordsTest(val, "Word");
        expect(result).toBeInstanceOf(Error);
        expect(result.message).toBe("This data is not a string!");
    }
});

test("Entering non-string as second argument should return Error", () => {
    const invalidValues = [123, 123n, true, false, null, undefined, Symbol("Test"), {}, [], () => {}];
    for (const val of invalidValues) {
        const result = countWordsTest("Let's write this sentence for the test", val);
        expect(result).toBeInstanceOf(Error);
        expect(result.message).toBe("This data is not a string!");
    }
});


test("Empty string should return Error", () => {
    const result = countWordsTest("", "word");
    expect(result).toBeInstanceOf(Error);
    expect(result.message).toBe("String can't be empty!");
});

test("Empty search word should return 0", () => {
    const result = countWordsTest("This is a test", "");
    expect(result).toBe(0);
});


test("Should count exact words correctly", () => {
    const result = countWordsTest("apple banana apple orange apple", "apple");
    expect(result).toBe(3);
});

test("Should count single character occurrences correctly", () => {
    const result = countWordsTest("a b c a d a", "a");
    expect(result).toBe(3);
});

test("Should count characters inside longer words if includes", () => {
    const result = countWordsTest("cat catalog scatter caterpillar", "cat");
    // "cat" (1), "catalog" (1), "scatter" (1), "caterpillar" (1)
    expect(result).toBe(4);
});

test("Should be case-sensitive", () => {
    const result = countWordsTest("Hello hello HeLLo", "Hello");
    expect(result).toBe(1);
});

test("Should return 0 if no matches found", () => {
    const result = countWordsTest("This sentence has no target word", "banana");
    expect(result).toBe(0);
});


test("Should handle multiple spaces correctly", () => {
    const result = countWordsTest("apple   banana   apple", "apple");
    expect(result).toBe(2);
});

test("Should work with long text", () => {
    const text = "test ".repeat(1000).trim();
    const result = countWordsTest(text, "test");
    expect(result).toBe(1000);
});
