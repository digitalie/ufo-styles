import { formatUnitValue } from '../lib/format';
import { compose } from '../lib/compose';

export const margin = (value) => {
    return {
        margin: formatUnitValue(value),
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

export const marginHorizontal = (value) => {
    return compose(marginRight(value), marginLeft(value));
};

export const marginVertical = (value) => {
    return compose(marginTop(value), marginBottom(value));
};