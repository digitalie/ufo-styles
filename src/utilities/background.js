import {
    formatColorValue,
    formatUrlValue,
    formatUnitArrayValue,
    formatUnitValue
} from "../lib/format";
import { merge } from "../lib/merge";

export const background = {
    _color: "transparent",
    _image: "none",
    _position: ["0%", "0%"],
    _size: "auto",
    _repeat: "no-repeat",
    _origin: "padding-box",
    _clip: "border-box",
    _attachment: "scroll",
    _blendMode: "normal",

    color: function(...color) {
        return merge(
            this,
            { _color: color }
        ).formatBackgroundValue();
    },

    image: function(image) {
        return merge(
            this,
            { _image: image }
        ).formatBackgroundValue();
    },

    position: function(...position) {
        return merge(
            this,
            { _position: position }
        ).formatBackgroundValue();
    },

    size: function(...size) {
        return merge(
            this,
            { _size: size }
        ).formatBackgroundValue();
    },

    cover: function() {
        return this.size("cover");
    },

    contain: function() {
        return this.size("contain");
    },

    stretch: function() {
        return this.size("100%", "100%");
    },

    repeat: function() {
        return merge(
            this,
            { _repeat: "repeat" }
        ).formatBackgroundValue();
    },

    repeatHorizontal: function() {
        return merge(
            this,
            { _repeat: "repeat-x" }
        ).formatBackgroundValue();
    },

    repeatVertical: function() {
        return merge(
            this,
            { _repeat: "repeat-y" }
        ).formatBackgroundValue();
    },

    repeatEvenly: function() {
        return merge(
            this,
            { _repeat: "space" }
        ).formatBackgroundValue();
    },

    repeatStretched: function() {
        return merge(
            this,
            { _repeat: "round" }
        ).formatBackgroundValue();
    },

    originAtBorder: function() {
        return merge(
            this,
            { _origin: "border-box" }
        ).formatBackgroundValue();
    },

    originAtPadding: function() {
        return merge(
            this,
            { _origin: "padding-box" }
        ).formatBackgroundValue();
    },

    originAtContent: function() {
        return merge(
            this,
            { _origin: "content-box" }
        ).formatBackgroundValue();
    },

    clipByBorder: function() {
        return merge(
            this,
            { _clip: "border-box" }
        ).formatBackgroundValue();
    },

    clipByPadding: function() {
        return merge(
            this,
            { _clip: "padding-box" }
        ).formatBackgroundValue();
    },

    clipByContent: function() {
        return merge(
            this,
            { _clip: "content-box" }
        ).formatBackgroundValue();
    },

    scroll: function() {
        return merge(
            this,
            { _attachment: "scroll" }
        ).formatBackgroundValue();
    },

    fixed: function() {
        return merge(
            this,
            { _attachment: "fixed" }
        ).formatBackgroundValue();
    },

    local: function() {
        return merge(
            this,
            { _attachment: "local" }
        ).formatBackgroundValue();
    },

    // background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
    formatBackgroundValue: function() {
        this.background = [
            formatColorValue.apply(
                this,
                Array.isArray(this._color) ? this._color : [this._color]
            ),
            formatUrlValue(this._image),
            (Array.isArray(this._position)
                ? formatUnitArrayValue(this._position)
                : formatUnitValue(this._position)) +
                "/" +
                (Array.isArray(this._size)
                    ? formatUnitArrayValue(this._size)
                    : formatUnitValue(this._size)),
            formatUnitValue(this._repeat),
            formatUnitValue(this._origin),
            formatUnitValue(this._clip),
            formatUnitValue(this._attachment)
        ]
            .join(" ")
            .trim();
        return this;
    }
};

// blend mode
export const backgroundBlendMultiply = { backgroundBlendMode: "multiply" };
export const backgroundBlendScreen = { backgroundBlendMode: "screen" };
export const backgroundBlendOverlay = { backgroundBlendMode: "overlay" };
export const backgroundBlendDarken = { backgroundBlendMode: "darken" };
export const backgroundBlendLighten = { backgroundBlendMode: "lighten" };
export const backgroundBlendColorDodge = { backgroundBlendMode: "color-dodge" };
export const backgroundBlendSaturation = { backgroundBlendMode: "saturation" };
export const backgroundBlendColor = { backgroundBlendMode: "color" };
export const backgroundBlendLuminosity = { backgroundBlendMode: "luminosity" };

// // css accepts arrays of background images for each class, along with arrays of each attribute, such as position or attachment
// // this function combines multiple background objects into the correct array format for css to understand
// export const backgrounds = (...backgrounds) => {
//     const combinedBackground = {};
//     const backgroundAttributeDefaults = {
//         backgroundImage: "none",
//         backgroundAttachment: "scroll",
//         backgroundBlendMode: "normal",
//         backgroundClip: "border-box",
//         backgroundOrigin: "padding-box",
//         backgroundPosition: "0% 0%",
//         backgroundRepeat: "repeat",
//         backgroundSize: "auto"
//     };

//     for (var backgroundAttributeName in backgroundAttributeDefaults) {
//         if (
//             Object.prototype.hasOwnProperty.call(
//                 backgroundAttributeDefaults,
//                 backgroundAttributeName
//             )
//         ) {
//             const combinedValues = backgrounds.map(
//                 background => background[backgroundAttributeName]
//             );

//             if (combinedValues.filter(value => value).length > 0) {
//                 combinedBackground[
//                     backgroundAttributeName
//                 ] = combinedValues
//                     .map(
//                         combinedValue =>
//                             combinedValue ||
//                             backgroundAttributeDefaults[backgroundAttributeName]
//                     )
//                     .join(", ");
//             }
//         }
//     }

//     return combinedBackground;
// };
