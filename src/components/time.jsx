const React = require("react");

function Time() {
  return <h2>{new Date().toLocaleTimeString()}</h2>;
}

module.exports = Time;
