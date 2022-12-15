import React from 'react';
import { BrowserRouter, Routes, Route,   Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login/Login';
import { Main } from './components/Main/Main';
import { Profile } from './components/Profile/Profile';
import Table1 from './components/Tables/Table1';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/main' element={<Main/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/table1' element={<Table1/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
