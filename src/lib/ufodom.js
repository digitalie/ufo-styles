import { debounce } from "./debounce";
import { compose } from "./compose";
import ufo from "./ufo";

class UfoDom {
    constructor() {
        ufo.config = {
            units: "rem"
        };

        this.styleTagAllIDs = [];
        this.styleTagLatestID = 0;

        this.removeUnusedStyleTags = debounce(this.removeUnusedStyleTags, 50);
    }

    removeUnusedStyleTags() {
        for (var i = this.styleTagAllIDs.length - 1; i >= 0; i--) {
            let id = this.styleTagAllIDs[i];
            if (document.body.getElementsByClassName(id).length === 0) {
                this.styleTagAllIDs.splice(i, 1);
                const element = document.getElementById(id);
                if (element) {
                    document.body.removeChild(element);
                }
            }
        }
    }

    configure(customConfig) {
        this.config = { ...this.config, ...customConfig };
    }

    toCssString(styleObject) {
        const styleRules = document.createElement("span").style;

        Object.keys(styleObject).forEach(styleRuleKey => {
            if (
                Object.prototype.hasOwnProperty.call(styleObject, styleRuleKey)
            ) {
                styleRules[styleRuleKey] = styleObject[styleRuleKey];
            }
        });

        return styleRules.cssText;
    }

    createNewClassName() {
        this.styleTagLatestID += 1;
        const id = `ufo_styles_${this.styleTagLatestID}`;
        this.styleTagAllIDs.push(id);
        return id;
    }

    createStyleTag(styleObjects) {
        const pseudoClassStyleObjects = styleObjects.filter(
            x => x.pseudoClassStyles
        );
        const defaultCssInJsObject = compose.apply(
            this,
            styleObjects.filter(x => !x.pseudoClassStyles)
        );

        const newClassName = this.createNewClassName();
        const newStyleElement = document.createElement("style");

        newStyleElement.id = newClassName;
        newStyleElement.innerHTML = `.${newClassName} {${this.toCssString(
            defaultCssInJsObject
        )}}`;
        pseudoClassStyleObjects.forEach(pseudoClassStyleObject => {
            newStyleElement.innerHTML += `.${newClassName}:${
                pseudoClassStyleObject.pseudoClassStyles
            } {${this.toCssString(pseudoClassStyleObject.cssInJsIObject)}}`;
        });

        document.body.appendChild(newStyleElement);

        return newClassName;
    }
}
export default new UfoDom();

export const hover = (...styleObjects) => {
    return pseudoClassStyles("hover", styleObjects);
};
export const active = (...styleObjects) => {
    return pseudoClassStyles("active", styleObjects);
};
export const focus = (...styleObjects) => {
    return pseudoClassStyles("focus", styleObjects);
};
export const focusWithin = (...styleObjects) => {
    return pseudoClassStyles("focus-within", styleObjects);
};
export const visited = (...styleObjects) => {
    return pseudoClassStyles("visited", styleObjects);
};
const pseudoClassStyles = (pseudoClass, styleObjects) => {
    return {
        pseudoClassStyles: pseudoClass,
        cssInJsIObject: compose.apply(this, styleObjects)
    };
};
