import React, {useReducer} from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './About';
import BookingForm from './BookingForm';
import Bookings from './Bookings';
import Contact from './Contact';
import LogIn from './LogIn';
import Navigation from './Navigation';
import Prices from './Prices';
import SignUp from './SignUp';
import PageNotFound from './PageNotFound';
import { reducer } from '../utils/reducer'
import { StateContext } from '../utils/stateContext';

const App = () => {

  const initialState = {
    loggedInUser: ""
  }

  const [store, dispatch] = useReducer(reducer, initialState)
  const {loggedInUser} = store


  return (
    <div>
      <StateContext.Provider value ={{store, dispatch}}>
        <Router>
          <Navigation />  
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='bookings'>
              <Route index element={<Bookings />} />
              <Route path='new' element={
                loggedInUser?
                  <BookingForm />
                  :
                  <Navigate to="/login" />
                } />
            </Route>
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<LogIn />} />
            <Route path='prices' element={<Prices />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Router>
      </StateContext.Provider>

    </div>
  );
}

export default App;
