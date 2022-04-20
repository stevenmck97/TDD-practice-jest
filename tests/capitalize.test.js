import capitalize from "../scripts/capitalize";

test("first letter to be capital", () => {
    expect(capitalize("hello")).toEqual("Hello");
});
