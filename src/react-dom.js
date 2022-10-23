import { REACT_TEXT } from "./constants";

function render(vdom, container) {
  mount(vdom, container);
}
function mount(vdom, container) {
  // 1. vdom 转为真实dom
  const newDom = createDom(vdom);
  // 2. 挂载
  container.appendChild(newDom);
}
function createDom(vdom) {
  let { type, props } = vdom;
  // console.log(vdom);
  let dom;
  if (type === REACT_TEXT) {
    dom = document.createTextNode(vdom.content);
    // console.log(dom);
  } else if (typeof type === "function") {
    if (type.isReactComponent) {
      return mountClassComponent(vdom);
    }
    return mountFunctionComponent(vdom);
  } else {
    dom = document.createElement(type);
  }
  if (props) {
    // dom 旧props 新props
    updateProps(dom, {}, props);
    const children = props.children;
    if (children) {
      changeChildren(children, dom);
    }
  }
  return dom;
}
function updateProps(dom, oldProps, newProps) {
  if (newProps) {
    for (const key in newProps) {
      if (key === "children") continue;
      else if (key === "style") {
        let styleObject = newProps[key];
        for (const styleKey in styleObject) {
          dom.style[styleKey] = styleObject[styleKey];
        }
      } else {
        // dom上添加属性
        dom[key] = newProps[key];
      }
    }
  }
  if (oldProps) {
    // 新属性内没有的属性，在dom里删除
    for (const key in oldProps) {
      if (!newProps[key]) {
        dom[key] = null;
      }
    }
  }
}
function changeChildren(children, container) {
  // 一个或者多个
  if (typeof children === "object" && children.type) {
    render(children, container);
  } else if (Array.isArray(children)) {
    children.forEach((child) => render(child, container));
  }
}
function mountFunctionComponent(vdom) {
  let { type, props } = vdom;
  const functionVdom = type(props);

  return createDom(functionVdom);
}
function mountClassComponent(vdom) {
  let { type, props } = vdom;
  const classInstance = new type(props);
  return createDom(classInstance.render());
}

const ReactDOM = {
  render,
};
export default ReactDOM;
