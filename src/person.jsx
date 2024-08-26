const React = require("react");

function Person(props)
{
  return <tr>
    <td>Name: {props.name}</td>
    <td>Age: {props.age}</td>
  </tr>;
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
    let p = await response.json();
    let personList = [];
    p.forEach(person => personList.push(<Person name={person.name} age={person.age}/>));
    SetPersonComonentList(personList);
  }
  return (<div><table>
    {personComponentList}
  </table>
  <button onClick={GetPerson}>Get Data</button>
  </div>)
}

module.exports = PersonList;
