import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, TrendingUp, Cpu, Activity } from "lucide-react";

export const metadata: Metadata = {
    title: "Dashboard | REJECTED™",
};

export default function DashboardPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-white tracking-widest">DASHBOARD_</h1>
                    <p className="text-slate-400 font-mono text-sm mt-1">SYSTEM OVERVIEW. LEVEL 2 STATUS.</p>
                </div>
                <div className="hidden md:flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs font-mono text-slate-400">SYNCED</span>
                </div>
            </div>

            {/* Primary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-slate-900/40 border-slate-800 rounded-none overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tr from-transparent to-cyan-500/10" />
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xs font-mono text-slate-400 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-cyan-500" /> TOTAL TARGETS
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-black text-white">12<span className="text-slate-600 text-lg">/100</span></div>
                        <p className="text-xs text-cyan-500 font-mono mt-2">+3 THIS WEEK</p>
                    </CardContent>
                </Card>

                <Card className="bg-slate-900/40 border-slate-800 rounded-none overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tr from-transparent to-rose-500/10" />
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xs font-mono text-slate-400 flex items-center gap-2">
                            <Activity className="w-4 h-4 text-rose-500" /> STREAK (DAYS)
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-black text-white">4</div>
                        <p className="text-xs text-rose-500 font-mono mt-2">ACTIVE</p>
                    </CardContent>
                </Card>

                <Card className="bg-slate-900/40 border-slate-800 rounded-none overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tr from-transparent to-emerald-500/10" />
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xs font-mono text-slate-400 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-emerald-500" /> COURAGE SCORE
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-black text-emerald-400">84.2</div>
                        <p className="text-xs text-emerald-500 font-mono mt-2">+2.4 VS LAST WEEK</p>
                    </CardContent>
                </Card>

                <Card className="bg-slate-900/40 border-slate-800 rounded-none overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tr from-transparent to-purple-500/10" />
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xs font-mono text-slate-400 flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-purple-500" /> ANXIETY REDUCTION
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-black text-purple-400">-4.1</div>
                        <p className="text-xs text-purple-500 font-mono mt-2">AVERAGE DELTA</p>
                    </CardContent>
                </Card>
            </div>

            {/* Progress Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 bg-[#0a0f18]/90 border-slate-800 rounded-none">
                    <CardHeader>
                        <CardTitle className="text-sm font-mono tracking-widest text-slate-300">COURAGE TREND OVERVIEW</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Placeholder for Recharts / Chart.js line chart */}
                        <div className="h-64 border border-slate-800 flex items-center justify-center bg-slate-900/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-30" />
                            <span className="text-xs text-slate-600 font-mono z-10">[ VISUALIZATION DATA NOT RENDERED ]</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-[#0a0f18]/90 border-slate-800 rounded-none">
                    <CardHeader>
                        <CardTitle className="text-sm font-mono tracking-widest text-slate-300">RECENT LOGS</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                            <div className="text-sm text-slate-300 truncate w-3/4">Asked for free coffee</div>
                            <div className="text-xs font-mono text-emerald-500">+8 PTS</div>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                            <div className="text-sm text-slate-300 truncate w-3/4">Networking cold email</div>
                            <div className="text-xs font-mono text-emerald-500">+12 PTS</div>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                            <div className="text-sm text-slate-300 truncate w-3/4">Pitched idea in meeting</div>
                            <div className="text-xs font-mono text-emerald-500">+15 PTS</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
