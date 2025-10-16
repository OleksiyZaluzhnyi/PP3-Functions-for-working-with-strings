const reverse = require("../src/reverse");

test("Entering Symbol should return correct reversed text", () => {
    expect(reverse(Symbol("test"))).toBe(")tset(lobmyS");
});

test("Entering numbers should return correct reversed numbers as text", () => {
    expect(reverse(1234)).toBe("4321");
    expect(reverse(1234321n)).toBe("1234321");
});

test("Entering string should return correct reversed string", () => {
    expect(reverse("Hello")).toBe("olleH");
    expect(reverse("Juice")).toBe("eciuJ");
});

test("Entering boolean should return correct reversed boolean as text", () => {
    expect(reverse(true)).toBe("eurt");
    expect(reverse(false)).toBe("eslaf");
});

test("Entering null or undefined should return Error", () => {
    expect(reverse(null)).toBeInstanceOf(Error);
    expect(reverse(null).message).toBe("Error! string can't be null or undefined!");
    expect(reverse(undefined)).toBeInstanceOf(Error);
    expect(reverse(undefined).message).toBe("Error! string can't be null or undefined!");
});

test("Entering empty string should return empty string", () => {
    expect(reverse("")).toBe("");
    expect(reverse("    ")).toBe("");
});