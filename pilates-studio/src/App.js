import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Classes from './pages/Classes';
import ClassDetail from './pages/ClassDetail';
import Contact from './pages/Contact';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header component for navigation */}
        <Header />

        {/* Main content area */}
        <main>
          <Routes>
            {/* Home page */}
            <Route path="/" element={<Home />} />
            
            {/* Classes page */}
            <Route path="/classes" element={<Classes />} />
            
            {/* Class detail page */}
            <Route path="/classes/:classId" element={<ClassDetail />} />
            
            {/* Contact page */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
