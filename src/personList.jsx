const React = require("react");
const { TableRow, Table, TableHeader } = require("./ui/table.jsx");
const Person = require("./person.jsx");

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
    let personList = p.map(person => <Person key={person.id} person={person}/>);
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
