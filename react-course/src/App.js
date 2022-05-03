import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/company" element={<Company />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
