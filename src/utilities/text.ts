import { formatUnitValue, formatColorValue } from "../lib/format";
import { merge } from "../lib/merge";

export const text = {
    color: function(...value) {
        return merge(
            this,
            {
                color: formatColorValue.apply(this, value)
            }
        );
    },

    height: function(value) {
        return merge(
            this,
            {
                fontSize: formatUnitValue(value)
            }
        );
    },

    boxHeight: function(value) {
        return merge(
            this,
            {
                lineHeight: formatUnitValue(value)
            }
        );
    },

    letterSpace: function(value) {
        return merge(
            this,
            {
                letterSpacing: formatUnitValue(value)
            }
        );
    },

    wordSpace: function(value) {
        return merge(
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
        return merge(
            this,
            { fontFamily }
        );
    },

    italic: function() {
        return merge(
            this,
            { fontStyle: "italic" }
        );
    },

    bold: function() {
        return merge(
            this,
            { fontWeight: "bold" }
        );
    },

    underline: function() {
        return merge(
            this,
            { textDecoration: "underline" }
        );
    },

    strikeThrough: function() {
        return merge(
            this,
            { textDecoration: "line-through" }
        );
    },

    noUnderline: function() {
        return merge(
            this,
            { textDecoration: "none" }
        );
    },

    capitalize: function() {
        return merge(
            this,
            { textTransform: "capitalize" }
        );
    },

    upperCase: function() {
        return merge(
            this,
            { textTransform: "uppercase" }
        );
    },

    lowerCase: function() {
        return merge(
            this,
            { textTransform: "lowercase" }
        );
    },

    originalCase: function() {
        return merge(
            this,
            { textTransform: "none" }
        );
    },

    indent: function(value) {
        return merge(
            this,
            {
                textIndent: formatUnitValue(value)
            }
        );
    },

    rightToLeft: function() {
        return merge(
            this,
            {
                direction: "rtl"
            }
        );
    },

    leftToRight: function() {
        return merge(
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
