const React = require("react");
const { default: styled } = require("styled-components");

const Base = styled.div`
  border: 1px solid black;
`;

const Table = styled(Base).attrs({ as: 'table' })`
  border-collapse: collapse;
`;

const TableRow = styled(Base).attrs({ as: 'tr' })``;
const TableData = styled(Base).attrs({ as: 'td' })``;
const TableHeader = styled(Base).attrs({ as: 'th' })``;

function Person(props)
{
  return <TableRow>
    <TableData>{props.id}</TableData>
    <TableData>{props.name}</TableData>
    <TableData>{props.age}</TableData>
  </TableRow>;
}

function PersonList(props)
{
  const [ personComponentList, SetPersonComonentList ] = React.useState();
  async function GetPerson()
  {
    const response = await fetch("/api/persons", {
      method: "GET",
      headers: { "Accept": "application/json" }
    });
    if (!response.ok)
      return;
    let p = await response.json();
    let personList = p.map(person => <Person key={person.id} id={person.id} name={person.name} age={person.age}/>);
    SetPersonComonentList(personList);
  }
  return (
  <div><Table>
    <thead>
      <TableRow>
        <TableHeader>ID</TableHeader> <TableHeader>NAME</TableHeader> <TableHeader>AGE</TableHeader>
      </TableRow>
    </thead>
    <tbody>
      {personComponentList}
    </tbody>
  </Table>
  <button onClick={GetPerson}>Get Data</button>
  </div>)
}

module.exports = PersonList;
