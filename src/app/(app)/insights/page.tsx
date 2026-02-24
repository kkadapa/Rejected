import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, Fingerprint, Lock, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Insights | REJECTED™",
};

export default function InsightsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-black text-white tracking-widest flex items-center gap-3">
                    <BrainCircuit className="w-8 h-8 text-cyan-500" /> AI INSIGHTS_
                </h1>
                <p className="text-slate-400 font-mono text-sm mt-1">COGNITIVE ANALYSIS LOG.</p>
            </div>

            <div className="space-y-6">

                {/* Mock Insight Card 1 */}
                <div className="border border-slate-800 bg-[#0a0f18]/80 p-6 relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 relative z-10">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-cyan-400 border-cyan-800 rounded-none font-mono text-xs">BUSINESS</Badge>
                                <span className="text-slate-500 font-mono text-xs">2 HOURS AGO</span>
                            </div>
                            <h3 className="text-lg font-bold text-white">Cold Call Pitch Rejection</h3>
                            <p className="text-sm text-slate-400 mt-1 line-clamp-2 w-full md:w-3/4">
                                "I pitched the enterprise plan to a warm lead and they laughed and said we were too expensive."
                            </p>
                        </div>
                        <div className="flex items-center gap-4 bg-slate-900/50 border border-slate-800 p-2 shrink-0">
                            <div className="text-center">
                                <div className="text-[10px] text-slate-500 font-mono">COURAGE</div>
                                <div className="text-lg font-black text-emerald-400">+15</div>
                            </div>
                            <div className="w-px h-8 bg-slate-800" />
                            <div className="text-center">
                                <div className="text-[10px] text-slate-500 font-mono">ANXIETY</div>
                                <div className="text-lg text-rose-400 font-bold shrink">8 <ArrowRight className="inline w-3 h-3 text-slate-500" /> 5</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 bg-black/40 border border-slate-800/80 p-4 relative z-10">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Fingerprint className="w-4 h-4 text-cyan-500" />
                                <span className="text-xs font-mono text-slate-400">COGNITIVE DISTORTION DETECTED</span>
                            </div>
                            <p className="text-sm text-slate-300 font-light leading-relaxed">
                                Mind Reading: You assumed their laughter meant your product was worthless, rather than them lacking budget.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                <span className="text-xs font-mono text-slate-400">GROWTH REFRAME</span>
                            </div>
                            <p className="text-sm text-slate-300 font-light leading-relaxed">
                                A price objection is a buying signal. You successfully identified they are not the ideal customer profile right now. You survived a direct "no" without losing composure.
                            </p>
                        </div>
                    </div>

                    <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                        <Lock className="w-40 h-40" />
                    </div>
                </div>

                {/* Mock Insight Card 2 */}
                <div className="border border-slate-800 bg-[#0a0f18]/80 p-6 relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 relative z-10">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-rose-400 border-rose-800 rounded-none font-mono text-xs">SOCIAL</Badge>
                                <span className="text-slate-500 font-mono text-xs">YESTERDAY</span>
                            </div>
                            <h3 className="text-lg font-bold text-white">Left on read by group chat</h3>
                            <p className="text-sm text-slate-400 mt-1 line-clamp-2 w-full md:w-3/4">
                                "I invited everyone out for drinks and literally nobody replied."
                            </p>
                        </div>
                        <div className="flex items-center gap-4 bg-slate-900/50 border border-slate-800 p-2 shrink-0">
                            <div className="text-center">
                                <div className="text-[10px] text-slate-500 font-mono">COURAGE</div>
                                <div className="text-lg font-black text-emerald-400">+5</div>
                            </div>
                            <div className="w-px h-8 bg-slate-800" />
                            <div className="text-center">
                                <div className="text-[10px] text-slate-500 font-mono">ANXIETY</div>
                                <div className="text-lg text-rose-400 font-bold shrink">6 <ArrowRight className="inline w-3 h-3 text-slate-500" /> 6</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 bg-black/40 border border-slate-800/80 p-4 relative z-10">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Fingerprint className="w-4 h-4 text-cyan-500" />
                                <span className="text-xs font-mono text-slate-400">COGNITIVE DISTORTION DETECTED</span>
                            </div>
                            <p className="text-sm text-slate-300 font-light leading-relaxed">
                                Personalization: Assuming their silence is a direct reflection on your value as a friend.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                <span className="text-xs font-mono text-slate-400">GROWTH REFRAME</span>
                            </div>
                            <p className="text-sm text-slate-300 font-light leading-relaxed">
                                You took the initiative to organize. Leaders get ignored sometimes. Your self-worth does not depend on text message response rates.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
