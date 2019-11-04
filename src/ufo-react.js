import ufoDom from "./lib/ufodom";
import { useState, useEffect } from "react";

export const configure = config => {
    ufoDom.configure(config);
};

export const useUfoClassName = (...styleObjects) => {
    const [className, setClassName] = useState("");
    let dependencies;
    if (Array.isArray(styleObjects[styleObjects.length - 1])) {
        dependencies = styleObjects.pop();
    }

    useEffect(() => {
        const newClassName = ufoDom.createStyleTag(styleObjects);

        setClassName(newClassName);

        return () => {
            ufoDom.removeUnusedStyleTags();
        };
    }, dependencies || []);

    return className;
};
