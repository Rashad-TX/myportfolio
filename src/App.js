import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import { HashLink } from 'react-router-hash-link';
import Dashboard from './pages/dashbaord';
function App() {
  return (
    <div className="App">
    <Router>
  <Navigation/>
  <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact  path="/project/:id" element={<ProjectDisplay/>} />
  </Routes>    
<Footer/>
  </Router>
    </div>
  );
}

export default App;
