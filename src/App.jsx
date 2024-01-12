import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Navbar';
import {Home, About,Contact,Projects} from './Pages'
const App=()=>{
    return(
        <main className="bg-black-300/20">
            <Router>
                <Navbar/>
                <Routes>
                   <Route path="/portfolio" element={<Home/>}/> 
                   <Route path="/portfolio/about" element={<About/>}/> 
                   <Route path="/portfolio/projects" element={<Projects/>}/> 
                   <Route path="/portfolio/contact" element={<Contact/>}/> 
                </Routes>
            </Router>
        </main>
    )
}
export default App;