'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Lock } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 blur-lg opacity-30" />
            <Lock className="h-12 w-12 text-red-400 relative" strokeWidth={2.5} />
          </div>
          <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            SmartLockCapital
          </span>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            Error
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold">Something went wrong!</h2>
          <p className="text-lg text-slate-400 max-w-md mx-auto">
            An unexpected error occurred. Please try again or return to the home page.
          </p>
          {error.digest && (
            <p className="text-sm text-slate-500 mt-2">Error ID: {error.digest}</p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button 
            onClick={reset}
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0"
          >
            Try Again
          </Button>
          <Button asChild variant="outline" className="border-slate-700 hover:bg-slate-800 text-white bg-transparent">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

