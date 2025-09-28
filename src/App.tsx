import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Privacy } from './pages/Privacy'
import { Confirmed } from './pages/Confirmed'

export default function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/confirmed" element={<Confirmed />} />
      </Routes>

    </>
  )
}


