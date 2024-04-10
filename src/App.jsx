
import './App.css'
import Buscador from './components/Buscador'
import Footer from './components/Footer'
import MiApi from './components/MiApi'
import NavBar from './components/NavBar'

import { useState } from 'react'

function App() {


  return (
    <>
      <div id="root">
        <div id="content">
          <NavBar />
          <MiApi />
        </div>
        <Footer />
    </div>
    </>
  )
}

export default App
