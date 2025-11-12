import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Lock, Shield, Zap, Users, TrendingUp, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SmartLockCapital - Smart ETH Treasury Management",
  description: "Time-locked Ethereum vaults with smart contract security. Transparent and secure treasury management for the future of crypto.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-lg opacity-30" />
                <Lock className="h-8 w-8 text-blue-400 relative" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                SmartLockCapital
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm hover:text-blue-400 transition-colors font-medium text-slate-300">
                About
              </a>
              <a href="#works" className="text-sm hover:text-blue-400 transition-colors font-medium text-slate-300">
                How It Works
              </a>
              <a href="#security" className="text-sm hover:text-blue-400 transition-colors font-medium text-slate-300">
                Security
              </a>
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0">
                Launch App
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative px-4 py-24 md:py-32 overflow-hidden">
          {/* Background gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          </div>

          <div className="relative flex flex-col items-center text-center gap-8 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 font-medium">
              <Lock className="h-4 w-4" />
              Secure ETH Treasury Protocol
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
              Professional Treasury
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Management Protocol
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 text-pretty leading-relaxed max-w-3xl">
              Institutional-grade time-locked vaults with multi-signature security and transparent on-chain operations
              for DAOs and organizations
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 text-base px-8"
              >
                Start Locking →
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 hover:bg-slate-800 text-white text-base px-8 bg-transparent"
              >
                View Documentation
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-8 mt-12 w-full max-w-3xl">
              <div className="flex flex-col gap-2">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">$180M+</div>
                <div className="text-sm text-slate-500">Total Value Locked</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400">2,400+</div>
                <div className="text-sm text-slate-500">Active Vaults</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">100%</div>
                <div className="text-sm text-slate-500">Transparent</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="about" className="px-4 py-20">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Enterprise-Grade Treasury Features</h2>
              <p className="text-lg text-slate-400">
                Built for organizations that demand security, transparency, and professional-grade tooling
              </p>
            </div>

            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-slate-900/50 backdrop-blur border-slate-800 p-8 hover:border-blue-500/50 transition-all group">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Lock className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold">Time-Locked Vaults</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Set custom lock periods with automated release schedules and withdrawal controls
                  </p>
                </div>
              </Card>

              <Card className="bg-slate-900/50 backdrop-blur border-slate-800 p-8 hover:border-cyan-500/50 transition-all group">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Shield className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold">Multi-Sig Security</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Enterprise-grade multi-signature protection with customizable threshold requirements
                  </p>
                </div>
              </Card>

              <Card className="bg-slate-900/50 backdrop-blur border-slate-800 p-8 hover:border-blue-500/50 transition-all group">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <TrendingUp className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold">Yield Optimization</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Earn competitive yields through audited DeFi protocols while maintaining security
                  </p>
                </div>
              </Card>

              <Card className="bg-slate-900/50 backdrop-blur border-slate-800 p-8 hover:border-cyan-500/50 transition-all group">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Users className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold">DAO Governance</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Community-driven decision making with transparent on-chain voting mechanisms
                  </p>
                </div>
              </Card>

              <Card className="bg-slate-900/50 backdrop-blur border-slate-800 p-8 hover:border-blue-500/50 transition-all group">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <CheckCircle className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold">Full Audit Trail</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Complete transparency with every transaction recorded and verifiable on-chain
                  </p>
                </div>
              </Card>

              <Card className="bg-slate-900/50 backdrop-blur border-slate-800 p-8 hover:border-cyan-500/50 transition-all group">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold">Instant Operations</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Lightning-fast deployments and operations with optimized gas efficiency
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="works" className="px-4 py-20">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col items-center text-center gap-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Simple Three-Step Process</h2>
              <p className="text-lg text-slate-400 max-w-2xl">
                Get started with professional treasury management in minutes
              </p>
            </div>

            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <Card className="bg-slate-900/50 backdrop-blur border-slate-800 pt-20 p-8">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">Configure Vault</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Define your lock period, signers, and withdrawal rules. Customize every aspect to match your
                      organization's needs
                    </p>
                  </div>
                </Card>
              </div>

              <div className="relative">
                <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <Card className="bg-slate-900/50 backdrop-blur border-slate-800 pt-20 p-8">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">Deploy & Lock</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Deposit your ETH into the audited smart contract. Your treasury is instantly secured with
                      time-lock protection
                    </p>
                  </div>
                </Card>
              </div>

              <div className="relative">
                <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <Card className="bg-slate-900/50 backdrop-blur border-slate-800 pt-20 p-8">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">Monitor & Manage</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Track performance, execute governance, and watch your treasury grow with full transparency and
                      security
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950" />

          <div className="relative px-4">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col items-center text-center gap-4">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">Built on Uncompromising Security</h2>
                <p className="text-lg text-slate-400 max-w-2xl">
                  Industry-leading security practices protect your treasury at every level
                </p>
              </div>

              <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-6">
                <Card className="bg-slate-900/80 backdrop-blur border-slate-800 p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold">Audited Contracts</h3>
                      <p className="text-slate-400 leading-relaxed">
                        Independently audited by leading security firms with public reports and ongoing monitoring
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-slate-900/80 backdrop-blur border-slate-800 p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <Lock className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold">Battle-Tested Protocols</h3>
                      <p className="text-slate-400 leading-relaxed">
                        Built on proven smart contract patterns with millions in TVL and years of production use
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-slate-900/80 backdrop-blur border-slate-800 p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold">Real-Time Monitoring</h3>
                      <p className="text-slate-400 leading-relaxed">
                        24/7 automated monitoring with instant alerts for any suspicious activity or anomalies
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-slate-900/80 backdrop-blur border-slate-800 p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold">Community Verified</h3>
                      <p className="text-slate-400 leading-relaxed">
                        Open-source contracts reviewed by the community with transparent governance and upgrades
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-500/10 backdrop-blur border-blue-500/20 p-12 md:p-16">
            <div className="flex flex-col items-center text-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to Secure Your Treasury?</h2>
              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                Join leading DAOs and organizations managing over $180M in secure, time-locked vaults
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 text-base px-8"
                >
                  Launch Your Vault
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 hover:bg-slate-800 text-white text-base px-8 bg-transparent"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Lock className="h-6 w-6 text-blue-400" />
                <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  SmartLockCapital
                </span>
              </div>
              <p className="text-sm text-slate-500">Professional ETH treasury management for modern organizations</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-bold text-sm">Product</div>
              <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                Features
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                Pricing
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                Security
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                Audits
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-bold text-sm">Resources</div>
              <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                Documentation
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                API Reference
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                Guides
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                Blog
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-bold text-sm">Community</div>
              <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                Discord
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                GitHub
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                Forum
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-500">© 2025 SmartLockCapital. All rights reserved.</div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
