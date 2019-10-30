import { formatUnitValue, formatUnitArrayValue } from '../lib/format'

export const padding = (...value) => {
    return {
        padding: formatUnitArrayValue(value)
    };
};

export const paddingHorizontal = (value) => {
    const formattedValue = formatUnitValue(value);

    return {
        paddingLeft: formattedValue,
        paddingRight: formattedValue,
    };
};

export const paddingVertical = (value) => {
    const formattedValue = formatUnitValue(value);
    return {
        paddingTop: formattedValue,
        paddingBottom: formattedValue,
    };
};

export const paddingTop = (value) => {
    return {
        paddingTop: formatUnitValue(value),
    };
};

export const paddingBottom = (value) => {
    return {
        paddingBottom: formatUnitValue(value),
    };
};

export const paddingRight = (value) => {
    return {
        paddingRight: formatUnitValue(value),
    };
};

export const paddingLeft = (value) => {
    return {
        paddingLeft: formatUnitValue(value),
    };
};