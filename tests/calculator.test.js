import { add, subtract, multiply, divide } from "../scripts/calculator";

describe("reverseString", () => {
    test("Add correctly", () => {
        expect(add(2, 3)).toEqual(5);
    });

    test("Subtract correctly", () => {
        expect(subtract(5, 2)).toEqual(3);
    });

    test("Multiply correctly", () => {
        expect(multiply(3, 6)).toEqual(18);
    });

    test("Divide correctly", () => {
        expect(divide(24, 8)).toEqual(3);
    });
});
