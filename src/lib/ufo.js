export default {
    config: {},
    configure(customConfig) {
        this.config = { ...this.config, ...customConfig };
    }
};
