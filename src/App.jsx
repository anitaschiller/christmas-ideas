import { useState } from 'react';

function App() {
  const initialPersons = [
    { name: 'Mama', ideas: ['Mütze', 'Tasse'] },
    { name: 'Papa', ideas: ['Socken'] },
    { name: 'Schwester', ideas: ['Buch', 'Plätzchen'] },
  ];
  const [personsToSendAGift, setPersonsToSendAGift] = useState(initialPersons);

  function handleSubmit(event) {
    event.preventDefault();
    const newPerson = event.target.newPerson.value;
    const newIdeasString = event.target.newIdeas.value;
    const newIdeasArray = newIdeasString.split(', ');
    const newPersonObject = { name: newPerson, ideas: newIdeasArray };
    setPersonsToSendAGift([...personsToSendAGift, newPersonObject]);
  }

  return (
    <div className="App">
      <h1>Weihnachts-Ideen</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newPerson">Add a new person</label>
        <input type="text" id="newPerson" name="newPerson" />
        <label htmlFor="newIdeas">Add your ideas (separated by commas)</label>
        <input type="text" id="newIdeas" name="newIdeas" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
