"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Crosshair, AlertTriangle } from "lucide-react";

export default function LogPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Mock simulation
        setTimeout(() => {
            setIsSubmitting(false);
            window.location.href = '/insights';
        }, 1500);
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-black text-white tracking-widest">LOG TARGET_</h1>
                <p className="text-slate-400 font-mono text-sm mt-1">SUBMIT REJECTION DATA FOR ANALYSIS.</p>
            </div>

            <div className="border border-slate-800 bg-slate-900/30 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500" />
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="type" className="text-slate-400 font-mono text-xs tracking-widest">CATEGORY</Label>
                        <select
                            id="type"
                            className="w-full bg-slate-950 border border-slate-800 text-white rounded-none h-12 px-3 focus:outline-none focus:border-cyan-500 font-mono text-sm"
                        >
                            <option value="social">SOCIAL / LIFESTYLE</option>
                            <option value="dating">DATING / ROMANCE</option>
                            <option value="business">BUSINESS / SALES</option>
                            <option value="career">CAREER / NETWORKING</option>
                        </select>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description" className="text-slate-400 font-mono text-xs tracking-widest">INCIDENT REPORT</Label>
                        <Textarea
                            id="description"
                            placeholder="Detail the interaction..."
                            className="bg-slate-950 border-slate-800 text-white rounded-none min-h-[120px] focus-visible:ring-1 focus-visible:ring-cyan-500 resize-none font-mono"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="anxietyBefore" className="text-slate-400 font-mono text-xs tracking-widest">PRE-INCIDENT ANXIETY (1-10)</Label>
                            <Input
                                id="anxietyBefore"
                                type="number"
                                min="1" max="10"
                                placeholder="0"
                                className="bg-slate-950 border-slate-800 text-center text-rose-500 font-black text-xl rounded-none h-16 focus-visible:ring-1 focus-visible:ring-cyan-500"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="anxietyAfter" className="text-slate-400 font-mono text-xs tracking-widest">POST-INCIDENT ANXIETY (1-10)</Label>
                            <Input
                                id="anxietyAfter"
                                type="number"
                                min="1" max="10"
                                placeholder="0"
                                className="bg-slate-950 border-slate-800 text-center text-emerald-500 font-black text-xl rounded-none h-16 focus-visible:ring-1 focus-visible:ring-cyan-500"
                                required
                            />
                        </div>
                    </div>

                    <div className="bg-rose-950/20 border border-rose-900/50 p-4 mt-8 flex items-start gap-4">
                        <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                        <div className="text-xs text-rose-200/70 font-mono leading-relaxed">
                            WARNING: Submitting this log will initiate AI psychological analysis. Ensure your report is honest. The system will detect evasion.
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 bg-cyan-500 hover:bg-cyan-400 text-black font-bold tracking-widest rounded-none mt-8 group transition-all"
                    >
                        {isSubmitting ? "TRANSMITTING..." : (
                            <span className="flex items-center gap-2">
                                <Crosshair className="w-4 h-4" /> TRANSMIT DATA <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
}
