import ufo from './lib/ufo';

export const configure = (config) => {
    ufo.configure(config);
}

export const compose = (cssInJsIObjects) => {
    return ufo.compose(cssInJsIObjects);
}