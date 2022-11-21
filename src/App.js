import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import Service from './pages/Service';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='experience' element={<Experience />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
          <Route path='services' element={<Service />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;