import React from 'react'
import { Link } from 'react-router-dom'

export function Privacy(): JSX.Element {
  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <img className="logo" src="/GressPro_transparent.png" alt="GressPro logo" style={{ filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.2))' }} />
          <h1 style={{ marginBottom: 0 }}>Privacy Policy</h1>
          <p className="tagline">Your privacy matters to us.</p>
        </div>
        <div className="policy">
          <p>This app respects your privacy.</p>
          <h2>Information We Collect</h2>
          <p>We collect your email address for login, and user-generated content such as workout logs, body photos, and body fat scan results.</p>
          <h2>How We Use Information</h2>
          <p>This information is used only to provide app functionality (tracking progress, storing scans, and managing subscriptions).</p>
          <h2>Payments</h2>
          <p>All purchases are processed securely by Apple via the App Store. We do not collect or store payment information. See Apple’s <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>
          <h2>Data Sharing</h2>
          <p>We do not sell or share your data with third parties.</p>
          <h2>Contact & Support</h2>
          <p>For questions, support, or privacy concerns, contact us at <a href="mailto:andopherc@gmail.com">support@gresspro.org</a>.</p>
          <p><em>Effective Date: September 2025</em></p>
          <div style={{ marginTop: 16 }}>
            <Link to="/" className="cta">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}


