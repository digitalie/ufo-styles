import { formatUnitValue } from "../lib/format";
import { compose } from "../lib/compose";

export const minimumWidth = value => {
    return {
        minWidth: formatUnitValue(value)
    };
};

export const width = value => {
    return {
        width: formatUnitValue(value)
    };
};

export const minimumHeight = value => {
    return {
        minHeight: formatUnitValue(value)
    };
};

export const height = value => {
    return {
        height: formatUnitValue(value)
    };
};

export const size = (widthValue, heightValue) => {
    return compose(
        width(widthValue),
        height(heightValue)
    );
};

export const minimumSize = (widthValue, heightValue) => {
    return compose(
        minimumWidth(widthValue),
        minimumHeight(heightValue)
    );
};

export const size100 = size("100%", "100%");
export const size50 = size("50%", "50%");
export const size33 = size("33.333333%", "33.333333%");
export const size25 = size("25%", "25%");
export const width100 = width("100%");
export const width50 = width("50%");
export const width33 = width("33.333333%");
export const width25 = width("25%");
export const height100 = height("100%");
export const height50 = height("50%");
export const height33 = height("33.333333%");
export const height25 = height("25%");
