import { useState } from 'react';
import Card from './components/Card';

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
    console.log(personsToSendAGift);
  }

  return (
    <div className="App">
      <h1>Weihnachts-Ideen</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newPerson">Add a new person</label>
        <input type="text" id="newPerson" name="newPerson" />
        <label htmlFor="newIdeas">Add your ideas</label>
        <input type="text" id="newIdeas" name="newIdeas" />
        <button>Submit</button>
      </form>
      {personsToSendAGift.map((person, index) => (
        <Card key={index} personToBeGifted={person} />
      ))}
    </div>
  );
}

export default App;
