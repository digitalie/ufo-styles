import { formatColorValue, formatUnitValue, formatUnitArrayValue } from "../lib/format";
import { merge } from "../lib/merge";


export const corner = {
    _topLeft: 0,
    _topRight: 0,
    _bottomRight: 0,
    _bottomLeft: 0,

    radius: function (radius) {
        return merge(
            this,
            {
                _topLeft: radius,
                _topRight: radius,
                _bottomRight: radius,
                _bottomLeft: radius,
            }
        ).formatRadiusValue();
    },

    topRadius: function (radius) {
        return merge(
            this,
            {
                _topLeft: radius,
                _topRight: radius,
            }
        ).formatRadiusValue();
    },

    bottomRadius: function (radius) {
        return merge(
            this,
            {
                _bottomLeft: radius,
                _bottomRight: radius,
            }
        ).formatRadiusValue();
    },

    leftRadius: function (radius) {
        return merge(
            this,
            {
                _topLeft: radius,
                _bottomLeft: radius,
            }
        ).formatRadiusValue();
    },

    rightRadius: function (radius) {
        return merge(
            this,
            {
                _topRight: radius,
                _bottomRight: radius,
            }
        ).formatRadiusValue();
    },

    topLeftRadius: function (radius) {
        return merge(
            this,
            {
                _topLeft: radius,
            }
        ).formatRadiusValue();
    },

    topRightRadius: function (radius) {
        return merge(
            this,
            {
                _topRight: radius,
            }
        ).formatRadiusValue();
    },

    bottomRightRadius: function (radius) {
        return merge(
            this,
            {
                _bottomRight: radius,
            }
        ).formatRadiusValue();
    },

    bottomLeftRadius: function (radius) {
        return merge(
            this,
            {
                _bottomLeft: radius,
            }
        ).formatRadiusValue();
    },

    formatRadiusValue: function () {
        this.borderRadius = formatUnitArrayValue([this._topLeft, this._topRight, this._bottomRight, this._bottomLeft]);

        return this;
    }
};
