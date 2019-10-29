import ufo from '../lib/ufo';

export const padding = (value, sides = []) => {
    const valueWithUnits = isNaN(value) ? value : value + ufo.config.units;
    if (sides.length === 0) {
        return { padding: valueWithUnits };
    } else {
        let paddingObject = {};
        sides.forEach((side) => {
            paddingObject[`padding-${side}`] = valueWithUnits;
        });
        return paddingObject;
    }
};

export const paddingHorizontal = (value) => {
    return padding(value, ["left", "right"]);
};

export const paddingVertical = (value) => {
    return padding(value, ["top", "bottom"]);
};

export const paddingTop = (value) => {
    return padding(value, ["top"]);
};

export const paddingBottom = (value) => {
    return padding(value, ["bottom"]);
};

export const paddingRight = (value) => {
    return padding(value, ["left"]);
};

export const paddingLeft = (value) => {
    return padding(value, ["right"]);
};