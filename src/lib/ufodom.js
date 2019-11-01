import { debounce } from "./debounce";
import { compose } from "./compose";
import ufo from "./ufo";

class UfoDom {
    constructor() {
        ufo.config = {
            units: "rem"
        };

        this.cssInJsAllIds = [];
        this.cssInJsLatestId = 0;

        this.removeUnusedStyleTags = debounce(this.removeUnusedStyleTags, 50);
    }

    removeUnusedStyleTags() {
        for (var i = this.cssInJsAllIds.length - 1; i >= 0; i--) {
            let cssInJsId = this.cssInJsAllIds[i];
            if (document.body.getElementsByClassName(cssInJsId).length === 0) {
                this.cssInJsAllIds.splice(i, 1);
                const element = document.getElementById(cssInJsId);
                if (element) {
                    document.body.removeChild(element);
                }
            }
        }
    }

    configure(customConfig) {
        this.config = { ...this.config, ...customConfig };
    }

    toCssString(cssInJsObject) {
        const styleRules = document.createElement("span").style;

        Object.keys(cssInJsObject).forEach(styleRuleKey => {
            if (
                Object.prototype.hasOwnProperty.call(
                    cssInJsObject,
                    styleRuleKey
                )
            ) {
                styleRules[styleRuleKey] = cssInJsObject[styleRuleKey];
            }
        });

        return styleRules.cssText;
    }

    createNewClassName() {
        this.cssInJsLatestId += 1;
        const newCssInJsId = `ufo_styles_${this.cssInJsLatestId}`;
        this.cssInJsAllIds.push(newCssInJsId);
        return newCssInJsId;
    }

    createStyleTag(cssInJsIObjects) {
        const stateSpecificCssInJsObjects = cssInJsIObjects.filter(
            x => x.stylesForState
        );
        const defaultCssInJsObject = compose.apply(
            this,
            cssInJsIObjects.filter(x => !x.stylesForState)
        );

        const newClassName = this.createNewClassName();
        const newStyleElement = document.createElement("style");

        newStyleElement.id = newClassName;
        newStyleElement.innerHTML = `.${newClassName} {${this.toCssString(
            defaultCssInJsObject
        )}}`;
        stateSpecificCssInJsObjects.forEach(stateSpecificCssInJsObject => {
            newStyleElement.innerHTML += `.${newClassName}:${
                stateSpecificCssInJsObject.stylesForState
            } {${this.toCssString(stateSpecificCssInJsObject.cssInJsIObject)}}`;
        });

        document.body.appendChild(newStyleElement);

        return newClassName;
    }
}
export default new UfoDom();

export const hover = (...cssInJsIObjects) => {
    return stylesForState("hover", cssInJsIObjects);
};
export const active = (...cssInJsIObjects) => {
    return stylesForState("active", cssInJsIObjects);
};
export const focus = (...cssInJsIObjects) => {
    return stylesForState("focus", cssInJsIObjects);
};
export const focusWithin = (...cssInJsIObjects) => {
    return stylesForState("focus-within", cssInJsIObjects);
};
export const visited = (...cssInJsIObjects) => {
    return stylesForState("visited", cssInJsIObjects);
};
const stylesForState = (state, cssInJsIObjects) => {
    return {
        stylesForState: state,
        cssInJsIObject: compose.apply(this, cssInJsIObjects)
    };
};
