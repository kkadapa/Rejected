import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] overflow-hidden font-sans">
      {/* Background Cyber-Grid Effect */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Subtle Japanese overlay text in the background */}
      <div className="absolute top-20 left-[-10%] z-0 text-[20vw] font-black text-cyan-950/20 whitespace-nowrap pointer-events-none select-none tracking-widest writing-vertical-rl">
        拒否
      </div>
      <div className="absolute bottom-10 right-[-10%] z-0 text-[15vw] font-black text-rose-950/20 whitespace-nowrap pointer-events-none select-none tracking-widest writing-vertical-rl">
        勇気
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8">

        {/* Navigation / Header */}
        <header className="flex justify-between items-center mb-24 relative">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded-sm flex items-center justify-center transform rotate-45">
              <div className="w-4 h-4 bg-black transform -rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-[0.2em] text-white">REJECTED<span className="text-cyan-500">_</span></span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium tracking-widest text-slate-400">
            <Link href="#method" className="hover:text-cyan-400 transition-colors">THE METHOD</Link>
            <Link href="#pricing" className="hover:text-cyan-400 transition-colors">PRICING</Link>
            <Link href="/auth/login" className="hover:text-cyan-400 transition-colors">LOGIN</Link>
          </div>
        </header>

        {/* Hero Section */}
        <div className="text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-mono tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              SYSTEM ACTIVE: COURAGE TRAINING
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6">
              COLLECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">100 REJECTIONS.</span> <br />
              KILL YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-600 border-b-4 border-rose-600">FEAR.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-400 max-w-xl font-light">
              Action absorbs anxiety. Avoidance creates it. A psychology-grounded exposure therapy system for men seeking to build unshakeable social resilience.
            </p>
            <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6">
              <Link href="/auth/register">
                <Button className="group relative h-14 rounded-none bg-cyan-500 hover:bg-cyan-400 text-black font-bold tracking-widest px-8 overflow-hidden transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    START PROTOCOL <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </Button>
              </Link>
              <Link href="/auth/login" className="text-sm font-semibold leading-6 text-white hover:text-cyan-400 transition-colors group">
                Access Terminal <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Graphical Element */}
          <div className="relative hidden md:block aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-rose-500/20 rounded-full blur-3xl opacity-50 mix-blend-screen" />
            <div className="relative w-full h-full border border-slate-800 bg-[#0a0f18]/80 backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute top-4 left-4 text-xs font-mono text-cyan-700">TARGET: 100</div>
              <div className="absolute top-4 right-4 text-xs font-mono text-cyan-700">STATUS: IN_PROGRESS</div>

              {/* Minimalist Tech UI graphic mock */}
              <div className="w-3/4 h-3/4 flex flex-col items-center justify-center gap-6">
                <div className="text-[6rem] font-bold text-white tracking-tighter leading-none"><span className="text-rose-500">/</span>30</div>
                <div className="w-full bg-slate-900 h-2 mt-4 overflow-hidden">
                  <div className="bg-cyan-500 w-[30%] h-full"></div>
                </div>
                <div className="flex gap-4 w-full">
                  <div className="flex-1 border-t border-slate-800 pt-2"><div className="text-xs text-slate-500 font-mono">COURAGE</div><div className="text-xl text-emerald-400">84.2</div></div>
                  <div className="flex-1 border-t border-slate-800 pt-2"><div className="text-xs text-slate-500 font-mono">ANXIETY_AVG</div><div className="text-xl text-rose-400">-4.1</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features / Method */}
        <div id="method" className="mt-40 grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-800/50 bg-slate-900/20 backdrop-blur-sm group hover:border-cyan-500/30 transition-colors">
            <ShieldAlert className="w-10 h-10 text-rose-500 mb-6" />
            <h3 className="text-xl font-bold text-white tracking-wider mb-2">SEEK REJECTION</h3>
            <p className="text-slate-400 font-light text-sm">Flip the script on failure. By making "no" the explicit goal, you systematically desensitize yourself to the sting of rejection.</p>
          </div>
          <div className="p-8 border border-slate-800/50 bg-slate-900/20 backdrop-blur-sm group hover:border-emerald-500/30 transition-colors">
            <Cpu className="w-10 h-10 text-emerald-500 mb-6" />
            <h3 className="text-xl font-bold text-white tracking-wider mb-2">AI REFLECTION</h3>
            <p className="text-slate-400 font-light text-sm">Log the event. Our AI-powered analysis reframes the experience positively, highlighting growth patterns and killing cognitive distortions.</p>
          </div>
          <div className="p-8 border border-slate-800/50 bg-slate-900/20 backdrop-blur-sm group hover:border-cyan-500/30 transition-colors">
            <Sparkles className="w-10 h-10 text-cyan-500 mb-6" />
            <h3 className="text-xl font-bold text-white tracking-wider mb-2">ABSORB COURAGE</h3>
            <p className="text-slate-400 font-light text-sm">Watch your anxiety shrink and your courage score surge over time. Level up from novice to unshakeable.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
