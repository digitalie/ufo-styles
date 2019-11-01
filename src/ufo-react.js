import ufoDom from "./lib/ufodom";
import { useState, useEffect } from "react";

export const configure = config => {
    ufoDom.configure(config);
};

export const useUfoClassName = (...cssInJsIObjects) => {
    const [className, setClassName] = useState('');
    let dependencies;
    if(Array.isArray(cssInJsIObjects[cssInJsIObjects.length - 1])){
        dependencies = cssInJsIObjects.pop();
    }

    useEffect(() => {
        const newClassName = ufoDom.createStyleTag(cssInJsIObjects);

        setClassName(newClassName);

        return () => {
            ufoDom.removeUnusedStyleTags();
        }
    }, dependencies || []);

    return className;
};
