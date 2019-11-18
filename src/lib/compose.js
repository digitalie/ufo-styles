export const compose = (...objects) => {
    return objects.reduce((target, source) => {
        for (var property in source) {
            if (
				source.hasOwnProperty(property) &&
				!property.startsWith("_") &&
                typeof source[property] !== "function"                
            ) {
                target[property] = source[property];
            }
        }

        return target;
    }, {});
};
