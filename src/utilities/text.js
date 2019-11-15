import { formatUnitValue, formatColorValue } from "../lib/format";
import { compose } from "../lib/compose";

export const text = {

    color: function(...value) {
        return compose(
            this,
            {
                color: formatColorValue.apply(this, value)
            }
        );
    },

    height: function(value) {
        return compose(
            this,
            {
                fontSize: formatUnitValue(value)
            }
        );
    },

    boxHeight: function(value) {
        return compose(
            this,
            {
                lineHeight: formatUnitValue(value)
            }
        );
    },

    letterSpace: function(value) {
        return compose(
            this,
            {
                letterSpacing: formatUnitValue(value)
            }
        );
    },

    wordSpace: function(value) {
        return compose(
            this,
            {
                wordSpacing: formatUnitValue(value)
            }
        );
    },

    normalLetterSpace: function() {
        return this.letterSpace("normal");
    },

    normalWordSpace: function() {
        return this.wordSpace("normal");
    },

    font: function(...names) {
        const fontFamily = names
            .map(name => {
                for (var key in this.fontDefaults) {
                    if (
                        this.fontDefaults.hasOwnProperty(key) &&
                        this.fontDefaults[key] === name
                    ) {
                        return name;
                    }
                }
                return `"${name}"`;
            })
            .join(", ");
        return compose(
            this,
            { fontFamily }
        );
    },

    italic: function() {
        return compose(
            this,
            { fontStyle: "italic" }
        );
    },

    bold: function() {
        return compose(
            this,
            { fontWeight: "bold" }
        );
    },

    underline: function() {
        return compose(
            this,
            { textDecoration: "underline" }
        );
    },

    strikeThrough: function() {
        return compose(
            this,
            { textDecoration: "line-through" }
        );
    },

    noUnderline: function() {
        return compose(
            this,
            { textDecoration: "none" }
        );
    },

    capitalize: function() {
        return compose(
            this,
            { textTransform: "capitalize" }
        );
    },

    upperCase: function() {
        return compose(
            this,
            { textTransform: "uppercase" }
        );
    },

    lowerCase: function() {
        return compose(
            this,
            { textTransform: "lowercase" }
        );
    },

    originalCase: function() {
        return compose(
            this,
            { textTransform: "none" }
        );
    },

    indent: function(value) {
        return compose(
            this,
            {
                textIndent: formatUnitValue(value)
            }
        );
    },

    rightToLeft: function() {
        return compose(
            this,
            {
                direction: "rtl"
            }
        );
    },

    leftToRight: function() {
        return compose(
            this,
            {
                direction: "ltr"
            }
        );
    },

    fontDefaults: {
        serif: "serif",
        sansSerif: "sans-serif",
        monoSpace: "monospace",
        cursive: "cursive",
        fantasy: "fantasy",
        system: "system-ui",
        emoji: "emoji",
        math: "math",
        fangsong: "fangsong"
    }
};

export const textAlign = value => {
    return { textAlign: value };
};
export const textAlignLeft = textAlign("left");
export const textAlignRight = textAlign("right");
export const textAlignCenter = textAlign("center");
export const textAlignJustify = textAlign("justify");
export const textAlignJustifyAll = textAlign("justify-all");
export const textAlignStart = textAlign("start");
export const textAlignEnd = textAlign("end");
export const textAlignParent = textAlign("match-parent");

    export const textAllowWordBreak = {
        overflowWrap: "break-word",
        wordWrap: "break-word"
    };