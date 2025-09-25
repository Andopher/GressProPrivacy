import React from 'react'
import { Link } from 'react-router-dom'

export function Home(): JSX.Element {
  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <img className="logo" src="/GressPro_transparent.png" alt="GressPro logo" style={{ filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.2))' }} />
          <p className="tagline">Progress tracking and body composition insights.</p>
          <p className="tagline" style={{ marginTop: 6 }}>IOS Release: September 2025</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 18, marginBottom: 18, flexWrap: 'wrap' }}>
            <Link to="/privacy" className="cta" style={{ minWidth: 200, textAlign: 'center' }}>Privacy Policy</Link>
            <button className="cta cta-outline" disabled style={{ minWidth: 200, textAlign: 'center' }}>
              Download — Coming Soon
            </button>
          </div>
        </div>
      </div>
      <div className="card" style={{ marginTop: 16 }}>
        <div className="policy">
          <h2>Built for Complete Progress Tracking</h2>
          <p>
            GressPro is the first app focused on your full journey — both physical and
            visual. Track your lifts, body composition, and how your physique changes
            over time with side-by-side visuals, scans, and progress logs.
          </p>
          <p>
            Our goal is to make progress obvious and motivating, combining strength
            metrics, photos, and composition insights in one place.
          </p>
        </div>
      </div>
      <footer>© {new Date().getFullYear()} GressPro. All rights reserved.</footer>
    </div>
  )
}


