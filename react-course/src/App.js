import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import People from './components/People'
import Phrase from './components/Phrase'
import List from './components/List'
import Event from './components/Event'
import Form from './components/Form'

function App() {
  const name = 'Rafa'

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando o JXS</h2>
      <p>Olá, {name}</p>
      <p>soma: {sum(3,3)}</p>
      <img src={url} />
      <SayMyName name="Rafa" />
      <SayMyName name="José" />
      <People name="Will" age="7" occupation="Estudante" photo="https://via.placeholder.com/150" />
      <Phrase />
      <List />
      <Event number="2" />
      <Form />
    </div>
  );
}

export default App;
