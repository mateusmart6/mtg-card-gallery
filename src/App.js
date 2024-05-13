import React from 'react';
import Search from './Search';
import Home from './Home';
import Start from './Start';
import About from './About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="startcreating" element={<Start />} />
          <Route exact path="aboutus" element={<About />} />
          {/* <Route path="signup" element={<SignUpModel />} />  (if needed) */}
        </Routes>
        <Search />  {/* Assuming you want the Search component to be rendered always */}
      </div>
    </BrowserRouter>
  );
}

export default App;