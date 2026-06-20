import React from "react";
import { motion } from "motion/react";
import { Heart, PhoneCall, Sparkles } from "lucide-react";

interface CallToActionProps {
  onOpenSupportModal: () => void;
}

export default function CallToAction({ onOpenSupportModal }: CallToActionProps) {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#0d0620] via-[#100727] to-[#140a2e] overflow-hidden border-t border-[#32145a]/30">
      
      {/* Background glow filters */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#32145a] opacity-35 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-[#7EF9FF] opacity-5 blur-[110px] pointer-events-none" />

      {/* Decorative vector waveform outline across background */}
      <div className="absolute inset-x-0 bottom-0 h-40 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,96 C120,64 240,32 360,48 C480,64 600,128 720,138.7 C840,149 960,107 1080,85.3 C1200,64 1320,64 1440,96 L1440,160 L0,160 Z" fill="#140a2e" stroke="#32145a" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
        
        {/* Futuristic glowing badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#7EF9FF]/10 to-[#FF5DAA]/10 border border-[#7EF9FF]/20 text-xs font-mono font-bold text-[#7EF9FF]">
          <Heart className="w-3.5 h-3.5 text-[#FF5DAA] animate-pulse" />
          The Grassroots Breakthrough
        </div>

        {/* Section Headline */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
          One Call <br className="sm:hidden" />
          Can <span className="bg-gradient-to-r from-[#7EF9FF] via-[#FFD76A] to-[#FF5DAA] bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(126,249,255,0.25)]">Save a Life</span>
        </h2>

        {/* Text paragraph */}
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Support mental health technology that reaches every village, every family, and every voice. Together, we can bypass the clinic deficit and establish an immediate, secure emotional safety net.
        </p>

        {/* Action button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenSupportModal}
            className="w-full sm:w-auto px-10 py-5 text-base font-bold text-[#140A2E] bg-gradient-to-r from-[#7EF9FF] via-[#FFD76A] to-[#FF5DAA] rounded-full hover:shadow-[0_0_30px_rgba(126,249,255,0.6)] transform hover:scale-[1.03] transition-all duration-300 shadow-xl"
          >
            Join Our Mission
          </button>
          
          <a
            href="#visual-demo"
            className="w-full sm:w-auto px-10 py-5 text-base font-bold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[#7EF9FF]" />
            Simulate Voice Analysis
          </a>
        </div>

        {/* Total stats readout under button */}
        <div className="pt-10 flex flex-wrap justify-center gap-x-12 gap-y-4 text-xs font-mono text-gray-500">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#7EF9FF]" />
            Open Source NGO Pilots
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFBB28]" />
            Subsidy Grants welcome
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF007A]" />
            Privacy Certified
          </div>
        </div>

      </div>
    </section>
  );
}
