let createEl = React.createElement("div", { className: "firstChildDiv" }, [
  React.createElement(
    "div",
    { className: "secondChildDiv" },
    React.createElement(
      "h1",
      { className: "heading" },
      "sanchit sharma from dhaulana"
    )
  ),
  React.createElement(
    "div",
    { className: "secondChildDiv" },
    React.createElement(
      "h1",
      { className: "heading" },
      "sanchit sharma from dhaulana"
    )
  ),
]);

let root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(createEl);
