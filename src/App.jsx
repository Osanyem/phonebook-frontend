import { useState } from "react";

const App = ({ listOfPeople }) => {
  const [people, setPeople] = useState(listOfPeople);
  // Form Value State
  const [formName, setFormName] = useState("");
  const [formNumber, setFormNumber] = useState("");

  //Form onChange Handlers
  const handleFormNameChange = (event) => {
    setFormName(event.target.value)
  }
  const handleFormNumberChange = (event) => {
    setFormNumber(event.target.value)
  }

  //Form Submission Handler
  const handleFormSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      id: people.length + 1,
      name: formName,
      number: formNumber
    }

    
    isDuplicateEntry(newPerson) ? alert("DUPLICATE ENTRIES ARE NOT ALLOWED") : setPeople(people.concat(newPerson))
  }

  //Duplicate Entry Checker
  const isDuplicateEntry = (person) => {
    const foundPerson = people.find(singlePerson => singlePerson.name === person.name)
    if (foundPerson) {
      return true
    }
    return false
  }

  return (
    <div>
      <ul>
        {people.map((singlePerson) => (
          <Person key={singlePerson.id} personDetails={singlePerson} />
        ))}
      </ul>

      <br />
      <p>ADD NEW PERSON</p>
      <form onSubmit={handleFormSubmit}>
        <p>
          New Name: 
          <input value={formName} onChange={handleFormNameChange}/>
        </p>

        <p>
          New Number: 
          <input value={formNumber} onChange={handleFormNumberChange}/>
        </p>

        <button>Add Person</button>
      </form>
    </div>
  );
};

export default App;
const Person = ({ personDetails }) => {
  return (
    <div>
      <p>
        NAME: {personDetails.name} NUMBER: {personDetails.number}
      </p>
    </div>
  );
};
