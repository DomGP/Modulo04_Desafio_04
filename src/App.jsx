import './App.css'

import MiApi from './components/MiApi'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div id="root">
        <div id="content">
          <NavBar 
            navBarTitle = 'POKEAPI'/>
          <MiApi />
        </div>
        <Footer 
          footerText = '© 2024 PokeApi'/>
    </div>
    </>
  )
}

export default App
