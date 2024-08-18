const React = require("react");
const ReactDOM = require("react-dom/client");

const Time = () => <h2>{new Date().toLocaleTimeString()}</h2>;

const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  root.render(<React.StrictMode><Time /></React.StrictMode>);
}
setInterval(tick, 1000);
