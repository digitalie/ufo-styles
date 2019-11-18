import { formatUnitValue } from "../lib/format";
import { merge } from "../lib/merge";

export const padding = value => {
    return {
        padding: formatUnitValue(value)
    };
};

export const paddingTop = value => {
    return {
        paddingTop: formatUnitValue(value)
    };
};

export const paddingBottom = value => {
    return {
        paddingBottom: formatUnitValue(value)
    };
};

export const paddingRight = value => {
    return {
        paddingRight: formatUnitValue(value)
    };
};

export const paddingLeft = value => {
    return {
        paddingLeft: formatUnitValue(value)
    };
};

export const paddingHorizontal = value => {
    return merge(
        paddingRight(value),
        paddingLeft(value)
    );
};

export const paddingVertical = value => {
    return merge(
        paddingTop(value),
        paddingBottom(value)
    );
};
