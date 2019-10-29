import { formatColorValue } from '../lib/format';

export const backgroundColor = (...value) => {
    return {
        backgroundColor: formatColorValue.apply(this, value)
    };
}