import { formatUnitValue, formatColorValue } from '../lib/format'

export const shadow = (offsetX, offsetY, blur, spread, ...color) => {
    return { boxShadow: `${formatUnitValue(offsetX)} ${formatUnitValue(offsetY)} ${formatUnitValue(blur)} ${formatUnitValue(spread)} ${formatColorValue.apply(this, color)}` }
}

export const shadowInset = (offsetX, offsetY, blur, spread, ...color) => {
    return { boxShadow: `inset ${formatUnitValue(offsetX)} ${formatUnitValue(offsetY)} ${formatUnitValue(blur)} ${formatUnitValue(spread)} ${formatColorValue.apply(this, color)}` }
}

export const shadows = (...shadows) => {
    return { boxShadow: shadows.map(shadow => shadow.boxShadow).join(', ') }
}

