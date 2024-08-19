const React = require("react");
const ReactDOM = require("react-dom/client");
const Time = require("./components/time.jsx");
const StHeader = require("./components/header.jsx");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><StHeader text="pisacaca"/><Time /></React.StrictMode>);
