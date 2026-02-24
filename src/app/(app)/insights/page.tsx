"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, Fingerprint, Lock, ShieldCheck, ArrowRight } from "lucide-react";

interface LogEntry {
    emotional_analysis: string;
    what_went_well: string;
    courage_score: number;
    growth_reframe: string;
    suggested_next_action: string;
    confidence_trend_prediction: string;
    original_description: string;
    original_type: string;
    original_anxiety_before: number;
    original_anxiety_after: number;
    timestamp?: string;
}

export default function InsightsPage() {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const storedLogs = localStorage.getItem('rejected_logs');
        if (storedLogs) {
            try {
                const parsedLogs = JSON.parse(storedLogs);
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setLogs(parsedLogs);
            } catch (error: unknown) {
                console.error("Failed to parse logs", error);
            }
        }
        setMounted(true);
    }, []);

    // Helper to format time ago
    const timeAgo = (dateStr: string) => {
        const date = new Date(dateStr);
        const now = new Date();
        const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        if (seconds < 60) return 'JUST NOW';
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes} MIN AGO`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours} HOURS AGO`;
        const days = Math.floor(hours / 24);
        return `${days} DAYS AGO`;
    };

    if (!mounted) return null;

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-black text-white tracking-widest flex items-center gap-3">
                    <BrainCircuit className="w-8 h-8 text-cyan-500" /> AI INSIGHTS_
                </h1>
                <p className="text-slate-400 font-mono text-sm mt-1">COGNITIVE ANALYSIS LOG.</p>
            </div>

            <div className="space-y-6">
                {/* Render Dynamic Logs */}
                {logs.length > 0 ? (
                    logs.map((log, index) => (
                        <div key={index} className="border border-slate-800 bg-[#0a0f18]/80 p-6 relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 relative z-10">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge variant="outline" className={`border rounded-none font-mono text-xs ${log.original_type === 'social' ? 'text-rose-400 border-rose-800' :
                                            log.original_type === 'business' ? 'text-cyan-400 border-cyan-800' :
                                                log.original_type === 'dating' ? 'text-purple-400 border-purple-800' :
                                                    'text-emerald-400 border-emerald-800'
                                            }`}>
                                            {log.original_type?.toUpperCase() || 'UNKNOWN'}
                                        </Badge>
                                        <span className="text-slate-500 font-mono text-xs">{log.timestamp ? timeAgo(log.timestamp) : 'JUST NOW'}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white capitalize">{log.original_type} Rejection</h3>
                                    <p className="text-sm text-slate-400 mt-1 line-clamp-2 w-full md:w-3/4">
                                        &quot;{log.original_description}&quot;
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 bg-slate-900/50 border border-slate-800 p-2 shrink-0">
                                    <div className="text-center">
                                        <div className="text-[10px] text-slate-500 font-mono">COURAGE</div>
                                        <div className="text-lg font-black text-emerald-400">+{log.courage_score || 5}</div>
                                    </div>
                                    <div className="w-px h-8 bg-slate-800" />
                                    <div className="text-center">
                                        <div className="text-[10px] text-slate-500 font-mono">ANXIETY</div>
                                        <div className="text-lg font-bold shrink text-slate-300">
                                            {log.original_anxiety_before || 0} <ArrowRight className="inline w-3 h-3 text-emerald-500" /> <span className="text-emerald-500">{log.original_anxiety_after || 0}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 bg-black/40 border border-slate-800/80 p-4 relative z-10">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Fingerprint className="w-4 h-4 text-cyan-500" />
                                        <span className="text-xs font-mono text-slate-400">EMOTIONAL ANALYSIS</span>
                                    </div>
                                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                                        {log.emotional_analysis}
                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                        <span className="text-xs font-mono text-slate-400">GROWTH REFRAME</span>
                                    </div>
                                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                                        {log.growth_reframe}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center p-12 border border-slate-800 border-dashed rounded-lg bg-slate-900/20">
                        <Lock className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-slate-300 mb-2">NO DATA LOGGED</h3>
                        <p className="text-slate-500 text-sm font-light">Submit your first rejection in the Log Terminal to generate AI insights.</p>
                    </div>
                )}

            </div>
        </div>
    );
}
