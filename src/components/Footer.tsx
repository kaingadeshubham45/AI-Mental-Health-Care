import React from "react";
import { Linkedin, Twitter, Mail, Heart, ShieldCheck } from "lucide-react";

interface FooterProps {
  onOpenSupportModal: () => void;
}

export default function Footer({ onOpenSupportModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0417] border-t border-[#32145a]/50 text-gray-400 font-sans relative z-10">
      
      {/* Upper footer grid block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Tagline column */}
          <div className="md:col-span-5 space-y-5 text-left">
            <a href="#home" className="flex items-center space-x-3">
              <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(126,249,255,0.4)]">
                🧠
              </span>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Mental Call <span className="text-[#7EF9FF] font-extrabold font-mono text-xs px-1.5 py-0.5 rounded-md bg-[#7EF9FF]/10 border border-[#7EF9FF]/20">AI</span>
              </span>
            </a>
            
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              "Hear the Help. Heal the Mind." <br />
              Accelerating professional psychiatric diagnostic outreach to remote regions through instant non-smartphone acoustic AI modeling.
            </p>

            {/* Social Icons row */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#7EF9FF]/20 hover:text-[#7EF9FF] transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#7EF9FF]/20 hover:text-[#7EF9FF] transition-all"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:support@mentalcall.ai"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#7EF9FF]/20 hover:text-[#7EF9FF] transition-all"
                aria-label="Email Address"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            <div className="space-y-4 text-left">
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Initiative
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="hover:text-[#7EF9FF] transition-colors">Home</a>
                </li>
                <li>
                  <a href="#problem" className="hover:text-[#7EF9FF] transition-colors">Problem</a>
                </li>
                <li>
                  <a href="#features" className="hover:text-[#7EF9FF] transition-colors">Features</a>
                </li>
              </ul>
            </div>

            <div className="space-y-4 text-left">
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Resource Gateway
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#how-it-works" className="hover:text-[#7EF9FF] transition-colors">How It Works</a>
                </li>
                <li>
                  <a href="#impact" className="hover:text-[#7EF9FF] transition-colors">Impact Footprint</a>
                </li>
                <li>
                  <button
                    onClick={onOpenSupportModal}
                    className="hover:text-[#7EF9FF] transition-colors text-left"
                  >
                    Partner Programs
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4 text-left col-span-2 sm:col-span-1">
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Secure Standards
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-1.5 text-[11px] text-[#7EF9FF]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  GDPR & HIPAA Compliant
                </li>
                <li className="text-[11px] text-gray-500">
                  SHA-256 Voice Tensors Only
                </li>
                <li className="text-[11px] text-gray-500">
                  Zero Voice Audio Stored
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* Extreme lower copyright footer banner */}
      <div className="bg-[#070210] py-8 border-t border-[#32145a]/30 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500">
            &copy; {currentYear} Mental Call AI. All rights reserved. Registered Indian Healthcare Patent Triage Initative.
          </p>
          <div className="flex space-x-6 text-gray-500">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-[#32145a]">|</span>
            <a href="#terms" className="hover:text-white transition-colors">Clinical Terms</a>
            <span className="text-[#32145a]">|</span>
            <span className="text-gray-600">Built in partnership with clinical sound laboratories</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
