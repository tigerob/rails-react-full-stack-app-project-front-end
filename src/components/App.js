import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Bookings from './Bookings';
import Contact from './Contact';
import LogIn from './LogIn';
import Navigation from './Navigation';
import Prices from './Prices';
import SignUp from './SignUp';
import PageNotFound from './PageNotFound';

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />  
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='bookings' element={<Bookings />} />
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<LogIn />} />
          <Route path='prices' element={<Prices />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
