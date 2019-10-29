const formatRgbValue = (value) => {
    if (!isNaN(value) && value < 1) {
        return value * 255;
    }

    return value
}

export const formatColorValue = (...parameters) => {
    if (parameters.length === 1) {
        return parameters[0];
    }

    if (parameters.length === 3 || parameters.length === 4) {
        return `rgba(${formatRgbValue(parameters[0])}, ${formatRgbValue(parameters[1])}, ${formatRgbValue(parameters[2])}, ${parameters.length === 4 ? parameters[3] : 1})`;
    }

    console.error("incorrect number of parameters passed to backgroundColor", parameters);
}