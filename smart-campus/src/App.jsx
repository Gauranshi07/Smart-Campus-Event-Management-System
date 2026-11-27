import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ClubsPage from './pages/ClubsPage'
import AuthPage from './pages/AuthPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clubs/:category" element={<ClubsPage />} />
      <Route path="/login" element={<AuthPage />} />
    </Routes>
  )
}

export default App