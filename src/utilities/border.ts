import { formatColorValue, formatUnitValue, formatUnitArrayValue } from "../lib/format";
import { merge } from "../lib/merge";

const borderStyles = {
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

export const border = {
    _cssBorderPropertyName: "border",

    color: function (...color) {
        return merge(
            this,
            { _color: color }
        ).formatBorderValue();
    },

    width: function (width) {
        return merge(
            this,
            { _width: width }
        ).formatBorderValue();
    },

    none: function () {
        return merge(
            this,
            { _style: borderStyles.NONE }
        ).formatBorderValue();
    },

    dotted: function () {
        return merge(
            this,
            { _style: borderStyles.DOTTED }
        ).formatBorderValue();
    },

    dashed: function () {
        return merge(
            this,
            { _style: borderStyles.DASHED }
        ).formatBorderValue();
    },

    solid: function () {
        return merge(
            this,
            { _style: borderStyles.SOLID }
        ).formatBorderValue();
    },
    groove: function () {
        return merge(
            this,
            { _style: borderStyles.GROOVE }
        ).formatBorderValue();
    },
    ridge: function () {
        return merge(
            this,
            { _style: borderStyles.RIDGE }
        ).formatBorderValue();
    },
    inset: function () {
        return merge(
            this,
            { _style: borderStyles.INSET }
        ).formatBorderValue();
    },
    outset: function () {
        return merge(
            this,
            { _style: borderStyles.OUTSET }
        ).formatBorderValue();
    },
    hidden: function () {
        return merge(
            this,
            { _style: borderStyles.HIDDEN }
        ).formatBorderValue();
    },

    formatBorderValue: function () {
        if (typeof this._width !== 'undefined') {
            this[this._cssBorderPropertyName + "Width"] = formatUnitValue(this._width);
        }

        if (typeof this._style !== 'undefined') {
            this[this._cssBorderPropertyName + "Style"] = this._style;
        }

        if (typeof this._color !== 'undefined') {
            this[this._cssBorderPropertyName + "Color"] = formatColorValue.apply(
                this,
                Array.isArray(this._color) ? this._color : [this._color]
            )
        }

        return this;
    }
};

export const borderLeft = merge(
    border,
    {
        _cssBorderPropertyName: "borderLeft",
    }
);

export const borderRight = merge(
    border,
    {
        _cssBorderPropertyName: "borderRight",
    }
);

export const borderTop = merge(
    border,
    {
        _cssBorderPropertyName: "borderTop",
    }
);

export const borderBottom = merge(
    border,
    {
        _cssBorderPropertyName: "borderBottom",
    }
);

