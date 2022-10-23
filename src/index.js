// import React from "react";
import React from "./react";
// import ReactDOM from "react-dom";
import ReactDOM from "./react-dom";

function FunctionComponent(props) {
  return React.createElement("div", {}, `hello ${props.name}`);
}

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "male",
    };
  }
  render() {
    return React.createElement("div", {}, `class component,${this.props.age}`);
  }
}

const el1 = React.createElement(
  "div",
  { className: "el" },
  React.createElement("span", { style: { color: "red" } }, "哈哈", "哦哦"),
  React.createElement(
    "span",
    { style: { fontSize: "30px", color: "green" } },
    "哈哈"
  ),
  React.createElement(FunctionComponent, { name: "蔡杰鲁" }),
  React.createElement(ClassComponent, { age: 22 })
);
console.log(el1);
ReactDOM.render(el1, document.getElementById("root"));
