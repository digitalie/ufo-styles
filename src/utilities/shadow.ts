import {
    formatUnitValue,
    formatColorValue,
} from "../lib/format";
import { merge } from "../lib/merge";

export const shadows = shadows => {
    return { boxShadow: shadows.map(shadow => shadow.boxShadow).join(", ") };
};

export const shadow = {
    _inset: "",
    _offsetX: "0",
    _offsetY: "0",
    _blurRadius: "0",
    _spreadRadius: "0",
    _color: "black",

    inset: function() {
        return merge(
            this,
            { _inset: "inset" }
        ).formatShadowValue();
    },

    offset: function(offsetX, offsetY) {
        return merge(
            this,
            { _offsetX: offsetX, _offsetY: offsetY }
        ).formatShadowValue();
    },

    blur: function(blurRadius) {
        return merge(
            this,
            { _blurRadius: blurRadius }
        ).formatShadowValue();
    },

    spread: function(spreadRadius) {
        return merge(
            this,
            { _spreadRadius: spreadRadius }
        ).formatShadowValue();
    },

    color: function(...color) {
        return merge(
            this,
            { _color: color }
        ).formatShadowValue();
    },

    formatShadowValue: function() {
        this.boxShadow = [
            this._inset,
            formatUnitValue(this._offsetX),
            formatUnitValue(this._offsetY),
            formatUnitValue(this._blurRadius),
            formatUnitValue(this._spreadRadius),
            formatColorValue.apply(
                this,
                Array.isArray(this._color) ? this._color : [this._color]
            )
        ]
            .join(" ")
            .trim();

        return this;
    }
};
