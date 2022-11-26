import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/ContactPage';
import Experience from './pages/ExperiencePage';
import LandingPage from './pages/LandingPage';
import Projects from './pages/ProjectPage';
import Service from './pages/ServicePage';
import SignIn from './pages/SignInPage';
import SignUp from './pages/SignUpPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Service />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;