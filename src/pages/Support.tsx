import React from 'react'
import { Link } from 'react-router-dom'

export default function Support(): JSX.Element {
  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <img className="logo" src="/GressPro_transparent.png" alt="GressPro logo" style={{ filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.2))' }} />
          <h1 style={{ marginBottom: 0 }}>Support</h1>
          <p className="tagline">We’re here to help.</p>
        </div>
        <div className="policy">
          <h2>Contact Us</h2>
          <p>For any questions, issues, or account problems, email us directly:</p>
          <p><a href="mailto:support@gresspro.org" className="cta">support@gresspro.org</a></p>
          <p>We aim to respond within 1–2 business days.</p>
          <div style={{ marginTop: 16 }}>
            <Link to="/" className="cta cta-outline">Back to Home</Link>
          </div>
        </div>
      </div>
      <footer>© {new Date().getFullYear()} GressPro. All rights reserved.</footer>
    </div>
  )
}


