import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Sparkles, AlertCircle, CheckCircle2, Heart, Award } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [role, setRole] = useState("Practitioner"); // Sponsor/Investor, NGO Partner, Practitioner, Voluntneer
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);
    // Simulate real web request latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form fields
      setFormData({ name: "", email: "", organization: "", message: "" });
    }, 1800);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop screen blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0d0620e2] backdrop-blur-md"
          />

          {/* Dialog Body Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg bg-gradient-to-br from-[#1c0e3a] to-[#110729] rounded-[28px] border border-[#32145a] p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Tech Corner details */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#7EF9FF] opacity-[0.03] blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-[#32145a]/50 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#FF5DAA] animate-pulse" />
                <h3 className="text-xl font-bold text-white font-sans">
                  Join Our Support Circle
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="support-form"
                  onSubmit={handleSubmit}
                  className="space-y-4 text-left font-sans"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Collaborate with <strong className="text-white">Mental Call AI</strong>. Select your capacity below to join our mission of delivering acoustic mental health endpoints to underserved districts.
                  </p>

                  {/* Segmented Controller for Capacity Roles */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono font-bold text-gray-400 uppercase block">
                      Select Collaborative Role
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {["Practitioner", "NGO Partner", "Sponsor", "Volunteer"].map((roleOption) => (
                        <button
                          key={roleOption}
                          type="button"
                          onClick={() => setRole(roleOption)}
                          className={`py-2 px-1 text-xs font-semibold rounded-xl border transition-all uppercase font-mono ${
                            role === roleOption
                              ? "bg-[#7EF9FF]/15 text-[#7EF9FF] border-[#7EF9FF] shadow-[0_0_10px_rgba(126,249,255,0.1)]"
                              : "bg-white/5 text-gray-400 border-white/5 hover:border-white/15"
                          }`}
                        >
                          {roleOption}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-gray-400 uppercase">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleTextChange}
                        required
                        placeholder="Dr. Rajesh Patel"
                        className="w-full bg-[#140a2e] border border-[#32145a] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#7EF9FF] placeholder:text-gray-600 transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-gray-400 uppercase">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleTextChange}
                        required
                        placeholder="rajesh@yourdomain.com"
                        className="w-full bg-[#140a2e] border border-[#32145a] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#7EF9FF] placeholder:text-gray-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-gray-400 uppercase">Affiliated Organization (Optional)</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleTextChange}
                      placeholder="e.g. Health Council of India / NIMHANS Advocate"
                      className="w-full bg-[#140a2e] border border-[#32145a] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#7EF9FF] placeholder:text-gray-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-gray-400 uppercase">Proposals & message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleTextChange}
                      required
                      rows={3}
                      placeholder="e.g. We wish to host a pilot program across 12 primary health clinics in our district..."
                      className="w-full bg-[#140a2e] border border-[#32145a] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#7EF9FF] placeholder:text-gray-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Submission Row */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full text-sm font-bold text-[#140A2E] bg-gradient-to-r from-[#7EF9FF] to-[#FF5DAA] hover:shadow-[0_0_15px_rgba(126,249,255,0.4)] disabled:opacity-50 transition-all font-sans cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Sparkles className="w-4 h-4 animate-spin text-[#140A2E]" />
                          Registering Handshake Connection...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Diagnostic Request
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-prompt"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-8 font-sans"
                >
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-green-500/10 text-green-400 border border-green-500/25 animate-bounce">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white uppercase tracking-wider font-mono">
                      Handshake Connected!
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed max-w-sm mx-auto">
                      Thank you! Your registration as a <strong className="text-[#7EF9FF]">{role}</strong> has been secured on our secure clinical endpoint server.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-400 max-w-sm mx-auto flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#FFD76A] shrink-0" />
                    <span>A clinical partnership director will touch base on your secure encrypted channel within 24 business hours.</span>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      onClose();
                    }}
                    className="px-6 py-2 rounded-full border border-white/15 text-xs text-white hover:bg-white/5 transition-all cursor-pointer font-bold"
                  >
                    Dismiss Console
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
