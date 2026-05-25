"use client"

import React from "react"
import { ShieldAlert, RefreshCw } from "lucide-react"

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center relative overflow-hidden px-4 select-none">
      {/* Premium background grid and glowing orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,129,50,0.08)_0%,transparent_70%)] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f68132]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Decorative cybernetic lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white" />
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white" />
      </div>

      <div className="max-w-md w-full text-center relative z-10 space-y-8 px-6 py-12 rounded-2xl border border-white/5 bg-black/40 backdrop-blur-xl shadow-2xl">
        {/* Animated Brand / Logo representation */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-[#f68132] text-3xl font-extrabold tracking-tighter animate-pulse">///</span>
          <span className="text-white lowercase text-2xl font-bold tracking-tight">wissler</span>
        </div>

        {/* Icon container with subtle animation */}
        <div className="mx-auto w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-inner relative group">
          <div className="absolute inset-0 rounded-full bg-[#f68132]/10 blur-md opacity-70 animate-pulse" />
          <ShieldAlert className="w-10 h-10 text-[#f68132] relative z-10 animate-bounce" style={{ animationDuration: '3s' }} />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            System Maintenance <br /> by <strong className="text-[#f68132]">Orlins Ai technologies</strong>
          </h1>
          <p className="text-sm text-white/60 leading-relaxed">
            We are currently performing scheduled backend system upgrades and database optimizations to improve performance.
          </p>
        </div>

        <div className="h-[1px] w-full bg-white/10" />

        <div className="space-y-3 text-xs text-white/40">
          <p className="font-semibold uppercase tracking-[2px] text-[#f68132]">Notice for Administrators</p>
          <p className="leading-relaxed">
            If you are the platform administrator or system owner, please contact <strong>Orlins Ai technologies</strong> for support.
          </p>
        </div>

        {/* Action Button that simulates checking status */}
        <button
          onClick={() => window.location.reload()}
          className="w-full py-4 bg-white hover:bg-[#f68132] hover:text-black text-black font-bold uppercase tracking-[2px] text-xs rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#f68132]/20 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
          Check Status
        </button>
      </div>

      <div className="mt-8 text-[10px] text-white/30 tracking-[1px] uppercase font-bold relative z-10">
        &copy; Wissler Cargo. Systems Operations.
      </div>
    </div>
  )
}
