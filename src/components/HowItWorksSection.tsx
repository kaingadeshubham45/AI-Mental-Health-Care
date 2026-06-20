import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { timelineSteps } from "../data";
import { Phone, Activity, Heart, ChevronRight, Lock, BellRing } from "lucide-react";

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(1);

  // Helper to choose corresponding preview visual
  const renderStepVisual = (stepNum: number) => {
    switch (stepNum) {
      case 1:
        return (
          <motion.div
            key="step1-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full aspect-auto min-h-64 rounded-3xl bg-[#140a2e] border border-[#32145a] p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-gray-500 uppercase">Live Session stream</span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Active Handshake
              </span>
            </div>

            <div className="flex items-center justify-center py-6">
              <div className="relative">
                {/* Concentric expanding circles representing voice transmission */}
                <div className="absolute inset-0 rounded-full border border-[#7EF9FF]/20 animate-ping" style={{ animationDuration: "3s" }} />
                <div className="absolute -inset-4 rounded-full border border-[#7EF9FF]/10 animate-ping animate-delay-1000" style={{ animationDuration: "4s" }} />
                <div className="p-6 rounded-full bg-[#7EF9FF]/10 border border-[#7EF9FF]/30 text-[#7EF9FF] shadow-[0_0_20px_rgba(126,249,255,0.2)]">
                  <Phone className="w-10 h-10" />
                </div>
              </div>
            </div>

            <div className="text-center space-y-1 font-mono text-xs">
              <p className="text-white font-medium">GSM Cellular Triage Protocol</p>
              <div className="flex justify-center gap-4 text-[10px] text-gray-500">
                <span>Freq: 300 - 3400 Hz</span>
                <span>Latency: 45ms</span>
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full aspect-auto min-h-64 rounded-3xl bg-[#140a2e] border border-[#32145a] p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-gray-500 uppercase">Neural spectrogram FFT</span>
              <span className="text-[10px] font-mono text-[#FF5DAA]">ANALYZING...</span>
            </div>

            {/* Glowing Soundwave bars */}
            <div className="flex items-end justify-center gap-1 h-24 my-3 px-4">
              {[30, 80, 45, 60, 95, 25, 40, 75, 50, 90, 60, 40, 85, 30].map((val, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [`${val * 0.4}%`, `${val}%`, `${val * 0.4}%`] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.12 }}
                  className={`w-2.5 rounded-full ${i % 3 === 0 ? "bg-[#FF5DAA]" : i % 2 === 0 ? "bg-[#7EF9FF]" : "bg-[#FFD76A]"}`}
                />
              ))}
            </div>

            <div className="space-y-2 border-t border-[#32145a]/50 pt-3">
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-gray-400">Isolated Stress Harmonic:</span>
                <span className="text-white">v_coeff: 0.72 // High Amplitude</span>
              </div>
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-gray-400">Micro-Heasitancy Gap:</span>
                <span className="text-white">Confirmed (3 pauses &gt; 2.5s)</span>
              </div>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full aspect-auto min-h-64 rounded-3xl bg-[#140a2e] border border-[#32145a] p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-gray-500 uppercase">Failsafe Escalation Tunnel</span>
              <span className="flex items-center gap-1 text-[10px] font-mono text-red-400">
                <Lock className="w-3 h-3 text-red-400" />
                Secure SMS
              </span>
            </div>

            <div className="space-y-3.5 py-4 text-left font-sans">
              <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/20 flex gap-3">
                <div className="p-2 rounded-lg bg-red-500/10 text-red-400 self-start">
                  <BellRing className="w-4 h-4" />
                </div>
                <div>
                  <h6 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Critical Distress Triggered</h6>
                  <p className="text-[11px] text-gray-400 mt-0.5">Encrypting clinical routing to emergency crisis circle nodes...</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#7EF9FF]/5 border border-[#7EF9FF]/10 flex gap-3">
                <div className="p-2 rounded-lg bg-[#7EF9FF]/10 text-[#7EF9FF] self-start">
                  <Heart className="w-4 h-4 fill-current text-[#7EF9FF]" />
                </div>
                <div>
                  <h6 className="text-xs font-bold text-white font-mono uppercase">Local NGO Intercept Active</h6>
                  <p className="text-[11px] text-gray-400 mt-0.5">Immediate intervention specialists routed to patient's proximity grid.</p>
                </div>
              </div>
            </div>

            <div className="text-center text-[10px] font-mono text-gray-500">
              SHA-256 Encrypted Telemetry / Zero Retention
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  const getIcon = (name: string, isActive: boolean) => {
    const className = `w-6 h-6 transition-colors ${isActive ? "text-[#7EF9FF]" : "text-gray-400"}`;
    if (name === "Phone") return <Phone className={className} />;
    if (name === "Activity") return <Activity className={className} />;
    return <Heart className={className} />;
  };

  return (
    <section id="how-it-works" className="relative py-24 bg-[#0d0620] overflow-hidden">
      {/* Dynamic graphic particles */}
      <div className="absolute top-1/2 right-10 w-72 h-72 rounded-full bg-[#FFD76A] opacity-5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FFD76A] uppercase bg-[#FFD76A]/10 border border-[#FFD76A]/20 px-3.5 py-1.5 rounded-full">
            Triage Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Mental Call AI Works
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            A seamless, clinical three-step cycle engineered to detect distress and unlock professional help without needing a single app install.
          </p>
        </div>

        {/* Dynamic Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Timeline Left: 3-step navigation items */}
          <div className="lg:col-span-6 space-y-6">
            {timelineSteps.map((step) => {
              const isActive = activeStep === step.number;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(step.number)}
                  className={`w-full text-left p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex items-start gap-4 sm:gap-6 relative overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-br from-[#1c0e3a] to-[#140a2e] border-[#7EF9FF]/50 shadow-[0_0_20px_rgba(126,249,255,0.05)]"
                      : "bg-[#140a2e]/50 border-[#32145a] opacity-60 hover:opacity-100 hover:border-[#32145a]/80"
                  }`}
                >
                  {/* Active background subtle light strip */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#7EF9FF] to-[#FF5DAA]" />
                  )}

                  {/* Step Large Number indicator */}
                  <div className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl border text-base font-extrabold font-mono transition-all ${
                    isActive
                      ? "bg-[#7EF9FF]/10 text-[#7EF9FF] border-[#7EF9FF]/30 shadow-[0_0_12px_rgba(126,249,255,0.2)]"
                      : "bg-white/5 text-gray-500 border-white/10"
                  }`}>
                    0{step.number}
                  </div>

                  {/* Content details */}
                  <div className="space-y-2 flex-grow">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-white">
                        {step.title}
                      </h4>
                      {isActive && <ChevronRight className="w-4 h-4 text-[#7EF9FF]" />}
                    </div>
                    
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Expand details smoothly when active */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-xs text-gray-400 pt-2 leading-relaxed border-t border-[#32145a]/50 mt-2 font-sans overflow-hidden"
                        >
                          {step.details}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Tiny Lucide Icon graphic */}
                  <div className="shrink-0 pt-1">
                    {getIcon(step.iconName, isActive)}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Timeline Right: Interactive Telemetry visual mock */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-mono font-bold text-[#FF5DAA] mb-3 uppercase tracking-widest text-center lg:text-left block">
              Active Triage Engine Telemetry
            </span>
            
            <div className="relative p-2.5 rounded-[32px] bg-gradient-to-br from-[#32145a]/30 to-[#140a2e]/50 border border-[#32145a] shadow-2xl">
              <AnimatePresence mode="wait">
                {renderStepVisual(activeStep)}
              </AnimatePresence>
            </div>

            {/* Simulated progress indicator dots at the bottom */}
            <div className="flex justify-center gap-2 mt-6">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => setActiveStep(num)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeStep === num ? "w-8 bg-[#7EF9FF]" : "w-2 bg-gray-700 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to step ${num}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
