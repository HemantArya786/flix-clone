import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import Navbar from "./components/Navbar.jsx";

function App() {

  return (
      <div className='min-h-screen bg-black'>
        <Routes>
          <Route path="/" element={<><Navbar /><LandingPage /> <Footer /></>} />
          <Route path="/home" element={
            <div>
              <HomePage />
              <Footer />
            </div>
          } />
        </Routes>
      </div>
  )
}

export default App