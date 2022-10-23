// import React from "react";
import React from "./react";
// import ReactDOM from "react-dom";
import ReactDOM from "./react-dom";
// import App from "./App";

// const el = (
//   <div className="el">
//     <span>哈哈</span>
//   </div>
// );
function FunctionComponent(props) {
  return React.createElement("div", {}, `hello ${props.name}`);
}

// const el2 = <FunctionComponent name="cjl" />;
const el1 = React.createElement(
  "div",
  { className: "el" },
  React.createElement("span", { style: { color: "red" } }, "哈哈", "哦哦"),
  React.createElement(
    "span",
    { style: { fontSize: "30px", color: "green" } },
    "哈哈"
  ),
  React.createElement(FunctionComponent, { name: "蔡杰鲁" })
);
console.log(el1);
// console.log(el2);
ReactDOM.render(el1, document.getElementById("root"));
