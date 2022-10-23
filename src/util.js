import { REACT_TEXT } from "./constants";

export function toObject(ele) {
  return typeof ele === "string" || typeof ele === "number"
    ? {
        type: REACT_TEXT,
        content: ele,
      }
    : ele;
}
