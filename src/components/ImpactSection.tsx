import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { mapRegions } from "../data";
import { ShieldCheck, Heart, MapPin, Activity, Radio, Users, CheckCircle } from "lucide-react";

export default function ImpactSection() {
  const [selectedRegionId, setSelectedRegionId] = useState("reg3"); // Southern region active by default

  const selectedRegion = mapRegions.find((r) => r.id === selectedRegionId) || mapRegions[2];

  // Map coordinate placement multipliers for the SVG bounding box
  // x: percentage width, y: percentage height
  return (
    <section id="impact" className="relative py-24 bg-[#0d0620]/95 overflow-hidden">
      {/* Background glow filters */}
      <div className="absolute top-[10%] right-[10%] w-[450px] h-[450px] rounded-full bg-[#140a2e] border border-[#7EF9FF]/20 opacity-20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-[#32145a] opacity-30 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7EF9FF] uppercase bg-[#7EF9FF]/10 border border-[#7EF9FF]/20 px-3.5 py-1.5 rounded-full">
            The Footprint of Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Making Mental Healthcare Accessible Everywhere
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Click on the interactive neural telemetry hubs to view how real-time acoustic screening is actively mitigating crisis metrics in rural districts.
          </p>
        </div>

        {/* Impact Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: Interactive India Constellation Map */}
          <div className="lg:col-span-7 bg-[#140a2e]/90 rounded-3xl border border-[#32145a] p-6 flex flex-col justify-between shadow-2xl relative min-h-[480px] overflow-hidden">
            
            {/* Corner Tech bracket elements */}
            <div className="absolute top-4 left-4 text-gray-600 font-mono text-[10px] tracking-wider uppercase flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-[#7EF9FF] animate-pulse" />
              SATELLITE TRIAGE RADIALS: ONLINE
            </div>

            {/* Glowing Map Coordinate Grid Stage */}
            <div className="w-full grow relative flex items-center justify-center min-h-[380px] my-6">
              
              {/* Stylized background outline representing India */}
              {/* Using a custom drawn procedural geographic dot matrix representing the Indian subcontinent shape */}
              <svg className="w-full h-full max-w-md opacity-35" viewBox="0 0 300 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Dotted geometric representation of India subcontinent boundaries */}
                <g stroke="#32145a" strokeWidth="1" strokeDasharray="3 3">
                  {/* Northern Region Outline */}
                  <path d="M 140 30 L 160 30 L 165 45 L 180 50 L 175 70 L 220 85 L 210 105 L 225 125 L 210 145 L 185 145 L 175 160 H 135 H 105 L 94 150 L 90 120 L 110 100 L 105 80 L 125 50 Z" />
                  {/* Central Loop */}
                  <path d="M 105 145 H 175 C 190 170, 220 180, 235 155 C 240 180, 260 170, 275 185 L 260 210 L 230 205 L 205 220 L 195 240 L 170 235 Z" fill="#32145a" fillOpacity="0.05" />
                  {/* Southern Triangle Outline */}
                  <path d="M 105 145 L 90 180 L 100 215 L 115 240 L 120 270 L 138 300 L 148 335 L 152 335 L 165 295 L 185 245 L 200 230 L 195 210 L 195 190 T 170 160 Z" />
                </g>

                {/* Laser connection lines from the active node to other active nodes to represent glowing connections */}
                {selectedRegion && (
                  <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} transition={{ duration: 0.6 }}>
                    {/* Render visual lines connecting all regions */}
                    <line x1="144" y1="187" x2="144" y2="126" stroke="#7EF9FF" strokeWidth="1.5" strokeDasharray="3 3" className="animate-pulse" />
                    <line x1="144" y1="187" x2="96" y2="208" stroke="#FF5DAA" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="144" y1="187" x2="126" y2="280" stroke="#FFD76A" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="144" y1="187" x2="216" y2="158" stroke="#7EF9FF" strokeWidth="1.5" strokeDasharray="3 3" />

                    {/* Central radar ring */}
                    <circle cx="144" cy="187" r="14" stroke="#7EF9FF" strokeWidth="1" className="animate-ping" style={{ animationDuration: "3s" }} />
                    <circle cx="144" cy="187" r="3" fill="#7EF9FF" />
                  </motion.g>
                )}
              </svg>

              {/* Pulsing Interative Node Marks overlaying the map using absolute values coordinate multipliers! */}
              {mapRegions.map((region) => {
                const isSelected = region.id === selectedRegionId;
                
                // Match coords to the SVG bounding scale roughly
                // Scale factor for parent is relative percentage
                return (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegionId(region.id)}
                    className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group/node focus:outline-none"
                    style={{ left: `${region.x}%`, top: `${region.y}%` }}
                  >
                    <span className="relative flex h-8 w-8 items-center justify-center">
                      {/* Interactive ring shadow hover or active */}
                      <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${
                        isSelected 
                          ? "bg-[#7EF9FF]" 
                          : region.status === "active" 
                          ? "bg-[#FF5DAA]/40" 
                          : "bg-[#FFD76A]/40"
                      }`} style={{ animationDuration: isSelected ? "1.8s" : "3s" }} />
                      
                      {/* Core node spot */}
                      <span className={`relative rounded-full h-4.5 w-4.5 border shadow border-white/20 transition-transform group-hover/node:scale-125 ${
                        isSelected 
                          ? "bg-[#7EF9FF] scale-110 shadow-[0_0_15px_#7EF9FF]" 
                          : region.status === "active" 
                          ? "bg-[#FF5DAA] shadow-[0_0_8px_#FF5DAA]" 
                          : "bg-[#FFD76A] shadow-[0_0_8px_#FFD76A]"
                      }`} />
                    </span>

                    {/* Highly aesthetic hover tooltip name tag */}
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-[#140A2E]/95 border border-white/10 px-2 py-1 rounded text-[10px] text-white font-mono opacity-0 scale-90 group-hover/node:opacity-100 group-hover/node:scale-100 transition-all pointer-events-none whitespace-nowrap z-20">
                      {region.name.split(" ")[0]} Hub {isSelected && "🎯"}
                    </span>
                  </button>
                );
              })}

            </div>

            {/* Bottom Color/Category legends */}
            <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400 pt-4 border-t border-[#32145a]/30">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7EF9FF]" />
                Selected Telemetry Focus
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5DAA]" />
                Fully Screened active grid
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFD76A]" />
                Pilot Deployment in monitoring
              </span>
            </div>

          </div>

          {/* Right panel: Live Telemetry reading metrics */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Main glassmorphism stats readout */}
            <div className="bg-gradient-to-br from-[#1c0e3a] to-[#110729] rounded-3xl border border-[#32145a] p-8 flex-grow flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              {/* Internal abstract map background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7EF9FF] opacity-[0.03] blur-3xl rounded-full" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedRegion.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 text-left"
                >
                  <div className="flex items-center justify-between border-b border-[#32145a]/40 pb-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-[#7EF9FF] tracking-widest uppercase">
                        Active Telemetry Node Map
                      </span>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#FF5DAA]" />
                        {selectedRegion.name}
                      </h3>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase ${
                      selectedRegion.status === "active"
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : "bg-[#FFD76A]/10 text-[#FFD76A] border border-[#FFD76A]/20"
                    }`}>
                      {selectedRegion.status}
                    </span>
                  </div>

                  {/* Highlighted core stats number */}
                  <div className="grid grid-cols-2 gap-4">
                    
                    <div className="bg-[#140a2e]/90 p-4 rounded-2xl border border-[#32145a]/80">
                      <span className="text-[10px] font-mono text-gray-500 block uppercase mb-1">
                        Early Interventions
                      </span>
                      <span className="text-2xl font-extrabold text-white tracking-tight font-mono flex items-center gap-1.5">
                        <Heart className="w-5 h-5 text-[#FF5DAA] fill-current" />
                        {selectedRegion.earlyInterventions.split(" ")[0]}
                      </span>
                      <span className="text-[9px] text-gray-500 block mt-1">Screenings flagged positive</span>
                    </div>

                    <div className="bg-[#140a2e]/90 p-4 rounded-2xl border border-[#32145a]/80">
                      <span className="text-[10px] font-mono text-gray-500 block uppercase mb-1">
                        Rural Coverage Peak
                      </span>
                      <span className="text-2xl font-extrabold text-[#7EF9FF] tracking-tight font-mono flex items-center gap-1.5">
                        <Activity className="w-5 h-5 text-[#7EF9FF]" />
                        {selectedRegion.coverage.split(" ")[0]}
                      </span>
                      <span className="text-[9px] text-gray-500 block mt-1">Footprint vs cellular capacity</span>
                    </div>

                  </div>

                  {/* Summary evaluation description */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wider">
                      Regional Impact Vector:
                    </span>
                    <p className="text-sm text-gray-300 leading-relaxed font-sans">
                      {selectedRegion.impactType}. Serving under-equipped physical infrastructure communities by establishing lightweight digital telephone soundwave screening nodes.
                    </p>
                  </div>

                  {/* Live coverage certification note */}
                  <div className="flex items-center gap-3 text-xs text-gray-400 pt-2 font-mono">
                    <ShieldCheck className="w-5 h-5 text-[#FFD76A] shrink-0" />
                    <span>Validated by regional public healthcare coordinators</span>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

            {/* Total Consolidation impact cards */}
            <div className="bg-[#140a2e] rounded-3xl border border-[#140a2e]/40 shadow-xl overflow-hidden p-6 grid grid-cols-3 gap-4 text-center border-t-2 border-t-[#7EF9FF]/40 bg-gradient-to-br from-[#1c0e3a]/50 to-[#110729]/70 border-x border-b border-[#32145a]">
              
              <div>
                <span className="text-[9px] font-mono text-gray-500 uppercase block mb-1">CUMULATIVE CARE REACH</span>
                <span className="text-xl font-black text-white font-mono">82,000+</span>
                <span className="text-[9px] text-gray-500 block">Villages</span>
              </div>

              <div className="border-x border-[#32145a]/60">
                <span className="text-[9px] font-mono text-gray-500 uppercase block mb-1">DIAGNOSTIC ENGAGEMENTS</span>
                <span className="text-xl font-black text-[#7EF9FF] font-mono">1.2M+</span>
                <span className="text-[9px] text-gray-500 block">Total Screenings</span>
              </div>

              <div>
                <span className="text-[9px] font-mono text-gray-500 uppercase block mb-1">EARLY SAVES ASSURED</span>
                <span className="text-xl font-black text-[#FF5DAA] font-mono">51,000+</span>
                <span className="text-[9px] text-gray-500 block">Severe Cases Resolved</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
