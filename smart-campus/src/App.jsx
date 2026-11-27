import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ClubsPage from './pages/ClubsPage'
import AuthPage from './pages/AuthPage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clubs/:category" element={<ClubsPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>

    <Footer/>
    </>
  )
}

export default App