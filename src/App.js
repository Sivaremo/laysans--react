import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Elements/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './Elements/Footer';
import MetaTags from './Elements/MetaTags';
import Clients from './pages/Client';
import Careers from './pages/Careers';
function App() {
  return (
    <Router>
      <MetaTags/>
    <Navbar /> {/* Optional Navbar */}
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/client" element={<Clients />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </div>
    <Footer/>
  </Router>
  );
}

export default App;
