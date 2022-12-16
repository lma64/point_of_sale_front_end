import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateItemComponent from './components/Inventory/CreateItemComponent';
import ListInventoryComponent from './components/Inventory/ListInventoryComponent';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' element={<ListInventoryComponent/>}/>
          <Route exact path='/add-inventory/:id' element={<CreateItemComponent/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
