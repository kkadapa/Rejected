import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
    title: "Login | REJECTED™",
};

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Cyber-Grid Effect */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="absolute top-10 left-[-5%] z-0 text-[15vw] font-black text-cyan-950/10 whitespace-nowrap pointer-events-none select-none tracking-widest writing-vertical-rl">
                接続
            </div>

            <div className="z-10 w-full max-w-sm space-y-8">
                <div className="text-center">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-cyan-950/50 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                            <ShieldAlert className="w-6 h-6 text-cyan-500" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-black text-white tracking-widest">LOGIN_</h2>
                    <p className="mt-2 text-sm text-slate-400 font-mono">
                        ACCESS TERMINAL. ENTER CREDENTIALS.
                    </p>
                </div>

                <form className="mt-8 space-y-6">
                    <div className="space-y-4 rounded-md shadow-sm">
                        <div>
                            <Label htmlFor="email" className="sr-only">Email address</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-500 rounded-none h-12 shadow-none focus-visible:ring-1 focus-visible:ring-cyan-500"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <Label htmlFor="password" className="sr-only">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-500 rounded-none h-12 shadow-none focus-visible:ring-1 focus-visible:ring-cyan-500"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <Button
                            type="submit"
                            className="group relative flex w-full justify-center bg-cyan-500 hover:bg-cyan-400 text-black font-bold h-12 rounded-none transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10 tracking-widest">AUTHENTICATE</span>
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                        </Button>
                    </div>
                </form>

                <p className="text-center text-sm text-slate-400 font-mono mt-4">
                    NEW RECRUIT?{" "}
                    <Link href="/auth/register" className="font-semibold text-cyan-500 hover:text-cyan-400">
                        REGISTER HERE.
                    </Link>
                </p>
            </div>
        </div>
    );
}
