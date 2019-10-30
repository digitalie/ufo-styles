export class Ufo {
    constructor() {
        this.config = {};
    }

    configure(customConfig) {
        this.config = { ...this.config, ...customConfig };
    }
}
export default new Ufo();

