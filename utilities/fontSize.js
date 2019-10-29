import { formatUnitValue } from '../lib/format';

export const fontSize = (value) => {
    return { fontSize: formatUnitValue(value) }
};