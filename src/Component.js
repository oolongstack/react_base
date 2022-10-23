class Component {
  static isReactComponent = true;
  constructor(props) {
    this.props = props;
  }
  setState() {}
}

// class Father {
//   constructor(props) {
//     this.props = props;
//   }
// }

// class Son extends Father {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "ccc",
//     };
//   }
// }

// const s = new Son({ age: 22 });

// console.log(s, "s");
export { Component };
