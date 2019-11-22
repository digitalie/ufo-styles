import { formatUnitValue, formatUnitArrayValue } from "../lib/format";
import { merge } from "../lib/merge";


export const container = {
    _paddingTop: 0,
    _paddingRight: 0,
    _paddingBottom: 0,
    _paddingLeft: 0,
    _marginTop: 0,
    _marginRight: 0,
    _marginBottom: 0,
    _marginLeft: 0,

    padding: function (value) {
        return merge(this, {
            _paddingTop: value,
            _paddingRight: value,
            _paddingBottom: value,
            _paddingLeft: value,
        }).formatPaddingValue();
    },
    topPadding: function (value) {
        return merge(this, {
            _paddingTop: value,
        }).formatPaddingValue();
    },

    bottomPadding: function (value) {
        return merge(this, {
            _paddingBottom: value,
        }).formatPaddingValue();
    },

    rightPadding: function (value) {
        return merge(this, {
            _paddingRight: value,
        }).formatPaddingValue();
    },

    leftPadding: function (value) {
        return merge(this, {
            _paddingLeft: value,
        }).formatPaddingValue();
    },

    xPadding: function (value) {
        return merge(this, {
            _paddingLeft: value,
            _paddingRight: value,
        }).formatPaddingValue();
    },

    yPadding: function (value) {
        return merge(this, {
            _paddingTop: value,
            _paddingBottom: value,
        }).formatPaddingValue();
    },

    formatPaddingValue: function () {
        this.padding = formatUnitArrayValue([this._paddingTop, this._paddingRight, this._paddingBottom, this._paddingLeft]);
        return this;
    },

    margin: function (value) {
        return merge(this, {
            _marginTop: value,
            _marginRight: value,
            _marginBottom: value,
            _marginLeft: value,
        }).formatMarginValue();
    },
    topMargin: function (value) {
        return merge(this, {
            _marginTop: value,
        }).formatMarginValue();
    },

    bottomMArgin: function (value) {
        return merge(this, {
            _marginBottom: value,
        }).formatMarginValue();
    },

    rightMargin: function (value) {
        return merge(this, {
            _marginRight: value,
        }).formatMarginValue();
    },

    leftMargin: function (value) {
        return merge(this, {
            _marginLeft: value,
        }).formatMarginValue();
    },

    xMargin: function (value) {
        return merge(this, {
            _marginLeft: value,
            _marginRight: value,
        }).formatMarginValue();
    },

    yMargin: function (value) {
        return merge(this, {
            _marginTop: value,
            _marginBottom: value,
        }).formatMarginValue();
    },

    formatMarginValue: function () {
        this.margin = formatUnitArrayValue([this._marginTop, this._marginRight, this._marginBottom, this._marginLeft]);
        return this;
    },
};
