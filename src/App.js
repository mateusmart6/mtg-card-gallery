
import React from 'react';
import Search from './Search';
import './App.css';

return <BrowserRouter>
<div className="App">
<Routes>
     
    <Route exact path="/" element={ <Home /> } />
    <Route exact path="startcreating" element={ <Start /> } />
    <Route exact path="aboutus" element={ <About /> } />
    {/* <Route path="signup" element={ <SignUpModel /> } /> */}
</Routes> 
</div>
</BrowserRouter>;

export default App;