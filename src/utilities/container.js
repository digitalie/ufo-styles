import { formatUnitValue, formatUnitArrayValue } from "../lib/format";
import { merge } from "../lib/merge";


export const container = {
    _paddingTop: 0,
    _paddingRight: 0,
    _paddingBottom: 0,
    _paddingLeft: 0,
    padding: 0,

    formatPaddingValue: function () {
        this.padding = formatUnitArrayValue([this._paddingTop, this._paddingRight, this._paddingBottom, this._paddingLeft]);
        return this;
    },

    paddingAll: function (value) {
        return merge(this, {
            _paddingTop: value,
            _paddingRight: value,
            _paddingBottom: value,
            _paddingLeft: value,
        }).formatPaddingValue();
    },
    paddingTop: function (value) {
        return merge(this, {
            _paddingTop: value,
        }).formatPaddingValue();
    },

    paddingBottom: function (value) {
        return merge(this, {
            _paddingBottom: value,
        }).formatPaddingValue();
    },

    paddingRight: function (value) {
        return merge(this, {
            _paddingLeft: value,
        }).formatPaddingValue();
    },

    paddingLeft: function (value) {
        return merge(this, {
            _paddingRight: value,
        }).formatPaddingValue();
    },

    paddingHorizontal: function (value) {
        return this.paddingRight(value).paddingLeft(value);
    },

    paddingVertical: function (value) {
        return this.paddingTop(value).paddingBottom(value);
    },
};
