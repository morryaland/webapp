const React = require("react");
const ReactDOM = require("react-dom");

function Lol(props) {return <h1>{props.text}</h1>;}

ReactDOM.render(<Lol text="LOL"/>, document.getElementById("root"));
