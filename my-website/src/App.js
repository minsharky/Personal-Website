import './App.css';
import About from './components/about.js';
import Banner from './components/banner.js';
import Contact from './components/contact.js';
import Home from './components/home.js';
import Portfolio from './components/portfolio.js';
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Banner />
      <div class = "page">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
