import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinations from './pages/Destinations';

function LandingPage() {
  return (
    <>
      
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="destinations">
          <Destinations />
        </section>
        
      </main>
      
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
