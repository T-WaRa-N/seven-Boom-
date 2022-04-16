const { test, expect } = require("@jest/globals");
const sevenBoom = require("./sevenBoom")

test("tests if is there a number seven in the array",() => {
    let array = [5, 7, 8, 11]
    expect(sevenBoom(array)).toBe("Boom!")
})