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

const el1 = React.createElement(
  "div",
  { className: "el" },
  "你好啊",
  React.createElement("span", { style: { color: "red" } }, "哈哈", "哦哦"),
  React.createElement(
    "span",
    { style: { fontSize: "30px", color: "green" } },
    "哈哈"
  )
);
// console.log(el);
console.log(el1);
ReactDOM.render(el1, document.getElementById("root"));
