import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateItemComponent from './components/Inventory/CreateItemComponent';
import ListInventoryComponent from './components/Inventory/ListInventoryComponent';
import UpdateProductComponent from './components/Inventory/UpdateProductComponent';


function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <Routes>
          <Route exact path='/' element={<ListInventoryComponent/>}/>
          <Route exact path='/add-inventory' element={<CreateItemComponent/>}/>
          <Route exact path='/update/:id' element={<UpdateProductComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
