import React,{Suspense, lazy} from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
// import Contact from './pages/ContactPage';
// import Experience from './pages/ExperiencePage';
// import LandingPage from './pages/LandingPage';
// import Projects from './pages/ProjectPage';
// import Service from './pages/ServicePage';
// import SignIn from './pages/SignInPage';
// import SignUp from './pages/SignUpPage';

// code splitting...lazy loading for routers
const LandingPage = lazy(() => import('./pages/LandingPage'));
const Contact = lazy(() => import('./pages/ContactPage'));
const Experience = lazy(() => import('./pages/ExperiencePage'));
const Projects = lazy(() => import('./pages/ProjectPage'));
const Service = lazy(() => import('./pages/ServicePage'));
const SignIn = lazy(() => import('./pages/SignInPage'));
const SignUp = lazy(() => import('./pages/SignUpPage'));


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route exact path='/' element={
              <Suspense fallback={<div>Loading...</div>}>
                <LandingPage />
              </Suspense>
              } 
            />
            <Route path='/experience' element={
              <Suspense fallback={<div>Loading...</div>}>
                <Experience />
              </Suspense>
              } 
            />
            <Route path='/projects' element={
              <Suspense fallback={<div>Loading...</div>}>
                <Projects />
              </Suspense>
              } 
            />
            <Route path='/contact' element={
              <Suspense fallback={<div>Loading...</div>}>
                <Contact />
              </Suspense>
              }
            />
            <Route path='/services' element={
              <Suspense fallback={<div>Loading...</div>}>
                <Service />
              </Suspense>
              } 
            />
            <Route path='/signin' element={
              <Suspense fallback={<div>Loading...</div>}>
                <SignIn />
              </Suspense>
              } 
            />
            <Route path='/signup' element={
              <Suspense fallback={<div>Loading...</div>}>
                <SignUp />
              </Suspense>
              } 
            />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;