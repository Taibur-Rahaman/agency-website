'use client'

// Redirect to /new as the main home page
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/new')
  }, [router])

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center">
      <div className="text-white">Redirecting...</div>
    </div>
  )
}

