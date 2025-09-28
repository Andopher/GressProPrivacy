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
          <p><strong>Email address:</strong> Used for login and account management.</p>
          <p><strong>Workout logs and fitness data:</strong> Includes exercises, sets, reps, and progress notes.</p>
          <p><strong>Body photos and body fat scans:</strong> Used to help track progress visually and with AI-powered body composition estimates.</p>
          <p><strong>App usage data:</strong> Basic information on how you interact with the app (such as log frequency) to maintain functionality.</p>
          <p><strong>Purchase history:</strong> Not applicable at this time. We do not offer purchases or subscriptions.</p>

          <h2>How We Use Information</h2>
          <p>We use this information only to provide app functionality: tracking progress, generating metrics, and storing scans securely. Your data is never used for advertising.</p>

          <h2>Payments</h2>
          <p>We do not currently process payments or offer subscriptions. If payments are introduced in the future, they will be processed securely by Apple via the App Store. We will not collect or store payment details. Please refer to Apple’s <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a> for payment information.</p>

          <h2>Data Sharing</h2>
          <p>We do not sell, rent, or share your data with third parties. Data remains tied to your account and is only accessible to you when signed in.</p>

          <h2>Data Security</h2>
          <p>User content (including photos and scans) is stored securely on our servers. Data is encrypted in transit and stored only for the purpose of displaying progress to the logged-in user.</p>

          <h2>Contact & Support</h2>
          <p>For questions, support, or privacy concerns, contact us at <a href="mailto:support@gresspro.org">support@gresspro.org</a>.</p>

          <p><em>Effective Date: September 2025</em></p>
          <div style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/support" className="cta">Get Support</Link>
            <Link to="/" className="cta cta-outline">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}


