// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignInForm from '../src/pages/auth/SignInForm'; 
import SignUpForm from '../src/pages/auth/SignUpForm';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Logout from './pages/auth/logout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/index.html' element={<Navigate to="/" />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/home' element={<Home />} />
        <Route path='/logout' element={<Logout />} />


        
      </Routes>
    </Router>
  );
}

export default App;
