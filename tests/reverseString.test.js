import reverseString from "../scripts/reverseString";

test("reverse the string", () => {
    expect(reverseString("I am a potato")).toEqual("otatop a ma I");
});
