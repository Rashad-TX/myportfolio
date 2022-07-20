import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from './components/Navigation';
import ProjectDisplay from './pages/ProjectDisplay';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Dashboard from './pages/dashboard';
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
