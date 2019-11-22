import { formatUnitValue } from "../lib/format";
import { merge } from "../lib/merge";

export const size = {
    minimumWidth: function (value) {
        return merge(
            this,
            {
                minWidth: formatUnitValue(value)
            }
        );
    },
    minimumHeight: function (value) {
        return merge(
            this,
            {
                minHeight: formatUnitValue(value)
            }
        );
    },
    fixedWidth: function (value) {
        return merge(
            this,
            {
                width: formatUnitValue(value)
            }
        );
    },
    fixedHeight: function (value) {
        return merge(
            this,
            {
                height: formatUnitValue(value)
            }
        );
    },
    fixedSize: function (widthValue, heightValue) {
        return this.fixedWidth(widthValue).fixedHeight(heightValue);
    },
    minimumSize: function (widthValue, heightValue) {
        return this.minimumWidth(widthValue).minimumHeight(heightValue);
    },
    fullSize: function () {
        return this.fixedSize("100%", "100%");
    },
    fullWidth: function () {
        return this.fixedWidth("100%");
    },
    fullHeight: function () {
        return this.fixedHeight("100%");
    },
};

