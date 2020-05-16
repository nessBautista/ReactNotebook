console.log("App.js is running");

var user = {
  name: "Andrew",
  age: 26,
  location: "Texas",
};

var app = {
  title: "This is the title",
  subtitle: "This is a subtitle",
  options: ["one", "two"],
};
var userName = "John Wick";
var userAge = 43;
var userLocation = "New York";

function getOptions(app) {
  return <p>{app.options.length > 0 ? "Options" : "No options"}</p>;
}
//JSX-Javascript XML
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>item one</li>
      <li>item two</li>
    </ol>
  </div>
);

var template2 = (
  <div>
    <h1>{user.name.toUpperCase()}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
