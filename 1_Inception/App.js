const parent = React.createElement("div", {}, [
  React.createElement("div", {}, "I am in thrid div"),
  React.createElement("div", {}, "I am h2 Tag "),
]);

// console.log(heading); It will return a Object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
