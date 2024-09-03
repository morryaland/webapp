const React = require("react");
const ReactDOM = require("react-dom/client");
const PersonList = require("./personList.jsx");
const PersonForm = require("./personForm.jsx");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PersonList />
    <PersonForm />
  </React.StrictMode>);
