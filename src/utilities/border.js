import { formatColorValue } from "../lib/format";

export const borderColor = (...value) => {
    return { borderColor: formatColorValue.apply(this, value) };
};
