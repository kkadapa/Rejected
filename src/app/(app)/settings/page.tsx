import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Settings | REJECTED™",
};

export default function SettingsPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-black text-white tracking-widest">SYSTEM SETTINGS_</h1>
                <p className="text-slate-400 font-mono text-sm mt-1">ACCOUNT CONFIGURATION.</p>
            </div>

            <div className="space-y-6">
                <div className="border border-slate-800 bg-slate-900/30 p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Subscription Status</h2>
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                        <div>
                            <div className="text-sm font-bold text-white uppercase tracking-widest">FREE TIER</div>
                            <div className="text-xs text-slate-400 mt-1">10/10 LOGS REMAINING</div>
                        </div>
                        <Button className="bg-transparent border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black rounded-none h-8 px-4 text-xs font-bold tracking-widest">
                            UPGRADE
                        </Button>
                    </div>
                    <p className="text-xs text-slate-500 font-mono">
                        Pro unlocks infinite logs, advanced AI analytics, and streak recovery.
                    </p>
                </div>

                <div className="border border-slate-800 bg-slate-900/30 p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Profile</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="text-xs text-slate-500 font-mono mb-1 block">OPERATIVE EMAIL</label>
                            <div className="text-sm text-white bg-black border border-slate-800 px-3 py-2">
                                test@example.com
                            </div>
                        </div>
                        <Button variant="destructive" className="rounded-none w-full bg-rose-950/50 text-rose-500 border border-rose-900 hover:bg-rose-900 hover:text-white">
                            SIGN OUT
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
