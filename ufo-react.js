import ufoDom from './lib/ufodom';
import { useState, useEffect } from 'react';

export const configure = (config) => {
    ufoDom.configure(config);
}

export const useStylesAsClassName = (cssInJsIObjects, dependencies) => {
    const [className, setClassName] = useState('');

    useEffect(() => {
        const newClassName = ufoDom.createStyleTag(cssInJsIObjects);

        setClassName(newClassName);

        return () => {
            ufoDom.removeUnusedStyleTags();
        }
    }, dependencies);

    return className;
}

export const hover = (cssInJsIObjects) => {
    return stylesForState("hover", cssInJsIObjects);
}
export const active = (cssInJsIObjects) => {
    return stylesForState("active", cssInJsIObjects);
}
export const focus = (cssInJsIObjects) => {
    return stylesForState("focus", cssInJsIObjects);
}
export const focusWithin = (cssInJsIObjects) => {
    return stylesForState("focus-within", cssInJsIObjects);
}
export const visited = (cssInJsIObjects) => {
    return stylesForState("visited", cssInJsIObjects);
}
export const stylesForState = (state, cssInJsIObjects) => {
    return { stylesForState: state, cssInJsIObjects };
}