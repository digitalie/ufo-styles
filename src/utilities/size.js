import { formatUnitValue } from '../lib/format'
import { compose } from '../lib/compose';

export const minimumWidth = (value) => {
    return {
        minWidth: formatUnitValue(value),
    };
}

export const width = (value) => {
    return {
        width: formatUnitValue(value),
    };
};

export const minimumHeight = (value) => {
    return {
        minHeight: formatUnitValue(value),
    };
}

export const height = (value) => {
    return {
        height: formatUnitValue(value),
    };
};

export const size = (widthValue, heightValue) => {
    return compose(width(widthValue), height(heightValue));
};

export const minimumSize = (widthValue, heightValue) => {
    return compose(minimumWidth(widthValue), minimumHeight(heightValue));
};