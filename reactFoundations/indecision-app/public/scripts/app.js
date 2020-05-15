console.log("App.js is running");

//JSX-Javascript XML
var template = /*#__PURE__*/ React.createElement(
  "p",
  {
    id: "templateID",
  },
  "This is jsx from app.js !"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
