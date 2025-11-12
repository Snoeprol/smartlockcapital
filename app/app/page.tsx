'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"

export default function AppSignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in logic here
    console.log('Sign in:', { email, password })
  }

  return (
    <div className="min-h-screen text-white relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
      <div className="w-full max-w-md px-4">
        {/* ETH Logo */}
        <div className="flex justify-center mb-12">
          <div className="eth-logo-container relative w-48 h-48 md:w-64 md:h-64" style={{ backgroundColor: '#000000' }}>
            <Image 
              src="/eth-logo.gif" 
              alt="Ethereum Diamond" 
              width={256} 
              height={256}
              className="w-full h-full object-contain animate-pulse-slow"
              style={{ backgroundColor: '#000000' }}
              unoptimized
              priority
            />
          </div>
        </div>

        {/* Sign In Card */}
        <Card className="border border-white/10 p-8" style={{ backgroundColor: '#000000' }}>
          <div className="flex flex-col gap-6">
            <div className="text-center mb-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent mb-2">
                SmartLockCapital
              </h1>
              <p className="text-white/60 text-sm">Sign in to access your treasury</p>
            </div>

            <form onSubmit={handleSignIn} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-white/80">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-white/10 text-white placeholder:text-white/40 focus:border-cyan-400/50"
                  style={{ backgroundColor: '#000000' }}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="password" className="text-white/80">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-white/10 text-white placeholder:text-white/40 focus:border-cyan-400/50"
                  style={{ backgroundColor: '#000000' }}
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-black text-cyan-500 focus:ring-cyan-500" />
                  <span className="text-white/60">Remember me</span>
                </label>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0 mt-2 shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:shadow-[0_0_60px_rgba(6,182,212,0.7)] transition-all"
              >
                Sign In
              </Button>
            </form>

            <div className="text-center text-sm text-white/60 mt-4">
              Don't have an account?{' '}
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Sign up
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

