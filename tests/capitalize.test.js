const capitalize = require("../src/capitalize");

test("Entering valid string should return correct string", () => {
    expect(capitalize("hello, World!")).toBe("Hello, world!");
    expect(capitalize("heLLo, world!")).toBe("Hello, world!");
    expect(capitalize(true)).toBe("True");
    expect(capitalize(false)).toBe("False");
});

test("Entering null or undefined should return Error", () => {
    expect(capitalize(null)).toBeInstanceOf(Error);
    expect(capitalize(null).message).toBe("Error! string can't be null or undefined!");
    expect(capitalize(undefined)).toBeInstanceOf(Error);
    expect(capitalize(undefined).message).toBe("Error! string can't be null or undefined!");
});

test("Entering numbers should return Error", () => {
    const msg = "Error! String can't be a number or any other data types, except boolean!";
    expect(capitalize(213)).toBeInstanceOf(Error);
    expect(capitalize(213).message).toBe(msg);
    expect(capitalize(12332n)).toBeInstanceOf(Error);
    expect(capitalize(12332n).message).toBe(msg);
    expect(capitalize(3.14)).toBeInstanceOf(Error);
    expect(capitalize(3.14).message).toBe(msg);
});

test("Entering Symbol should return Error", () => {
    const msg = "Error! String can't be a number or any other data types, except boolean!";
    expect(capitalize(Symbol("test"))).toBeInstanceOf(Error);
    expect(capitalize(Symbol("test")).message).toBe(msg);
});

test("Entering empty string should return empty string", () => {
    expect(capitalize("")).toBe("");
    expect(capitalize("    ")).toBe("");
});
