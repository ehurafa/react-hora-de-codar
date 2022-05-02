import { useState } from 'react' 

import './App.css'
import Salutation from './components/salutation';
import YourName from './components/YourName';

function App() {
  const [name, setName] = useState()

  const list = ['Angular', 'Vue', 'React']
  return (
    <div className="App">
      <h1>State Lift</h1>
      <YourName setName={setName} />
      <Salutation name={name} />
    </div>
  );
}

export default App;
