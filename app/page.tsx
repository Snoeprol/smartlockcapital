'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Lock, Shield, Zap, Users, TrendingUp, CheckCircle, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleLaunchApp = () => {
    window.location.href = '/app'
  }

  const handleBeginAscension = () => {
    scrollToSection('about')
  }

  const handleExploreProtocol = () => {
    scrollToSection('works')
  }

  const handleLaunchVault = () => {
    window.location.href = '/app'
  }

  const handleScheduleDemo = () => {
    window.open('https://calendly.com/smartlockcapital/demo', '_blank')
  }

  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10" style={{ backgroundColor: '#000000' }}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="eth-logo-container relative w-12 h-12 flex items-center justify-center group" style={{ backgroundColor: '#000000', borderRadius: 0 }}>
                <div className="relative w-full h-full flex items-center justify-center overflow-visible" style={{ backgroundColor: '#000000', padding: 0, margin: 0, borderRadius: 0 }}>
                  <div style={{ backgroundColor: '#000000', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image 
                      src="/eth-logo.gif" 
                      alt="SmartLockCapital Logo" 
                      width={48} 
                      height={48}
                      className="object-contain"
                      style={{ backgroundColor: '#000000', display: 'block' }}
                      unoptimized
                      priority
                    />
                  </div>
                </div>
              </Link>
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                SmartLockCapital
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-cyan-300 transition-all font-medium text-white/70 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </button>
              <button onClick={() => scrollToSection('works')} className="text-sm hover:text-cyan-300 transition-all font-medium text-white/70 relative group">
                How It Works
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </button>
              <button onClick={() => scrollToSection('security')} className="text-sm hover:text-cyan-300 transition-all font-medium text-white/70 relative group">
                Security
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </button>
              <Button onClick={handleLaunchApp} className="bg-gradient-to-r from-cyan-500/90 to-blue-500/90 hover:from-cyan-400 hover:to-blue-400 text-white border-0 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all backdrop-blur-sm">
                Launch App
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section with ETH Logo */}
        <section className="relative px-4 py-32 md:py-40 overflow-hidden" style={{ backgroundColor: '#000000' }}>

          <div className="relative flex flex-col items-center text-center gap-12 max-w-6xl mx-auto">
            {/* ETH Logo Hero */}
            <div className="eth-logo-container relative mb-8" style={{ backgroundColor: '#000000' }}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mx-auto" style={{ backgroundColor: '#000000', padding: 0, margin: 0 }}>
                <Image 
                  src="/eth-logo.gif" 
                  alt="Ethereum Diamond" 
                  width={320} 
                  height={320}
                  className="w-full h-full object-contain animate-pulse-slow"
                  style={{ backgroundColor: '#000000' }}
                  unoptimized
                  priority
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-sm text-cyan-300 font-medium" style={{ backgroundColor: '#000000' }}>
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Next-Generation ETH Treasury Protocol</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(139,92,246,0.4)]">
                Divine Treasury
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(139,92,246,0.6)]">
                Management
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 text-pretty leading-relaxed max-w-3xl font-light">
              Transcendent time-locked vaults with crystalline security architecture. 
              <span className="text-cyan-300"> The new paradigm</span> for institutional ETH treasury management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                onClick={handleBeginAscension}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0 text-base px-10 py-6 shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:shadow-[0_0_60px_rgba(6,182,212,0.7)] transition-all backdrop-blur-sm"
              >
                Begin Ascension →
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleExploreProtocol}
                className="border-white/20 text-white text-base px-10 py-6 hover:border-cyan-400/50 transition-all"
                style={{ backgroundColor: '#000000' }}
              >
                Explore Protocol
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 mt-16 w-full max-w-4xl">
              <div className="flex flex-col gap-3 p-6 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all group" style={{ backgroundColor: '#000000' }}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">$180M+</div>
                <div className="text-sm text-white/60 font-medium">Total Value Locked</div>
              </div>
              <div className="flex flex-col gap-3 p-6 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all group" style={{ backgroundColor: '#000000' }}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">2,400+</div>
                <div className="text-sm text-white/60 font-medium">Active Vaults</div>
              </div>
              <div className="flex flex-col gap-3 p-6 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all group" style={{ backgroundColor: '#000000' }}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">100%</div>
                <div className="text-sm text-white/60 font-medium">Transparent</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid with Crystal Cards */}
        <section id="about" className="px-4 py-24 relative" style={{ backgroundColor: '#000000' }}>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Crystalline Architecture
              </h2>
              <p className="text-xl text-white/70 font-light">
                Forged with divine precision. Built for organizations that demand absolute perfection.
              </p>
            </div>

            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Lock, title: "Time-Locked Vaults", desc: "Immutable lock periods with crystalline security architecture", gradient: "from-cyan-500/20 to-blue-500/20" },
                { icon: Shield, title: "Multi-Sig Security", desc: "Divine-grade multi-signature protection with absolute precision", gradient: "from-purple-500/20 to-blue-500/20" },
                { icon: TrendingUp, title: "Yield Optimization", desc: "Transcendent yields through audited DeFi protocols", gradient: "from-cyan-500/20 to-purple-500/20" },
                { icon: Users, title: "DAO Governance", desc: "Crystalline decision-making with transparent on-chain voting", gradient: "from-blue-500/20 to-cyan-500/20" },
                { icon: CheckCircle, title: "Full Audit Trail", desc: "Absolute transparency with every transaction recorded", gradient: "from-purple-500/20 to-cyan-500/20" },
                { icon: Zap, title: "Instant Operations", desc: "Lightning-fast deployments with optimized efficiency", gradient: "from-cyan-500/20 to-blue-500/20" },
              ].map((feature, idx) => (
                <Card key={idx} className="group relative overflow-hidden border border-white/10 hover:border-cyan-400/30 p-8 transition-all duration-500" style={{ backgroundColor: '#000000' }}>
                  <div className="relative flex flex-col gap-5">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.3)]`}>
                      <feature.icon className="h-7 w-7 text-cyan-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed font-light">
                      {feature.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Crystal Steps */}
        <section id="works" className="px-4 py-24 relative" style={{ backgroundColor: '#000000' }}>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col items-center text-center gap-6">
              <h2 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                The Divine Process
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl">
                Three transcendent steps to absolute treasury perfection
              </p>
            </div>

            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "Configure Vault", desc: "Define your lock period, signers, and withdrawal rules with crystalline precision" },
                { num: "2", title: "Deploy & Lock", desc: "Deposit ETH into the audited contract. Instant divine protection activated" },
                { num: "3", title: "Monitor & Manage", desc: "Track performance with absolute transparency and crystalline clarity" },
              ].map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl font-bold text-white shadow-[0_0_30px_rgba(6,182,212,0.5)] z-10 group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  <Card className="border border-white/10 hover:border-cyan-400/30 pt-20 p-8 transition-all duration-500" style={{ backgroundColor: '#000000' }}>
                    <div className="flex flex-col gap-5">
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      <p className="text-white/70 leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section - Divine Protection */}
        <section id="security" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#000000' }}>

          <div className="relative px-4">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col items-center text-center gap-6">
                <h2 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                  Divine Protection
                </h2>
                <p className="text-xl text-white/70 font-light max-w-3xl">
                  Uncompromising security forged in the fires of perfection
                </p>
              </div>

              <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "Audited Contracts", desc: "Independently audited by leading security firms with divine precision" },
                  { icon: Lock, title: "Battle-Tested Protocols", desc: "Proven smart contract patterns with millions in TVL" },
                  { icon: Zap, title: "Real-Time Monitoring", desc: "24/7 automated monitoring with instant divine alerts" },
                  { icon: Users, title: "Community Verified", desc: "Open-source contracts reviewed by the divine community" },
                ].map((item, idx) => (
                  <Card key={idx} className="border border-white/10 hover:border-cyan-400/30 p-8 transition-all duration-500" style={{ backgroundColor: '#000000' }}>
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 border border-white/10">
                        <item.icon className="h-7 w-7 text-cyan-300" />
                      </div>
                      <div className="flex flex-col gap-3">
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        <p className="text-white/70 leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Divine Call */}
        <section className="px-4 py-24 max-w-5xl mx-auto" style={{ backgroundColor: '#000000' }}>
          <Card className="relative overflow-hidden border border-white/20 p-12 md:p-16" style={{ backgroundColor: '#000000' }}>
            <div className="relative flex flex-col items-center text-center gap-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.6)]">
                <Lock className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Ready for Divine Treasury?
              </h2>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed font-light">
                Join leading DAOs managing over $180M in transcendent, time-locked vaults
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handleLaunchVault}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0 text-base px-10 py-6 shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:shadow-[0_0_60px_rgba(6,182,212,0.7)] transition-all"
                >
                  Launch Your Vault
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleScheduleDemo}
                className="border-white/20 text-white text-base px-10 py-6 hover:border-cyan-400/50 transition-all"
                style={{ backgroundColor: '#000000' }}
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer - Crystal Base */}
      <footer className="relative border-t border-white/10" style={{ backgroundColor: '#000000' }}>
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="eth-logo-container relative w-10 h-10 flex items-center justify-center overflow-visible" style={{ backgroundColor: '#000000', padding: 0, margin: 0, borderRadius: 0 }}>
                  <div style={{ backgroundColor: '#000000', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image 
                      src="/eth-logo.gif" 
                      alt="Ethereum" 
                      width={40} 
                      height={40}
                      className="object-contain"
                      style={{ backgroundColor: '#000000', display: 'block' }}
                      unoptimized
                    />
                  </div>
                </div>
                <span className="font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent text-lg">
                  SmartLockCapital
                </span>
              </div>
              <p className="text-sm text-white/60 font-light">Divine ETH treasury management for transcendent organizations</p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Security", "Audits"] },
              { title: "Resources", links: ["Documentation", "API Reference", "Guides", "Blog"] },
              { title: "Community", links: ["Twitter", "Discord", "GitHub", "Forum"] },
            ].map((section, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <div className="font-bold text-sm text-white">{section.title}</div>
                {section.links.map((link, linkIdx) => (
                  <a key={linkIdx} href="#" className="text-sm text-white/60 hover:text-cyan-300 transition-colors font-light">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60 font-light">© 2025 SmartLockCapital. All rights reserved.</div>
            <div className="flex gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Security"].map((link, idx) => (
                <a key={idx} href="#" className="text-white/60 hover:text-cyan-300 transition-colors font-light">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
