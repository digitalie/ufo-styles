export class Ufo {
    constructor() {
        this.config = {};
    }

    configure(customConfig) {
        this.config = { ...this.config, ...customConfig };
    }

    compose(cssInJsIObjects) {
        return Object.assign({}, ...cssInJsIObjects);
    }
}
export default new Ufo();

