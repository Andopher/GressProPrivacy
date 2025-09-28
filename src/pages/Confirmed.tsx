import React from 'react'
import { Link } from 'react-router-dom'

export function Confirmed(): JSX.Element {
  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <img className="logo" src="/GressPro_transparent.png" alt="GressPro logo" style={{ filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.2))' }} />
          <h1 style={{ marginBottom: 0 }}>Email Confirmed</h1>
          <p className="tagline">Thanks! Your email has been verified.</p>
          <Link to="/" className="cta" style={{ marginTop: 18, marginBottom: 18 }}>Back to Home</Link>
        </div>
      </div>
      <footer>© {new Date().getFullYear()} GressPro. All rights reserved.</footer>
    </div>
  )
}


