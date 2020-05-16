"use strict";

console.log("App.js is running");

var user = {
  name: "Andrew",
  age: 26,
  location: "Texas"
};

var app = {
  title: "This is the title",
  subtitle: "This is a subtitle",
  options: ["one", "two"]
};
var userName = "John Wick";
var userAge = 43;
var userLocation = "New York";

function getOptions(app) {
  return React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Options" : "No options"
  );
}
//JSX-Javascript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options" : "No options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "item one"
    ),
    React.createElement(
      "li",
      null,
      "item two"
    )
  )
);

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name.toUpperCase()
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
