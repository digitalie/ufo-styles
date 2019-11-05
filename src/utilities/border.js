import { formatColorValue, formatUnitValue, formatUnitArrayValue } from "../lib/format";
import { compose } from "../lib/compose";
import { stringLiteral } from "@babel/types";

const formatBorderValue = (...value) => {
    if (value.length === 1) {
        return formatUnitValue(value[0]);
    } else if (value.length === 2) {
        return `${formatUnitValue(value[0])} ${value[1]}`;
    } else {
        return `${formatUnitValue(value[0])} ${value[1]} ${formatColorValue.apply(this, value.slice(2))}`;
    }
}

export const borderStyles = {
    DOTTED: "dotted",
    DASHED: "dashed",
    SOLID: "solid",
    DOUBLE: "double",
    GROOVE: "groove",
    RIDGE: "ridge",
    INSET: "inset",
    OUTSET: "outset",
    NONE: "none",
    HIDDEN: "hidden",
};

export const borderColor = (...value) => {
    return { borderColor: formatColorValue.apply(this, value) };
};

export const borderStyle = (...value) => {
    return { borderStyle: formatUnitArrayValue(value) };
};

export const borderWidth = (...value) => {
    return { borderWidth: formatUnitArrayValue(value) };
};

export const borderRadius = (...value) => {
    return { borderRadius: formatUnitValue.apply(this, value) };
};

export const borderStyleDotted = borderStyle(borderStyles.dotted);
export const borderStyleDashed = borderStyle(borderStyles.dashed);
export const borderStyleSolid = borderStyle(borderStyles.solid);
export const borderStyleDouble = borderStyle(borderStyles.double);
export const borderStyleGroove = borderStyle(borderStyles.groove);
export const borderStyleRidge = borderStyle(borderStyles.ridge);
export const borderStyleInset = borderStyle(borderStyles.inset);
export const borderStyleOutset = borderStyle(borderStyles.outset);
export const borderStyleNone = borderStyle(borderStyles.none);
export const borderStyleHidden = borderStyle(borderStyles.hidden);


export const border = (...value) => {
    const result = {
        border: formatBorderValue.apply(this, value)
    };
    return result;
};

export const borderNone = () => {
    return border(borderStyles.none);
}

export const borderTop = (...value) => {
    return {
        borderTop: formatBorderValue.apply(this, value)
    };
};

export const borderBottom = (...value) => {
    return {
        borderBottom: formatBorderValue.apply(this, value)
    };
};

export const borderRight = (...value) => {
    return {
        borderRight: formatBorderValue.apply(this, value)
    };
};

export const borderLeft = (...value) => {
    return {
        borderLeft: formatBorderValue.apply(this, value)
    };
};

export const borderHorizontal = (...value) => {
    return compose(
        borderRight.apply(this, value),
        borderLeft.apply(this, value),
    );
};

export const borderVertical = (...value) => {
    return compose(
        borderTop.apply(this, value),
        borderBottom.apply(this, value),
    );
};
