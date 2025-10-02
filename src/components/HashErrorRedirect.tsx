'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function parseHashParams(hash: string): Record<string, string> {
  const trimmed = hash.startsWith('#') ? hash.slice(1) : hash
  const params = new URLSearchParams(trimmed)
  const result: Record<string, string> = {}
  params.forEach((value, key) => {
    result[key] = value
  })
  return result
}

export default function HashErrorRedirect() {
  const router = useRouter()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handle = () => {
      const params = parseHashParams(window.location.hash)
      const errorCode = params['error_code']
      if (errorCode === 'otp_expired') {
        // Clear the hash to avoid flashing and then navigate
        if (window.history && window.history.replaceState) {
          const url = window.location.pathname + window.location.search
          window.history.replaceState(null, '', url)
        }
        router.replace('/expired')
      }
    }

    // Run once on mount
    handle()
    // Also listen in case SPA navigation preserves hash
    window.addEventListener('hashchange', handle)
    return () => window.removeEventListener('hashchange', handle)
  }, [router])

  return null
}


