import React, { useEffect } from 'react'

import './App.css';
import Photos from './components/Photos/Photos';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Add from './components/Add/Add';
import { useDispatch } from 'react-redux'
import { loadPhotos } from './store/features/Photos/PhotosSlice'
import Update from './components/Update/Update';
import Card from './components/Card/Card';
import Registration from './components/Registration/Registration';
import { loadUser } from './store/features/UserData/UserData';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadPhotos())
    dispatch(loadUser())
  }, [])
  return (
    <div className="App">
      <h2>
        <Link to='/Registration'> Registration </Link>
        <Link to='/add'> Add </Link>
        <Link to='/card'> Card </Link>
        <Link to='/'> Home </Link>
      </h2>
      <Routes>
        <Route path='/' element={<Photos />} />
        <Route path='/add' element={<Add />} />
        <Route path='/card' element={<Card />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='Registration' element={<Registration />} />
      </Routes> 
    
    </div>
  );
}

export default App;
