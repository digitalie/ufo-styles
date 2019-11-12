import { formatUnitValue, formatColorValue } from "../lib/format";

export const fontWeight = value => {
    return { fontWeight: formatUnitValue(value) };
};
export const fontWeightBold = fontWeight("bold");
export const fontWeightBolder = fontWeight("bolder");
export const fontWeightLighter = fontWeight("lighter");
export const fontWeightNormal = fontWeight("normal");

export const fontStyle = value => {
    return { fontStyle: value };
};
export const fontStyleNormal = fontStyle("normal");
export const fontStyleItalic = fontStyle("italic");
export const fontStyleOblique = fontStyle("oblique");

export const fontFamilyGenerics = {
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

export const fontFamily = (...names) => {
    return {
        fontFamily: names
            .map(name => {
                for (var key in fontFamilyGenerics) {
                    if (fontFamilyGenerics.hasOwnProperty(key) && fontFamilyGenerics[key === name]) {
                        return name;
                    }
                }
                return `"${name}"`;
            })
            .join(", ")
    };
};
