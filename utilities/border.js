import { formatColorValue } from '../lib/color';

export const borderColor = (...value) => {
    return { borderColor: formatColorValue.apply(this, value) };
}