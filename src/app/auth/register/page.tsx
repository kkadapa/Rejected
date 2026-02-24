"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles } from "lucide-react";

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Cyber-Grid Effect */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="absolute top-10 right-[-5%] z-0 text-[15vw] font-black text-rose-950/10 whitespace-nowrap pointer-events-none select-none tracking-widest writing-vertical-rl">
                新しい
            </div>

            <div className="z-10 w-full max-w-sm space-y-8">
                <div className="text-center">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-rose-950/30 border border-rose-500/30 rounded-lg flex items-center justify-center">
                            <Sparkles className="w-6 h-6 text-rose-500" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-black text-white tracking-widest">INITIATE_</h2>
                    <p className="mt-2 text-sm text-slate-400 font-mono">
                        CREATE PROTOCOL PROFILE.
                    </p>
                </div>

                <form className="mt-8 space-y-6" action="/auth/login" method="POST" onSubmit={(e) => {
                    e.preventDefault();
                    // In a real app, you would call your API here.
                    // For the hackathon demo, we redirect to login.
                    window.location.href = '/auth/login';
                }}>
                    <div className="space-y-4 rounded-md shadow-sm">
                        <div>
                            <Label htmlFor="name" className="sr-only">Operative Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-500 rounded-none h-12 shadow-none focus-visible:ring-1 focus-visible:ring-rose-500"
                                placeholder="Operative Name"
                            />
                        </div>
                        <div>
                            <Label htmlFor="email" className="sr-only">Email address</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-500 rounded-none h-12 shadow-none focus-visible:ring-1 focus-visible:ring-rose-500"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <Label htmlFor="password" className="sr-only">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-500 rounded-none h-12 shadow-none focus-visible:ring-1 focus-visible:ring-rose-500"
                                placeholder="Secure Password"
                            />
                        </div>
                    </div>

                    <div>
                        <Button
                            type="submit"
                            className="group relative flex w-full justify-center bg-rose-600 hover:bg-rose-500 text-white font-bold h-12 rounded-none transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10 tracking-widest">INITIALIZE PROFILE</span>
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </Button>
                    </div>
                </form>

                <p className="text-center text-sm text-slate-400 font-mono mt-4">
                    ALREADY ACTIVE?{" "}
                    <Link href="/auth/login" className="font-semibold text-rose-500 hover:text-rose-400">
                        RETURN TO TERMINAL.
                    </Link>
                </p>
            </div>
        </div>
    );
}
