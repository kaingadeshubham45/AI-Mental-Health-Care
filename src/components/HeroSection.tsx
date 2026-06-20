import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, Activity, RefreshCw, Volume2, ShieldCheck, HelpCircle } from "lucide-react";

export default function HeroSection() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);
  const [selectedVoice, setSelectedVoice] = useState("distressed"); // "calm" | "distressed" | "anxious"
  const [scrolledTo, setScrolledTo] = useState("");

  const voiceSamples = {
    distressed: {
      label: "Sample A (Severe Distress)",
      stressLevel: 84,
      tensionIndex: "High",
      pauseFrequency: "3.2s avg",
      diagnostic: "Acute Clinical Depressive Markers Detected. Escalation Advised.",
      accentColor: "text-[#FF5DAA] border-[#FF5DAA]/30 bg-[#FF5DAA]/5"
    },
    anxious: {
      label: "Sample B (High Anxiety)",
      stressLevel: 68,
      tensionIndex: "Moderate-High",
      pauseFrequency: "1.8s avg",
      diagnostic: "Elevated Vocal Tremor & Labored Respiratory Pause Indicators.",
      accentColor: "text-[#FFD76A] border-[#FFD76A]/30 bg-[#FFD76A]/5"
    },
    calm: {
      label: "Sample C (Steady/Baseline)",
      stressLevel: 18,
      tensionIndex: "Low",
      pauseFrequency: "None detected",
      diagnostic: "Vocal Harmonics in Baseline Stability Range. No immediate risk.",
      accentColor: "text-[#7EF9FF] border-[#7EF9FF]/30 bg-[#7EF9FF]/5"
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSimulating) {
      interval = setInterval(() => {
        setSimulationStep((prev) => {
          if (prev >= 100) {
            setIsSimulating(false);
            return 100;
          }
          return prev + 4;
        });
      }, 120);
    } else if (simulationStep < 100) {
      setSimulationStep(0);
    }
    return () => clearInterval(interval);
  }, [isSimulating, simulationStep]);

  const startSimulation = (voiceType: "distressed" | "anxious" | "calm") => {
    setSelectedVoice(voiceType);
    setSimulationStep(0);
    setIsSimulating(true);
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#140a2e] via-[#1a0c3a] to-[#0d0620]">
      {/* Background radial soft glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#32145a] opacity-30 blur-[130px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#140a2e] border border-[#7EF9FF]/10 opacity-20 blur-[150px] -z-10" />

      {/* Embedded grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#32145a22_1px,transparent_1px),linear-gradient(to_bottom,#32145a22_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      {/* Floating particles in cyan, pink, and gold */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[15%] left-[20%] w-2 h-2 rounded-full bg-[#7EF9FF] animate-pulse shadow-[0_0_10px_#7EF9FF]" style={{ animationDuration: "3s" }} />
        <div className="absolute top-[40%] left-[8%] w-3 h-3 rounded-full bg-[#FF5DAA] opacity-60 animate-bounce" style={{ animationDuration: "6s" }} />
        <div className="absolute top-[75%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#FFD76A] animate-pulse" style={{ animationDuration: "4s" }} />
        <div className="absolute top-[25%] right-[15%] w-2.5 h-2.5 rounded-full bg-[#FF5DAA] animate-pulse shadow-[0_0_8px_#FF5DAA]" style={{ animationDuration: "5s" }} />
        <div className="absolute top-[55%] right-[8%] w-2 h-2 rounded-full bg-[#7EF9FF] opacity-80 animate-bounce" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-[20%] right-[30%] w-3.5 h-3.5 rounded-full bg-[#FFD76A] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-8">
            
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center self-start gap-2 px-3 py-1.5 rounded-full bg-[#7EF9FF]/10 border border-[#7EF9FF]/30 text-xs font-mono font-bold text-[#7EF9FF] tracking-wider uppercase shadow-[0_0_15px_rgba(126,249,255,0.15)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7EF9FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7EF9FF]"></span>
              </span>
              Next-Gen Healthcare AI
            </div>

            {/* Giant Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Your Voice <br className="hidden sm:inline" />
              Can <span className="bg-gradient-to-r from-[#7EF9FF] via-[#FF5DAA] to-[#FFD76A] bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(126,249,255,0.2)]">Save a Life</span>
            </h1>

            {/* Dual Subheadline Description */}
            <div className="space-y-4 max-w-xl">
              <p className="text-lg sm:text-xl text-gray-200 font-medium leading-relaxed">
                Mental illness in India often goes undetected because of deep surgical stigma, enormous physical distances, and lack of nearby professional care.
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed border-l-2 border-[#7EF9FF]/50 pl-4">
                <strong className="text-white">Mental Call AI</strong> uses clinical voice-based AI triage models to instantly map emotional distress indices through ordinary, basic phone calls. No smartphone app needed.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#problem"
                className="px-8 py-4 text-base font-bold text-[#140A2E] bg-gradient-to-r from-[#7EF9FF] via-[#FFD76A] to-[#FF5DAA] rounded-full hover:shadow-[0_0_25px_rgba(126,249,255,0.5)] hover:scale-[1.02] transform transition-all duration-300 active:scale-95"
              >
                Learn More
              </a>
              <a
                href="#visual-demo"
                className="px-8 py-4 text-base font-bold text-white bg-[#140A2E]/50 border border-white/20 rounded-full hover:bg-white/10 hover:border-[#7EF9FF] transition-all flex items-center gap-2 shadow-lg backdrop-blur-md"
              >
                <Play className="w-4 h-4 fill-current text-[#7EF9FF]" />
                Watch Demo Simulator
              </a>
            </div>

            {/* Microstats Trust Indicator */}
            <div className="pt-6 border-t border-[#32145a]/30 flex flex-wrap gap-x-8 gap-y-4 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#7EF9FF]" />
                100% Encrypted & Anonymized
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5DAA]" />
                Zero Recorded Conversations
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFD76A]" />
                Optimized for Basic Network GSM
              </div>
            </div>

          </div>

          {/* Hero Right - Glorious AI Brain Illustration & Real-time Live Acoustic Simulator */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Main Glowing Illustration Box */}
            <div className="w-full relative max-w-md mx-auto aspect-square bg-gradient-to-br from-[#1c0e3a] to-[#110729] rounded-3xl p-6 border border-[#32145a] shadow-2xl flex flex-col justify-between overflow-hidden group">
              {/* Corner tech accents */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#7EF9FF]/55" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#FF5DAA]/55" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#FFD76A]/55" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#7EF9FF]/55" />

              {/* Graphic container with glow effects */}
              <div className="w-full h-1/2 flex items-center justify-center relative">
                
                {/* Simulated Glow under SVG */}
                <div className="absolute w-36 h-36 rounded-full bg-[#7EF9FF] opacity-10 blur-3xl animate-pulse" />
                
                {/* Glowing Brain -> Wave -> Heartbeat SVG */}
                <svg className="w-full h-full max-h-48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Left Head/Brain shape made of nodes */}
                  <g className="opacity-80">
                    {/* Brain Left Hemisphere Circles */}
                    <circle cx="70" cy="80" r="4" fill="#7EF9FF" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <circle cx="85" cy="65" r="4.5" fill="#7EF9FF" />
                    <circle cx="100" cy="60" r="5" fill="#FF5DAA" className="animate-pulse" style={{ animationDelay: "1s" }} />
                    <circle cx="115" cy="65" r="4.5" fill="#FFD76A" />
                    <circle cx="130" cy="80" r="4" fill="#7EF9FF" />
                    
                    <circle cx="60" cy="100" r="4.5" fill="#7EF9FF" />
                    <circle cx="75" cy="95" r="3.5" fill="#7EF9FF" />
                    <circle cx="125" cy="95" r="3.5" fill="#FF5DAA" />
                    <circle cx="140" cy="100" r="4.5" fill="#7EF9FF" />

                    <circle cx="65" cy="120" r="5" fill="#FFD76A" />
                    <circle cx="82" cy="115" r="4" fill="#7EF9FF" />
                    <circle cx="118" cy="115" r="4" fill="#7EF9FF" />
                    <circle cx="135" cy="120" r="5" fill="#FF5DAA" />

                    {/* Connecting Synaptic Fibers */}
                    <line x1="70" y1="80" x2="85" y2="65" stroke="#7EF9FF" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="85" y1="65" x2="100" y2="60" stroke="#7EF9FF" strokeWidth="1" />
                    <line x1="100" y1="60" x2="115" y2="65" stroke="#FF5DAA" strokeWidth="1" />
                    <line x1="115" y1="65" x2="130" y2="80" stroke="#FFD76A" strokeWidth="1" />
                    <line x1="60" y1="100" x2="75" y2="95" stroke="#7EF9FF" strokeWidth="1" />
                    <line x1="125" y1="95" x2="140" y2="100" stroke="#FF5DAA" strokeWidth="1" />
                    <line x1="65" y1="120" x2="82" y2="115" stroke="#FFD76A" strokeWidth="1" />
                  </g>

                  {/* Morphing Sound Waves and Pulse lines moving through the center */}
                  <path
                    d="M 15 150 Q 30 150 45 150 T 75 140 T 100 110 T 125 155 T 150 150 T 185 150"
                    stroke="#7EF9FF"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="relative"
                  >
                    <animate
                      attributeName="d"
                      values="
                        M 15 150 Q 30 150 45 150 T 75 140 T 100 110 T 125 155 T 150 150 T 185 150;
                        M 15 150 Q 34 130 45 160 T 75 90 T 100 160 T 125 120 T 150 150 T 185 150;
                        M 15 150 Q 30 150 45 150 T 75 140 T 100 110 T 125 155 T 150 150 T 185 150
                      "
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Hot Pink Heartbeat overlay */}
                  <path
                    d="M 15 150 H 70 L 78 115 L 86 175 L 94 135 L 100 150 H 185"
                    stroke="#FF5DAA"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-90"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      values="0 400; 400 0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>

                {/* Overlaid UI metrics badge */}
                <span className="absolute bottom-0 right-2 px-2.5 py-1 rounded bg-[#140A2E]/90 text-[10px] font-mono text-[#7EF9FF] border border-[#7EF9FF]/20">
                  REAL-TIME FFT MODE
                </span>
                <span className="absolute bottom-0 left-2 px-2.5 py-1 rounded bg-[#140A2E]/90 text-[10px] font-mono text-[#FF5DAA] border border-[#FF5DAA]/20">
                  DISTRESS_COEF: 0.14
                </span>
              </div>

              {/* Simulator Section inside Hero Card */}
              <div id="visual-demo" className="mt-4 p-4 rounded-2xl bg-[#140a2e]/95 border border-[#32145a] flex flex-col gap-3 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#7EF9FF] flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#7EF9FF]" />
                    Interactive Voice Demo
                  </span>
                  <div className="flex gap-1.5">
                    {(["distressed", "anxious", "calm"] as const).map((vt) => (
                      <button
                        key={vt}
                        onClick={() => setSelectedVoice(vt)}
                        disabled={isSimulating}
                        className={`px-2 py-0.5 text-[9px] font-mono rounded border uppercase transition-all ${
                          selectedVoice === vt
                            ? "bg-[#7EF9FF]/20 text-[#7EF9FF] border-[#7EF9FF]"
                            : "bg-transparent text-gray-400 border-gray-700/50 hover:border-gray-500"
                        }`}
                      >
                        {vt === "calm" ? "Baseline" : vt === "anxious" ? "Anxiety" : "Distress"}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-[#0c051a] p-3 rounded-xl border border-[#32145a]/50 text-left font-mono">
                  <span className="text-[10px] text-gray-500 block mb-1">Source Stream Sample:</span>
                  <span className="text-xs text-white font-medium flex items-center justify-between">
                    <span>{voiceSamples[selectedVoice as keyof typeof voiceSamples].label}</span>
                    <span className="text-[10px] text-[#7EF9FF] animate-pulse">8.0 kHz Mono GSM CODEC</span>
                  </span>

                  {/* Processing Status Bar */}
                  {isSimulating ? (
                    <div className="mt-3">
                      <div className="flex justify-between text-[9px] text-[#7EF9FF] mb-1">
                        <span>EXTRACTING ACOUSTIC COEFFICIENTS...</span>
                        <span>{simulationStep}%</span>
                      </div>
                      <div className="w-full h-1 bg-[#1c0e3a] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#7EF9FF] to-[#FF5DAA] transition-all" style={{ width: `${simulationStep}%` }} />
                      </div>
                    </div>
                  ) : simulationStep === 100 ? (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 space-y-2 border-t border-[#32145a]/50 pt-2"
                    >
                      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                        <div className="bg-[#140A2E] p-1.5 rounded border border-[#32145a]">
                          <span className="text-gray-500 block text-[9px]">Distress Ratio</span>
                          <span className={`font-bold text-xs ${selectedVoice === "calm" ? "text-green-400" : selectedVoice === "anxious" ? "text-[#FFD76A]" : "text-[#FF5DAA]"}`}>
                            {voiceSamples[selectedVoice as keyof typeof voiceSamples].stressLevel}%
                          </span>
                        </div>
                        <div className="bg-[#140A2E] p-1.5 rounded border border-[#32145a]">
                          <span className="text-gray-500 block text-[9px]">Tension Coef</span>
                          <span className="text-white font-bold text-xs">
                            {voiceSamples[selectedVoice as keyof typeof voiceSamples].tensionIndex}
                          </span>
                        </div>
                        <div className="bg-[#140A2E] p-1.5 rounded border border-[#32145a]">
                          <span className="text-gray-500 block text-[9px]">Micro-Pauses</span>
                          <span className="text-white font-bold text-xs">
                            {voiceSamples[selectedVoice as keyof typeof voiceSamples].pauseFrequency}
                          </span>
                        </div>
                      </div>
                      <div className={`p-2 rounded border text-[10px] font-sans ${voiceSamples[selectedVoice as keyof typeof voiceSamples].accentColor}`}>
                        <strong className="block font-mono uppercase tracking-wide text-[9px] opacity-70 mb-0.5">Clinical Evaluation:</strong>
                        {voiceSamples[selectedVoice as keyof typeof voiceSamples].diagnostic}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="mt-3 text-center py-2 border-2 border-dashed border-[#32145a]/50 rounded-lg">
                      <span className="text-[10px] text-gray-500">Press Simulation To Run Acoustic Model</span>
                    </div>
                  )}
                </div>

                {/* Simulated Trigger button */}
                <button
                  onClick={() => startSimulation(selectedVoice as "distressed" | "anxious" | "calm")}
                  disabled={isSimulating}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-bold text-[#140A2E] bg-gradient-to-r from-[#7EF9FF] to-[#FFD76A] hover:opacity-90 disabled:opacity-50 transition-all shadow-md active:scale-95"
                >
                  {isSimulating ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      Analyzing Acoustic Bio-signatures...
                    </>
                  ) : (
                    <>
                      <Activity className="w-3.5 h-3.5" />
                      {simulationStep === 100 ? "Re-Run Acoustic AI Analysis" : "Analyze Sonic Distress Biometrics"}
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
