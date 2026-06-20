import React from "react";
import { motion } from "motion/react";
import { testimonialsList } from "../data";
import { Quote, MessageSquare, Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-[#0d0620] overflow-hidden border-t border-[#32145a]/30">
      {/* Glow shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FF5DAA] opacity-5 blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF5DAA] uppercase bg-[#FF5DAA]/10 border border-[#FF5DAA]/20 px-3.5 py-1.5 rounded-full">
            Institutional Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Endorsed by Healthcare Professionals
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Read how clinicians, academic researchers, and grassroots field organizers evaluate the therapeutic precision of voice distress triage.
          </p>
        </div>

        {/* Testimonials Glassmorphism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonialsList.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-[#1c0e3a]/50 to-[#110729]/70 border border-[#32145a] shadow-xl flex flex-col justify-between hover:border-[#7EF9FF]/30 hover:shadow-[0_0_20px_rgba(126,249,255,0.05)] transition-all duration-300"
            >
              {/* Corner quote mark visual */}
              <div className="absolute top-6 right-6 text-[#7EF9FF]/10">
                <Quote className="w-12 h-12" />
              </div>

              {/* Star scale indicator */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current text-[#FFD76A] stroke-none" />
                ))}
              </div>

              {/* Core Quote Content */}
              <blockquote className="text-base sm:text-lg text-gray-200 leading-relaxed font-sans italic text-left mb-8 relative z-10">
                "{test.quote}"
              </blockquote>

              {/* Author Credits Row */}
              <div className="flex items-center gap-4 border-t border-[#32145a]/50 pt-5 text-left">
                {/* Generates a nice modern gradient avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7EF9FF] via-[#FF5DAA] to-[#FFD76A] flex items-center justify-center font-bold text-[#140A2E] text-sm shrink-0 shadow-lg">
                  {test.author.split(" ")[1]?.substring(0, 2).toUpperCase() || "MA"}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-sans">
                    {test.author}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {test.role}, <span className="text-[#7EF9FF] font-mono">{test.organization}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic callout banner under testimonials */}
        <div className="mt-16 text-center max-w-xl mx-auto p-4 rounded-2xl bg-[#140a2e]/60 border border-[#32145a] text-xs text-gray-400 flex items-center justify-center gap-3 font-mono">
          <MessageSquare className="w-4 h-4 text-[#7EF9FF]" />
          <span>Recognized at the 2026 Medical Acoustics Conclave</span>
        </div>

      </div>
    </section>
  );
}
