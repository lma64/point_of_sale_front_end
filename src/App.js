import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login/Login';
import { Main } from './components/Main/Main';
import { Profile } from './components/Profile/Profile';
import Table1 from './components/Tables/Table1';
import CreateItemComponent from './components/Inventory/CreateItemComponent';
import ListInventoryComponent from './components/Inventory/ListInventoryComponent';


function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/main' element={<Main/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route path='/table1' element={<Table1/>}/>
          <Route exact path='/inventory' element={<ListInventoryComponent/>}/>
          <Route exact path='/add-inventory' element={<CreateItemComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
