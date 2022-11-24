import React, {useState} from 'react'

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

  const[activeMenu,setActiveMenu] = useState("")

  return (
    <div className="App">
      <Router>
        <Header activeMenu={activeMenu} />
          <Routes>
            <Route exact path='/' element={<LandingPage setActiveMenu={setActiveMenu} />} />
            <Route path='/experience' element={<Experience setActiveMenu={setActiveMenu}/>} />
            <Route path='/projects' element={<Projects setActiveMenu={setActiveMenu}/>} />
            <Route path='/contact' element={<Contact setActiveMenu={setActiveMenu}/>} />
            <Route path='/services' element={<Service setActiveMenu={setActiveMenu}/>} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;