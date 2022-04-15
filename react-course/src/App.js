import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'

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
      <HelloWorld />
    </div>
  );
}

export default App;
