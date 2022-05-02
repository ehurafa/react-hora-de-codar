import './App.css'
import OtherList from './components/OtherList'

function App() {

  const list = ['Angular', 'Vue', 'React']
  return (
    <div className="App">
      <h1>Renderização de listas</h1>
      <OtherList itens={list} />
    </div>
  );
}

export default App;
