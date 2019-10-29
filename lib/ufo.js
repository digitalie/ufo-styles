export class Ufo {
    constructor() {
        this.config = {
            units: "dp",
        };
    }

    configure(customConfig) {
        this.config = { ...this.config, ...customConfig };
    }

    compose(cssInJsIObjects) {
        return Object.assign({}, ...cssInJsIObjects);
    }
}
export default new Ufo();

