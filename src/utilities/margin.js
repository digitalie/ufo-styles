import { formatUnitValue } from '../lib/format'

export const margin = (value) => {
    return {
        margin: formatUnitValue(value),
    };
};

export const marginHorizontal = (value) => {
    const formattedValue = formatUnitValue(value);

    return {
        marginLeft: formattedValue,
        marginRight: formattedValue,
    };
};

export const marginVertical = (value) => {
    const formattedValue = formatUnitValue(value);
    return {
        marginTop: formattedValue,
        marginBottom: formattedValue,
    };
};

export const marginTop = (value) => {
    return {
        marginTop: formatUnitValue(value),
    };
};

export const marginBottom = (value) => {
    return {
        marginBottom: formatUnitValue(value),
    };
};

export const marginRight = (value) => {
    return {
        marginRight: formatUnitValue(value),
    };
};

export const marginLeft = (value) => {
    return {
        marginLeft: formatUnitValue(value),
    };
};