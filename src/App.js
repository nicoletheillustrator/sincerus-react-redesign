import React from "react";

import Navigation from "./components/navigation";
import {Routes, Route} from 'react-router-dom';
import DogPage from "./Pages/dogspage";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Navigation />
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/ourdogs'element={<DogPage />}></Route>
            
            
          </Routes>
     
      
    </div>
  );
}

export default App;
