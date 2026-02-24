import Link from "next/link";
import { ShieldAlert, Crosshair, BarChart2, CheckSquare } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#030712] text-slate-300 flex">
            {/* Sidebar Navigation */}
            <aside className="w-64 border-r border-slate-800 bg-[#0a0f18]/90 backdrop-blur-md hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-cyan-500 transform rotate-45 flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-black transform -rotate-45" />
                        </div>
                        <span className="text-sm font-bold tracking-[0.2em] text-white">REJECTED</span>
                    </div>
                </div>

                <nav className="flex-1 py-6 px-4 space-y-2">
                    <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded hover:bg-slate-800/50 text-cyan-500 hover:text-cyan-400 transition-colors">
                        <BarChart2 className="w-4 h-4" /> DASHBOARD
                    </Link>
                    <Link href="/log" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded hover:bg-slate-800/50 text-slate-400 hover:text-slate-300 transition-colors">
                        <Crosshair className="w-4 h-4" /> LOG TARGET
                    </Link>
                    <Link href="/insights" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded hover:bg-slate-800/50 text-slate-400 hover:text-slate-300 transition-colors">
                        <CheckSquare className="w-4 h-4" /> INSIGHTS
                    </Link>
                    <Link href="/settings" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded hover:bg-slate-800/50 text-slate-400 hover:text-slate-300 transition-colors mt-8">
                        <ShieldAlert className="w-4 h-4" /> SETTINGS
                    </Link>
                </nav>

                <div className="p-4 border-t border-slate-800 font-mono text-xs text-slate-500">
                    OPERATIVE: MOCK_01
                    <br />STATUS: ONLINE
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-h-screen overflow-y-auto">
                <div className="md:hidden h-16 border-b border-slate-800 flex items-center px-4 bg-[#0a0f18]/90">
                    <span className="text-sm font-bold tracking-[0.2em] text-white">REJECTED_</span>
                </div>
                <div className="flex-1 p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
