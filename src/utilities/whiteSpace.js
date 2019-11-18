import { merge } from "../lib/merge";

export const whiteSpace = {
    preserveLinesBreaks: function() {
        return merge(
            this,
            { whiteSpace: "pre-line" }
        );
    },

    preserveAll: function() {
        return merge(
            this,
            { whiteSpace: "pre-wrap" }
        );
    },

    ignore: function() {
        return merge(
            this,
            { whiteSpace: "normal" }
        );
    }
};
