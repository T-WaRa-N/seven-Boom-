const { test, expect } = require("@jest/globals");
const sevenBoom = require("./sevenBoom")

test("tests if is there a number seven in the array",() => {
    let array = [5, 0, 8, 11]
    expect(sevenBoom(array)).toBe("None of the items contains no. 7 within them")
})