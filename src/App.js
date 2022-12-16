import React from 'react';
import Create from './components/create/Create';
import Read from './components/read/Read';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upgrade from './components/upgrade/Upgrade';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
					<Routes>
            <Route path="/" element={<Read />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/upgrade" element={<Upgrade/>}/>
					</Routes>
				</BrowserRouter>
    </div>
  );
}

export default App;
