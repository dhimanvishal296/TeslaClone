import React from 'react';
import {Routes , Route} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ModelS from './components/ModelS';
import Model3 from './components/Model3';
import ModelX from './components/ModelX';



function App() {
  return (
    <Routes>
      <Route path='/' element={<> <div className="App"><Header/><Home/> </div></> } />
      <Route path='/ModelS' element={<ModelS/>} />
      <Route path='/Model3' element={<Model3/>} />
      <Route path='/ModelX' element={<ModelX/>} />

     </Routes>
   
  
  );
}

export default App;


    
   

