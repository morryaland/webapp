const React = require("react");
const { styled, css } = require("styled-components");

const TimeStyle = styled.h2`
  color: blue;
`

function Time() {
  const [ time, setTime ] = React.useState(new Date().toLocaleTimeString());
  tick = function() {
    setTime(new Date().toLocaleTimeString());
  };
  setInterval(tick, 1000);
  return (<TimeStyle>{time}</TimeStyle>);
}

module.exports = Time;
