import {
    formatUnitValue,
    formatColorValue,
    parseUnitValue,
    parseColorValue,
} from "../lib/format";
import { compose } from "../lib/compose";

const shadowDefaults = {
    inset: "",
    offsetX: "0",
    offsetY: "0",
    blurRadius: "0",
    spreadRadius: "0",
    color: "black"
};

const formatShadowValue = shadowObject => {
    return [
        shadowObject.inset,
        formatUnitValue(shadowObject.offsetX),
        formatUnitValue(shadowObject.offsetY),
        formatUnitValue(shadowObject.blurRadius),
        formatUnitValue(shadowObject.spreadRadius),
        formatColorValue.apply(this, Array.isArray(shadowObject.color) ? shadowObject.color : [shadowObject.color ])
    ]
        .join(" ")
        .trim();
};

const boxShadow = value => ({ boxShadow: formatShadowValue(value) });

export const shadows = (...shadows) => {
    return { boxShadow: shadows.map(shadow => shadow.boxShadow).join(", ") };
};

const parseShadowValue = value => {
    console.log("parseShadowValue", value);
    const values = value.trim().split(" ");

    if (!value.trim().toLowerCase().startsWith("inset")) {
        values.unshift(shadowDefaults.inset);
    }

    return {
        inset: values[0],
        offsetX: parseUnitValue(values[1]),
        offsetY: parseUnitValue(values[2]),
        blurRadius: parseUnitValue(values[3]),
        spreadRadius: parseUnitValue(values[4]),
        color: parseColorValue(values.slice(5).join(" ")),
    };
};

export const shadow = (...boxShadowObjects) => {
    var bs = boxShadow(
        boxShadowObjects
            .map(boxShadowObject => parseShadowValue(boxShadowObject.boxShadow))
            .reduce((composedShadow, shadow) => {
                return {
                    inset: shadow.inset !== shadowDefaults.inset && shadow.inset !== composedShadow.inset ? shadow.inset : composedShadow.inset,
                    offsetX: shadow.offsetX !== shadowDefaults.offsetX && shadow.offsetX !== composedShadow.offsetX ? shadow.offsetX : composedShadow.offsetX,
                    offsetY: shadow.offsetY !== shadowDefaults.offsetY && shadow.offsetY !== composedShadow.offsetY ? shadow.offsetY : composedShadow.offsetY,
                    blurRadius: shadow.blurRadius !== shadowDefaults.blurRadius && shadow.blurRadius !== composedShadow.blurRadius ? shadow.blurRadius : composedShadow.blurRadius,
                    spreadRadius: shadow.spreadRadius !== shadowDefaults.spreadRadius && shadow.spreadRadius !== composedShadow.spreadRadius ? shadow.spreadRadius : composedShadow.spreadRadius,
                    color: shadow.color !== shadowDefaults.color && shadow.color !== composedShadow.color ? shadow.color : composedShadow.color,
                };
            }, shadowDefaults)
    );

    console.log("bs", bs);
    return bs;
};

export const shadowInset = boxShadow(
    compose(
        shadowDefaults,
        { inset: "inset" }
    )
);

export const shadowOffset = (offsetX, offsetY) => {
    return boxShadow(
        compose(
            shadowDefaults,
            { offsetX, offsetY }
        )
    );
};

export const shadowBlur = blurRadius => {
    return boxShadow(
        compose(
            shadowDefaults,
            { blurRadius }
        )
    );
};

export const shadowSpread = spreadRadius => {
    return boxShadow(
        compose(
            shadowDefaults,
            { spreadRadius }
        )
    );
};

export const shadowColor = (...color) => {
    return boxShadow(
        compose(
            shadowDefaults,
            { color: color }
        )
    );
};
