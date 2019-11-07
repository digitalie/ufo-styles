import ufoDom from "./lib/ufo-dom";
import { useEffect, useMemo } from "react";

export const useUfoClassName = (...cssInJsIObjects) => {
    let dependencies;
    if (Array.isArray(cssInJsIObjects[cssInJsIObjects.length - 1])) {
        dependencies = cssInJsIObjects.pop();
    }

    const newClassName = useMemo(() => {
        return ufoDom.createStyleTag(cssInJsIObjects);
    }, dependencies || []);

    useEffect(() => {
        return () => {
            ufoDom.removeStyleTagById(newClassName);
        };
    }, dependencies || []);

    return newClassName;
};
