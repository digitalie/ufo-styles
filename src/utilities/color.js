import { formatColorValue } from "../lib/format";

export const color = (...value) => {
    return { color: formatColorValue.apply(this, value) };
};
