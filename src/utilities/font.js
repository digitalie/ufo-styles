import { formatUnitValue, formatColorValue } from "../lib/format";

export const fontColor = (...value) => {
    return { color: formatColorValue.apply(this, value) };
};

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

export const fontSize = value => {
    return { fontSize: formatUnitValue(value) };
};
export const fontSizeLarger = fontSize("larger");
export const fontSizeSmaller = fontSize("smaller");

export const fontSizes = {
    extraExtraSmall: "xx-small",
    extraSmall: "x-small",
    small: "small",
    medium: "medium",
    large: "large",
    extraLarge: "x-large",
    extraExtraLarge: "xx-large",
    tripleExtraLarge: "xxx-large"
};

export const fontlineHeight = value => {
    return { lineHeight: formatUnitValue(value) };
};

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
