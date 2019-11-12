import { formatUnitValue, formatColorValue } from "../lib/format";

export const textColor = (...value) => {
    return { color: formatColorValue.apply(this, value) };
};

export const textSize = value => {
    return { fontSize: formatUnitValue(value) };
};
export const textSizeLarger = textSize("larger");
export const textSizeSmaller = textSize("smaller");

export const textSizes = {
    extraExtraSmall: "xx-small",
    extraSmall: "x-small",
    small: "small",
    medium: "medium",
    large: "large",
    extraLarge: "x-large",
    extraExtraLarge: "xx-large",
    tripleExtraLarge: "xxx-large"
};

export const textLineHeight = value => {
    return { lineHeight: formatUnitValue(value) };
};

export const textAlign = value => {
    return { textAlign: value };
};
export const textAlignLeft = textAlign("left");
export const textAlignRight = textAlign("right");
export const textAlignCenter = textAlign("center");
export const textAlignJustify = textAlign("justify");
export const textAlignJustifyAll = textAlign("justify-all");
export const textAlignStart = textAlign("start");
export const textAlignEnd = textAlign("end");
export const textAlignParent = textAlign("match-parent");

export const textLetterSpacing = value => {
    return { letterSpacing: formatUnitValue(value) };
};
export const textLefferSpacingNormal = textLetterSpacing("normal");
