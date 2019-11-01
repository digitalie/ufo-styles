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
    }, dependencies || []);

    return className;
}