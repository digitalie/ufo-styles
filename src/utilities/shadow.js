import {
    formatUnitValue,
    formatColorValue,
    parseUnitValue,
    parseColorValue,
    formatUrlValue
} from "../lib/format";
import { compose } from "../lib/compose";

export const shadows = shadows => {
    return { boxShadow: shadows.map(shadow => shadow.boxShadow).join(", ") };
};

export const shadow = {
    _inset: "",
    offsetX: "0",
    offsetY: "0",
    blurRadius: "0",
    spreadRadius: "0",
    color: "black",

    inset: function() {
        return compose(
            this,
            { _inset: "inset" }
        ).formatShadowValue();
    },

    offset: function(offsetX, offsetY) {
        return compose(
            this,
            { offsetX, offsetY }
        ).formatShadowValue();
    },

    blur: function(blurRadius) {
        return compose(
            this,
            { blurRadius }
        ).formatShadowValue();
    },

    spread: function(spreadRadius) {
        return compose(
            this,
            { spreadRadius }
        ).formatShadowValue();
    },

    color: function(...color) {
        return compose(
            this,
            { color: color }
        ).formatShadowValue();
    },

    formatShadowValue: function() {
        this.boxShadow = [
            this._inset,
            formatUnitValue(this.offsetX),
            formatUnitValue(this.offsetY),
            formatUnitValue(this.blurRadius),
            formatUnitValue(this.spreadRadius),
            formatColorValue.apply(
                this,
                Array.isArray(this.color) ? this.color : [this.color]
            )
        ]
            .join(" ")
            .trim();

        return this;
    }
};
