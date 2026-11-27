
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Smart<span>Campus.</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/#events">Events</Link>

        <div className="nav-dropdown">
          <button className="nav-dropdown-btn">
            Clubs
            <ChevronDown size={14} strokeWidth={1.8} />
          </button>

          <div className="nav-dropdown-menu">
            <Link to="/clubs/technical">
              Technical Clubs
            </Link>

            <Link to="/clubs/non-technical">
              Non-Technical Clubs
            </Link>
          </div>
        </div>

        <a href="/#about">About</a>
      </div>

      <div className="nav-buttons">
        <Link
          to="/login"
          state={{ mode: 'login' }}
          className="login-btn"
        >
          Login
        </Link>

        <Link
          to="/login"
          state={{ mode: 'register' }}
          className="signup-btn"
        >
          Get Started
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
