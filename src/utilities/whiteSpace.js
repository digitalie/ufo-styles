import { compose } from "../lib/compose";

export const whiteSpace = {
    preserveLinesBreaks: function() {
        return compose(
            this,
            { whiteSpace: "pre-line" }
        );
    },

    preserveAll: function() {
        return compose(
            this,
            { whiteSpace: "pre-wrap" }
        );
    },

    ignore: function() {
        return compose(
            this,
            { whiteSpace: "normal" }
        );
    }
};
