import { formatColorValue } from '../lib/color';

export const backgroundColor = (...value) => {
    return {
        backgroundColor: formatColorValue.apply(this, value)
    };
}