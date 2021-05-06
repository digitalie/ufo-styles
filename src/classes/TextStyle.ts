import { formatUnitValue, formatColorValue } from "../lib/format";
import { StyleObject } from "./StyleObject";

export class TextStyle extends StyleObject {
    styles = {
        color: undefined,
        fontSize: undefined,
        lineHeight: undefined,
        letterSpacing: undefined,
        wordSpacing: undefined,
        fontFamily: undefined,
        fontStyle: undefined,
        fontWeight: undefined,
        textDecoration: undefined,
        textTransform: undefined,
        textIndent: undefined,
        direction: undefined
    };

    fontDefaults = {
        serif: "serif",
        sansSerif: "sans-serif",
        monoSpace: "monospace",
        cursive: "cursive",
        fantasy: "fantasy",
        system: "system-ui",
        emoji: "emoji",
        math: "math",
        fangsong: "fangsong"
    };

    color(...value) {
        return this.merge({
            color: formatColorValue.apply(this, value)
        });
    }
}
