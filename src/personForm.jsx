const React = require("react");
const { Form, Input, Label } = require("./ui/form.jsx");

function PersonForm()
{
  const name = React.useRef(null)
  const age = React.useRef(null)

  async function setData(e)
  {
    e.preventDefault();
    const response = await fetch("/api/persons", {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: JSON.stringify({
        name: name.current.value,
        age: age.current.value
      })
    })
    if (!response.ok) {
      console.error("data not send");
      return;
    }
  }

  return (<Form onSubmit={setData}>
    <Label>Name: </Label>
    <Input type="text" ref={name}/><br/>
    <Label>Age: </Label>
    <Input type="number" ref={age}/><br/>
    <Input type="submit" value="Set Data"/>
  </Form>);
}

module.exports = PersonForm;
