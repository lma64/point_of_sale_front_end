import React from 'react';
import Create from './components/create/Create';
import Read from './components/read/Read';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
					<Routes>
            <Route path="/" element={<Read />}/>
            <Route path="/create" element={<Create />}/>
					</Routes>
				</BrowserRouter>
    </div>
  );
}

export default App;
