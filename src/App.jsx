
import './App.css'
import Footer from './components/Footer'
import MiApi from './components/MiApi'
import NavBar from './components/NavBar'

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
