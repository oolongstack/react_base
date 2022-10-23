import { REACT_ELEMENT } from "./constants";
import { toObject } from "./util";

function createElement(type, config, children) {
  // key ref
  let key;
  let ref;
  if (config) {
    key = config.key || null;
    ref = config.ref || null;
  }
  const props = { ...config };
  if (config) {
    // 1.没有children
    // 2. 一个儿子 文本或元素
    // 3.多个儿子
    if (arguments.length > 3) {
      // 3
      props.children = Array.prototype.slice.call(arguments, 2).map(toObject);
    } else if (arguments.length === 3) {
      props.children = toObject(children);
    }
  }
  return {
    $$typeof: REACT_ELEMENT,
    type, // 类型 div func class
    props,
    key,
    ref,
  };
}
const React = {
  createElement,
};
export default React;
