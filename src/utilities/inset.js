import { formatUnitValue } from "../lib/format";

export const inset = (value, sides = ["left", "right", "top", "bottom"]) => {
    let insetObject = {};

    sides.forEach(side => {
        insetObject[side] = formatUnitValue(value);
    });

    return insetObject;
};

export const insetHorizontal = value => {
    return inset(value, ["left", "right"]);
};

export const insetVertical = value => {
    return inset(value, ["top", "bottom"]);
};

export const insetTop = value => {
    return inset(value, ["top"]);
};

export const insetBottom = value => {
    return inset(value, ["bottom"]);
};

export const insetRight = value => {
    return inset(value, ["right"]);
};

export const insetLeft = value => {
    return inset(value, ["left"]);
};
