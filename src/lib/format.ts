import ufo from "./ufo";

const formatRgbValue = value => {
    if (!isNaN(value) && value < 1) {
        return value * 255;
    }

    return value;
};

export const formatColorValue = (...values) => {
    if (values.length === 1) {
        return values[0];
    }

    if (values.length === 3 || values.length === 4) {
        return `rgba(${formatRgbValue(values[0])}, ${formatRgbValue(
            values[1]
        )}, ${formatRgbValue(values[2])}, ${
            values.length === 4 ? values[3] : 1
        })`;
    }

    console.error(
        "incorrect number of parameters passed to formatColorValue",
        values
    );
};

export const parseColorValue = (value) => {
    var matchColors = /rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
    var match = matchColors.exec(value);
    if (match !== null) {
        return match;
    }

    return value;
};

export const formatUrlValue = (...values) => {
    return values.map(value => `url('${value}')`).join(", ");
};

export const formatUnitArrayValue = (values = []) => {
    return values.map(formatUnitValue).join(" ");
};

export const formatUnitValue = value => {
    if (!isNaN(value) && value !== "" && ufo.config.units) {
        return `${value}${ufo.config.units}`;
    }

    return value;
};

export const parseUnitValue = value => {
    if (isNaN(value) && value && ufo.config.units) {
        return value.replace(ufo.config.units, '');
    }

    return value;
};
