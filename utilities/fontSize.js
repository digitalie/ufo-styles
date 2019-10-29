import ufo from '../lib/ufo';

export const fontSize = (value) => {
    const valueWithUnits = isNaN(value) ? value : value + ufo.config.units;
    return { fontSize: valueWithUnits }
};