import React from "react";
import { motion } from "motion/react";
import { featuresList } from "../data";
import { Mic, Cpu, Smartphone, ShieldCheck, BellRing, Sparkles } from "lucide-react";

export default function FeaturesSection() {
  // Helper to map icon names to Lucide elements safely
  const renderIcon = (name: string, color: string) => {
    const iconProps = { className: "w-6 h-6" };
    
    // Choose color-specific tailwind text style
    const colorClass = 
      color === "cyan" 
        ? "text-[#7EF9FF]" 
        : color === "pink" 
        ? "text-[#FF5DAA]" 
        : "text-[#FFD76A]";

    const wrapperProps = { className: `p-3.5 rounded-2xl bg-white/5 border border-white/10 ${colorClass}` };
    
    switch (name) {
      case "Mic":
        return <div {...wrapperProps}><Mic {...iconProps} /></div>;
      case "Cpu":
        return <div {...wrapperProps}><Cpu {...iconProps} /></div>;
      case "Smartphone":
        return <div {...wrapperProps}><Smartphone {...iconProps} /></div>;
      case "ShieldCheck":
        return <div {...wrapperProps}><ShieldCheck {...iconProps} /></div>;
      case "BellRing":
        return <div {...wrapperProps}><BellRing {...iconProps} /></div>;
      case "Sparkles":
        return <div {...wrapperProps}><Sparkles {...iconProps} /></div>;
      default:
        return <div {...wrapperProps}><Sparkles {...iconProps} /></div>;
    }
  };

  const getColorBorder = (color: string) => {
    switch (color) {
      case "cyan":
        return "hover:border-[#7EF9FF]/55 hover:shadow-[0_0_20px_rgba(126,249,255,0.08)]";
      case "pink":
        return "hover:border-[#FF5DAA]/55 hover:shadow-[0_0_20px_rgba(255,93,170,0.08)]";
      case "gold":
        return "hover:border-[#FFD76A]/55 hover:shadow-[0_0_20px_rgba(255,215,106,0.08)]";
      default:
        return "hover:border-[#7EF9FF]/55";
    }
  };

  return (
    <section id="features" className="relative py-24 bg-[#0d0620]/95 overflow-hidden">
      {/* Background soft lighting blobs */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-[#7EF9FF] opacity-5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-[#FF5DAA] opacity-5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title elements */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7EF9FF] uppercase bg-[#7EF9FF]/10 border border-[#7EF9FF]/20 px-3.5 py-1.5 rounded-full">
            Core Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Mental Call AI Works
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            A frictionless acoustic diagnostic infrastructure that deploys state-of-the-art biometrics directly over standard voice channels.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feat, idx) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br from-[#1c0e3a]/65 to-[#110729]/85 border border-[#32145a] transition-all duration-300 ${getColorBorder(feat.color)}`}
            >
              {/* Internal subtle glow spot */}
              <div className={`absolute top-0 right-0 w-28 h-28 opacity-0 group-hover:opacity-[0.06] blur-2xl rounded-full transition-opacity duration-300 pointer-events-none ${
                feat.color === "cyan" 
                  ? "bg-[#7EF9FF]" 
                  : feat.color === "pink" 
                  ? "bg-[#FF5DAA]" 
                  : "bg-[#FFD76A]"
              }`} />

              <div className="flex items-start justify-between mb-6">
                {/* Dynamically Styled Icon */}
                {renderIcon(feat.iconName, feat.color)}
                
                {/* Custom Card Badge */}
                {feat.badge && (
                  <span className={`text-[9px] font-mono font-bold tracking-wide uppercase px-2.5 py-1 rounded-full ${
                    feat.color === "cyan"
                      ? "bg-[#7EF9FF]/10 text-[#7EF9FF] border border-[#7EF9FF]/20"
                      : feat.color === "pink"
                      ? "bg-[#FF5DAA]/10 text-[#FF5DAA] border border-[#FF5DAA]/20"
                      : "bg-[#FFD76A]/10 text-[#FFD76A] border border-[#FFD76A]/20"
                  }`}>
                    {feat.badge}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-3 text-left">
                <h4 className="text-[11px] font-mono font-bold text-gray-500 uppercase tracking-widest block">
                  {feat.subtitle}
                </h4>
                <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {feat.description}
                </p>
              </div>

              {/* Bottom design underline highlight */}
              <div className={`absolute bottom-0 left-8 right-8 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                feat.color === "cyan" 
                  ? "bg-[#7EF9FF]" 
                  : feat.color === "pink" 
                  ? "bg-[#FF5DAA]" 
                  : "bg-[#FFD76A]"
              }`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
