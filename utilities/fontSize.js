import ufo from '../lib/ufo';

export const fontSize = (value) => {
    const valueWithUnits = isNaN(value) ? value : (ufo.config.units ? value + ufo.config.units : value);
    return { fontSize: valueWithUnits }
};