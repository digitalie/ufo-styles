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