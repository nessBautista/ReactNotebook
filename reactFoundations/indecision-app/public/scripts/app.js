"use strict";

console.log("App.js is running");

//JSX-Javascript XML
var template = React.createElement(
  "p",
  null,
  "This is JSX code with watch!"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
