import './App.css';
import Header from './Components/Header';
import Pow from './Components/Pow';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skills from './Components/Skills'
import Connect from './Components/Connect';
//import {useState} from "react";

function App() {

  return (

    <Router>

      <div className="background" style={{
        backgroundImage: `url("/Images/image.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
        touchAction: "none"
      }} >

        <Header />
        <Routes>
          <Route exact path='/' element={<Pow />} />
        </Routes>
        <Routes>
          <Route exact path='/skills' element={<Skills />} />
        </Routes>
        <Routes>
          <Route exact path='/connect' element={<Connect />} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;
