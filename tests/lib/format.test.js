import { formatColorValue } from "../../src/lib/format";

describe("ufo:lib:format", () => {
    test("formatColorValue", () => {
        expect(formatColorValue("red")).toBe("red");
        expect(formatColorValue("100%", "100%", "100%")).toBe(
            "rgba(100%, 100%, 100%, 1)"
        );
        expect(formatColorValue("100%", "100%", "100%", 0.5)).toBe(
            "rgba(100%, 100%, 100%, 0.5)"
        );
        expect(formatColorValue(0, 0, 0)).toBe("rgba(0, 0, 0, 1)");
        expect(formatColorValue(0.6, 0.6, 0.6)).toBe("rgba(153, 153, 153, 1)");
    });
});
