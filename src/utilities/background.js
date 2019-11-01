import { formatColorValue, formatUrlValue, formatUnitArrayValue } from '../lib/format';
import { compose } from '../lib/compose';

// color
export const backgroundColor = (...value) => {
    return {
        backgroundColor: formatColorValue.apply(this, value)
    };
}

// just image url
export const backgroundImage = (value) => {
    return {
        backgroundImage: formatUrlValue(value)
    };
}

// image attachement
export const backgroundScroll = { backgroundAttachment: "scroll" };
export const backgroundFixed = { backgroundAttachment: "fixed" };
export const backgroundLocal = { backgroundAttachment: "local" };

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

// clip
export const backgroundClipBorder = { backgroundClip: "border-box" };
export const backgroundClipPadding = { backgroundClip: "padding-box" };
export const backgroundClipContent = { backgroundClip: "content-box" };

// origin
export const backgroundOriginBorder = { backgroundOrigin: "border-box" };
export const backgroundOriginPadding = { backgroundOrigin: "padding-box" };
export const backgroundOriginContent = { backgroundOrigin: "content-box" };

// image position
export const backgroundTopLeft = { backgroundPosition: "left top" };
export const backgroundTop = { backgroundPosition: "top" };
export const backgroundTopRight = { backgroundPosition: "right top" };

export const backgroundBottomLeft = { backgroundPosition: "left bottom" };
export const backgroundBottom = { backgroundPosition: "bottom" };
export const backgroundBottomRight = { backgroundPosition: "right bottom" };

export const backgroundLeft = { backgroundPosition: "left" };
export const backgroundRight = { backgroundPosition: "right" };
export const backgroundCenter = { backgroundPosition: "center" };

// repeat 
export const backgroundRepeatAll = { backgroundRepeat: "repeat" };
export const backgroundRepeatNone = { backgroundRepeat: "no-repeat" };
export const backgroundRepeatHorizontal = { backgroundRepeat: "repeat-x" };
export const backgroundRepeatVertical = { backgroundRepeat: "repeat-y" };
export const backgroundRepeatSpace = { backgroundRepeat: "space" };
export const backgroundRepeatRound = { backgroundRepeat: "round" };

// size
export const backgroundContain = { backgroundSize: "contain" };
export const backgroundCover = { backgroundSize: "cover" };
export const backgroundStretch = { backgroundSize: "100% 100%" };
export const backgroundSize = (...value) => {
    return { backgroundSize: formatUnitArrayValue(value) };
};

// useful functions for basic background images
export const backgroundImageCover = (value) => {
    return compose(
        backgroundImage(value),
        backgroundCover,
    );
}

export const backgroundImageStretch = (value) => {
    return compose(
        backgroundImage(value),
        backgroundStretch,
    );
}

export const backgroundImageContain = (value) => {
    return compose(
        backgroundImage(value),
        backgroundContain,
    );
}

export const backgroundImageContainRepeatNone = (value) => {
    return compose(
        backgroundImage(value),
        backgroundContain,
        backgroundRepeatNone,
    );
}

// css accepts arrays of background images for each class, along with arrays of each attribute, such as position or attachment
// this function combines multiple background objects into the correct array format for css to understand
export const backgroundList = (...backgrounds) => {
    const combinedBackground = {};
    const backgroundAttributeDefaults =
    {
        backgroundImage: "none",
        backgroundAttachment: "scroll",
        backgroundBlendMode: "normal",
        backgroundClip: "border-box",
        backgroundOrigin: "padding-box",
        backgroundPosition: "0% 0%",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
    }

    for (var backgroundAttributeName in backgroundAttributeDefaults) {
        if (backgroundAttributeDefaults.hasOwnProperty(backgroundAttributeName)) {
            const combinedValues = backgrounds.map(background => background[backgroundAttributeName]);
            
            if (combinedValues.filter(value => value).length > 0) {
                combinedBackground[backgroundAttributeName] = combinedValues.map(combinedValue => combinedValue || backgroundAttributeDefaults[backgroundAttributeName]).join(', ');
            }
        }
    };
    console.log(combinedBackground);
    return combinedBackground;
}