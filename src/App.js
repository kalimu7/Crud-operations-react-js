import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Create from './Components/create';
import Read from './Components/read';
import  {Route,BrowserRouter as Router, BrowserRouter, Routes} from 'react-router-dom';
import styled from 'styled-components';
import Delete from './Components/Delete';
import Update from './Components/Update';
const Headertext = styled.h1`
  text-align: center;
`
function App() {
 

  
    
  return (
    <>
    <Headertext>REACT CRUD OPERATION</Headertext>
    <BrowserRouter>
      <Routes>
      <Route exact path='/create' element={<Create/>}/>
      <Route exact path='/'   element={<Read />} />
      <Route exact path='/update'   element={<Update />} />
      <Route exact path='/delete'   element={<Delete />} />
      </Routes>

     </BrowserRouter>
    </>
    
  );
}

export default App;
