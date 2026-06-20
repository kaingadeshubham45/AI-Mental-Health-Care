import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Heart, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenSupportModal: () => void;
}

export default function Navbar({ onOpenSupportModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Problem", href: "#problem" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Impact", href: "#impact" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#140a2ed0] backdrop-blur-xl border-b border-[#32145a]/40 shadow-lg shadow-[#0d0620]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="relative">
                <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(126,249,255,0.6)] group-hover:scale-110 transition-transform duration-300">
                  🧠
                </span>
                <span className="absolute -top-1 -right-1 flex h-3.xl w-3.xl">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7EF9FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7EF9FF]"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-sans flex items-center gap-1.5">
                  Mental Call <span className="text-[#7EF9FF] font-extrabold font-mono text-sm px-1.5 py-0.5 rounded-md bg-[#7EF9FF]/10 border border-[#7EF9FF]/20">AI</span>
                </span>
                <span className="text-[10px] tracking-wider text-gray-400 font-mono uppercase">
                  Voice Distress Triage
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-[#7EF9FF] transition-colors relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#7EF9FF] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenSupportModal}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-bold text-white rounded-full group bg-gradient-to-br from-[#7EF9FF] via-[#FF5DAA] to-[#FFD76A] group-hover:from-[#7EF9FF] group-hover:to-[#FFD76A] hover:text-[#140A2E] focus:ring-4 focus:outline-none focus:ring-[#7EF9FF]/30 transition-all duration-300"
            >
              <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-[#140a2e] rounded-full group-hover:bg-opacity-0">
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#FF5DAA] group-hover:text-[#140A2E] transition-colors" />
                  Support Our Mission
                </span>
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#32145a]/40 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#140a2e] border-b border-[#32145a] px-4 pt-2 pb-6 space-y-3"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-gray-300 hover:text-[#7EF9FF] hover:bg-[#32145a]/30 transition-all"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[#32145a]/40">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenSupportModal();
                }}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-[#140A2E] bg-gradient-to-r from-[#7EF9FF] to-[#FF5DAA] rounded-full hover:shadow-[0_0_20px_rgba(126,249,255,0.4)] transition-all"
              >
                <Heart className="w-4 h-4 fill-current text-[#140A2E]" />
                Support Our Mission
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
