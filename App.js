const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from react"
); //{atrributes in curly braces}; //
// IN third argument we pass children
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 of first child"),
    React.createElement("h2", {}, "i am h2 of first child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 second child"),
    React.createElement("h2", {}, "I am h2 of second child"),
  ]),
]);
console.log(heading); // this is a react object
root.render(parent);
//console.log(heading);
