import React from "react";
import { motion } from "motion/react";
import { problemCards } from "../data";
import * as LucideIcons from "lucide-react";

export default function ProblemSection() {
  // Helper to fetch Lucide icons dynamically to keep types simple and direct
  const renderIcon = (name: string, className: string) => {
    const IconComponent = (LucideIcons as any)[name];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <LucideIcons.AlertTriangle className={className} />;
  };

  return (
    <section id="problem" className="relative py-24 bg-[#0d0620] overflow-hidden">
      {/* Background design glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#FF5DAA] opacity-5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#32145a] opacity-10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF5DAA] uppercase bg-[#FF5DAA]/10 border border-[#FF5DAA]/20 px-3.5 py-1.5 rounded-full">
            The Silent Epidemic
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Silent Mental Health Crisis
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            For centuries, emotional suffering in Southeast Asia has been buried under layers of isolation, critical shortages of medical experts, and lack of foundational health diagnostics.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {problemCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-[#1c0e3a]/65 to-[#110729]/80 border border-[#32145a]/55 hover:border-[#FF5DAA]/50 hover:shadow-[0_0_25px_rgba(255,93,170,0.1)] transition-all duration-300 group overflow-hidden"
            >
              {/* Top gradient glow overlay */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-br from-[#FF5DAA] to-[#32145a] opacity-10 blur-xl group-hover:scale-150 transition-transform" />
              
              {/* Icon & Metric Row */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 rounded-2xl bg-[#FF5DAA]/10 border border-[#FF5DAA]/20 text-[#FF5DAA] group-hover:scale-110 transition-transform">
                  {renderIcon(card.iconName, "w-6 h-6")}
                </div>
                {card.metric && (
                  <span className="text-xs font-mono font-bold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                    {card.metric}
                  </span>
                )}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF5DAA] transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Big Infographic Section */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1a0c3a]/75 to-[#0b0416] border border-[#32145a] p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Decorative Grid Line */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[linear-gradient(to_bottom,#7EF9FF11_1px,transparent_1px)] bg-[size:100%_1.5rem] opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Infographic Left text block */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold text-[#7EF9FF] tracking-wider uppercase">
                Bridging The Bridge
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Why Standard Solutions Fail
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Traditional psychiatric models insist on physical clinics and high-speed smartphone downloads. For the unreached multi-millions, this represents an insurmountable barrier.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-[#7EF9FF]/10 text-[#7EF9FF] mt-1">
                    <LucideIcons.CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Vastly Superior Accessibility Method</h5>
                    <p className="text-xs text-gray-400">Instantly triage through standard telecom landlines or dual-SIM feature phones.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-[#7EF9FF]/10 text-[#7EF9FF] mt-1">
                    <LucideIcons.CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">No-Stigma Anonymous Verification</h5>
                    <p className="text-xs text-gray-400">Users evaluate tension parameters from the absolute comfort of private voice calls.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Infographic Right stats presentation - Extremely high quality */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-6">
              
              {/* Treatment Gap big block */}
              <div className="sm:col-span-7 bg-[#140a2e]/90 rounded-2xl p-6 border border-[#32145a] flex flex-col justify-between shadow-lg relative group">
                <div className="absolute top-2 right-2 flex items-center justify-center text-xs font-mono font-bold text-[#FF5DAA] bg-[#FF5DAA]/10 px-2 py-0.5 rounded border border-[#FF5DAA]/20">
                  Critical Deficiency
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-widest mb-1">
                    ESTIMATED TREATMENT GAP
                  </span>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline gap-1.5 font-mono">
                    83%
                    <span className="text-lg text-[#FF5DAA] font-sans font-medium">Unreached</span>
                  </div>
                </div>
                
                {/* Custom animated custom bar visual */}
                <div className="mt-6">
                  <div className="flex justify-between text-[11px] text-gray-400 mb-1.5 font-mono">
                    <span>No Access to Diagnostic Clinical Care</span>
                    <span>83 Out of 100</span>
                  </div>
                  <div className="w-full h-2 bg-[#1c0e3a] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#FF5DAA] to-[#32145a] w-[83%]" />
                  </div>
                </div>
              </div>

              {/* Cellular reach positive advantage block */}
              <div className="sm:col-span-5 bg-[#140a2e]/90 rounded-2xl p-6 border border-[#32145a] flex flex-col justify-between shadow-lg relative group">
                <div className="absolute top-2 right-2 flex items-center justify-center text-xs font-mono font-bold text-[#7EF9FF] bg-[#7EF9FF]/10 px-2 py-0.5 rounded border border-[#7EF9FF]/20">
                  The Solution Loop
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-widest mb-1">
                    GSM VOICE PENETRATION
                  </span>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline gap-1 font-mono">
                    91%
                    <span className="text-lg text-[#7EF9FF] font-sans font-medium">Reach</span>
                  </div>
                </div>
                
                {/* Custom animated custom bar visual */}
                <div className="mt-6">
                  <div className="flex justify-between text-[11px] text-gray-400 mb-1.5 font-mono">
                    <span>Telephony network footprint</span>
                  </div>
                  <div className="w-full h-2 bg-[#1c0e3a] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#7EF9FF] to-[#32145a] w-[91%]" />
                  </div>
                </div>
              </div>

              {/* Explanatory full width subcard */}
              <div className="sm:col-span-12 bg-gradient-to-r from-[#32145a]/40 to-transparent p-5 rounded-2xl border border-[#32145a]/60 text-xs text-gray-400 flex items-center gap-4">
                <div className="p-3 bg-[#FFD76A]/10 text-[#FFD76A] rounded-xl border border-[#FFD76A]/20 shrink-0">
                  <LucideIcons.Sparkles className="w-4 h-4" />
                </div>
                <p>
                  <strong className="text-white">Our Strategic Leverage:</strong> By substituting complex visuals with lightweight telephone acoustic telemetry, we expand early diagnostics triage parameters to cover nearly every Indian citizen with a cellular network connection.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
