const React = require("react");
const { TableRow, TableData } = require("./ui/table.jsx");

function Person(props)
{
  let person = props.person;
  return <TableRow>
    <TableData>{person.id}</TableData>
    <TableData>{person.name}</TableData>
    <TableData>{person.age}</TableData>
  </TableRow>;
}

module.exports = Person;
