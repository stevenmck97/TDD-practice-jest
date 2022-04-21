import caesarCipher from "../scripts/caesarCipher";

describe("caesarCipher tests", () => {
    test("lol", () => {
        expect(caesarCipher("hello", 1)).toBe("ifmmp");
    });
});
