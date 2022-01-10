import { useState } from 'react';

import Card from './components/Card';

function App() {
  const initialPersons = [
    { name: 'Mama', ideas: ['Mütze', 'Tasse'] },
    { name: 'Papa', ideas: ['Socken'] },
    { name: 'Schwester', ideas: ['Buch', 'Plätzchen'] },
  ];
  const [personsToSendAGift, setPersonsToSendAGift] = useState(initialPersons);

  return (
    <div className="App">
      <h1>Weihnachts-Ideen</h1>
      {personsToSendAGift.map((person, index) => (
        <Card key={index} personToBeGifted={person} />
      ))}
    </div>
  );
}

export default App;
