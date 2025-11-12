'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-xl blur-md group-hover:blur-lg transition-all" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative w-10 h-10 z-10">
          <Image 
            src="/eth-logo.gif" 
            alt="SmartLockCapital Logo" 
            width={40} 
            height={40}
            className="object-contain drop-shadow-[0_0_20px_rgba(139,92,246,0.5)] group-hover:drop-shadow-[0_0_30px_rgba(139,92,246,0.8)] transition-all"
            unoptimized
            priority
          />
        </div>
      </div>
      <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.3)] group-hover:drop-shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all">
        SmartLockCapital
      </span>
    </Link>
  )
}

