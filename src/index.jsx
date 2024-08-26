const React = require("react");
const ReactDOM = require("react-dom/client");
const PersonList = require("./person.jsx");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PersonList />
  </React.StrictMode>);
