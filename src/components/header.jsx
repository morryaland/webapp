const React = require("react");
const { styled, css } = require("styled-components");

const Button = styled.button`
color: ${props => props.color};
`;


function Header(props)
{
  return (
    <header className={props.className}>
      <Button color="white">
        {props.text}
      </Button>
    </header>);
}

const StHeader = styled(Header)`
background-color: #000;
`;

module.exports = StHeader;
