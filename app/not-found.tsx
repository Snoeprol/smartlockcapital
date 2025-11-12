import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Lock } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | SmartLockCapital',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-lg opacity-30" />
            <Lock className="h-12 w-12 text-blue-400 relative" strokeWidth={2.5} />
          </div>
          <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            SmartLockCapital
          </span>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold">Page Not Found</h2>
          <p className="text-lg text-slate-400 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            It might have been deleted, or there could be a typo in the URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0">
            <Link href="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-slate-700 hover:bg-slate-800 text-white bg-transparent">
            <Link href="/#about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

