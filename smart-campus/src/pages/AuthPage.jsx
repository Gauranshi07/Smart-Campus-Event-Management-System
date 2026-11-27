
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Eye, EyeOff, Sparkles, X } from 'lucide-react'
import './AuthPage.css'

function AuthPage() {
  const [showPassword, setShowPassword] = useState(false)
  const location = useLocation()

  const [isLogin, setIsLogin] = useState(
    location.state?.mode !== 'register'
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    // Authentication will be connected with backend later
  }

  return (
    <div className="auth-page">
        <Link to="/" className="auth-home-close" aria-label="Go to homepage">
            <X size={18} />
        </Link>
      <div className="auth-left">
        

        <div className="auth-brand">
        <div>
          Smart<span>Campus.</span>
        </div>
        <small>ABESEC Ghaziabad</small>
      </div>

        <div className="auth-content">
          <span className="auth-label">
            <Sparkles size={14} />
            YOUR CAMPUS, YOUR COMMUNITY
          </span>

          <h1>
            Make every campus
            <span> moment count.</span>
          </h1>

          <p>
            Discover events, explore clubs and connect
            with a community that makes your college
            journey more exciting.
          </p>
        </div>

        <div className="auth-footer">
          © 2026 SmartCampus. All rights reserved.
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-container">

          <div className="auth-tabs">
            <button
              className={isLogin ? 'active' : ''}
              onClick={() => {
                setIsLogin(true)
                setShowPassword(false)
              }}
            >
              Login
            </button>

            <button
              className={!isLogin ? 'active' : ''}
              onClick={() => {
                setIsLogin(false)
                setShowPassword(false)
              }}
            >
              Register
            </button>
          </div>

          <div className="auth-heading">
            <span className="auth-label">
              {isLogin ? 'WELCOME BACK' : 'GET STARTED'}
            </span>

            <h2>
              {isLogin ? 'Welcome back!' : 'Create your account'}
            </h2>

            <p>
              {isLogin
                ? 'Sign in to continue your campus journey.'
                : 'Join your campus community today.'}
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {!isLogin && (
              <div className="auth-field">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            <div className="auth-field">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="auth-field">
              <label>Password</label>

              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword
                    ? <EyeOff size={18} />
                    : <Eye size={18} />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="auth-field">
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            {isLogin && (
              <div className="auth-options">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>

                <button type="button" className="forgot-btn">
                  Forgot password?
                </button>
              </div>
            )}

            <button type="submit" className="auth-submit">
              {isLogin ? 'Login to Account' : 'Create Account'}
            </button>

          </form>

          <p className="auth-switch">
            {isLogin
              ? "Don't have an account?"
              : 'Already have an account?'}

            <button
              onClick={() => {
                setIsLogin(!isLogin)
                setShowPassword(false)
              }}
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>

        </div>
      </div>

    </div>
  )
}

export default AuthPage
