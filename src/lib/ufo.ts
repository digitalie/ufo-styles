export default {
    config: {
        isWeb: typeof document !== "undefined",
        isReactNative:
            typeof navigator !== "undefined" &&
            navigator.product === "ReactNative",
        isNode:
            typeof document === "undefined" && typeof navigator === "undefined"
    },

    configure(customConfig) {
        this.config = { ...this.config, ...customConfig };
    }
};
