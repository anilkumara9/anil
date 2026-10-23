import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Phone, Linkedin, Github, Copy, Check, ArrowUpRight, MapPin } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [copied, setCopied] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}${formData.company ? ` (${formData.company})` : ''}`);
    const body = encodeURIComponent(
      `Hi Meda,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}`
    );
    window.location.href = `mailto:anilkumarmeda6@gmail.com?subject=${subject}&body=${body}`;
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="card-yashb p-6 sm:p-8 md:p-11 overflow-hidden w-full">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Direct contact channels & recruitment pitch */}
        <div className="lg:col-span-6 space-y-5 sm:space-y-6">
          <div className="space-y-2.5">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-[700] text-[#111111] uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF7EF] shadow-[0_2px_6px_rgba(80,70,55,0.08),inset_0_1px_1.5px_#fff]">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ACTIVELY INTERVIEWING</span>
            </span>
            <h3 className="font-shantell text-2xl sm:text-3xl lg:text-4xl font-[800] text-[#111111] leading-[1.15] tracking-tight">
              Let's build <span className="text-[#4B63FF] underline decoration-[#C4CCF6] decoration-wavy decoration-2">something great</span>.
            </h3>
            <p className="font-inter text-[14.5px] sm:text-[15.5px] font-[400] text-[#45433D] leading-relaxed pt-1">
              I'm actively interviewing for Software Engineer and AI Engineer roles where I can combine rapid product execution with model layer depth. Based in Bengaluru, open to remote and relocation worldwide.
            </p>
          </div>

          {/* Quick Contact 3D Rounded Stadium Pills (Matching reference image) */}
          <div className="space-y-3 pt-1">
            
            {/* Email Pill */}
            <div className="p-2 sm:p-2.5 rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#FAF8F4] shadow-[0_4px_12px_-2px_rgba(80,70,55,0.12),0_8px_20px_-4px_rgba(80,70,55,0.08),inset_0_1.5px_2px_#fff,inset_0_-1.5px_3px_rgba(180,168,145,0.14)] flex items-center justify-between gap-3 transition-all min-w-0">
              <a 
                href="mailto:anilkumarmeda6@gmail.com" 
                className="flex items-center gap-2.5 sm:gap-3 text-[#111111] text-[13px] sm:text-[13.5px] font-[600] truncate min-w-0 pl-1.5 hover:text-[#111111] transition-colors font-inter"
              >
                <div className="h-8 w-8 rounded-full bg-[#111111] text-[#FAF7EF] flex items-center justify-center shrink-0 shadow-inner">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="truncate">anilkumarmeda6@gmail.com</span>
              </a>
              <button
                type="button"
                className="btn-outline h-8 px-3.5 text-[11.5px] font-[600] flex items-center gap-1.5 shrink-0"
                onClick={() => copyToClipboard('anilkumarmeda6@gmail.com', 'email')}
              >
                {copied === 'email' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone Pill */}
            <div className="p-2 sm:p-2.5 rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#FAF8F4] shadow-[0_4px_12px_-2px_rgba(80,70,55,0.12),0_8px_20px_-4px_rgba(80,70,55,0.08),inset_0_1.5px_2px_#fff,inset_0_-1.5px_3px_rgba(180,168,145,0.14)] flex items-center justify-between gap-3 transition-all min-w-0">
              <a 
                href="tel:+919986489887" 
                className="flex items-center gap-2.5 sm:gap-3 text-[#111111] text-[13px] sm:text-[13.5px] font-[600] truncate min-w-0 pl-1.5 hover:text-[#111111] transition-colors font-inter"
              >
                <div className="h-8 w-8 rounded-full bg-[#111111] text-[#FAF7EF] flex items-center justify-center shrink-0 shadow-inner">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+91 9986489887</span>
              </a>
              <button
                type="button"
                className="btn-outline h-8 px-3.5 text-[11.5px] font-[600] flex items-center gap-1.5 shrink-0"
                onClick={() => copyToClipboard('+919986489887', 'phone')}
              >
                {copied === 'phone' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* LinkedIn & GitHub 3D Rounded Stadium Cards */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a 
                href="https://www.linkedin.com/in/anilkumar-meda-2b2624331" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-11 px-4 rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#FAF8F4] shadow-[0_4px_12px_-2px_rgba(80,70,55,0.12),0_8px_20px_-4px_rgba(80,70,55,0.08),inset_0_1.5px_2px_#fff,inset_0_-1.5px_3px_rgba(180,168,145,0.14)] flex items-center justify-between transition-all text-[12.5px] sm:text-[13px] font-[600] text-[#111111] group"
              >
                <div className="flex items-center gap-2 truncate">
                  <Linkedin className="h-4 w-4 text-[#111111] shrink-0" />
                  <span className="truncate">LinkedIn</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#6A6253] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>

              <a 
                href="https://github.com/anilkumara9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-11 px-4 rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#FAF8F4] shadow-[0_4px_12px_-2px_rgba(80,70,55,0.12),0_8px_20px_-4px_rgba(80,70,55,0.08),inset_0_1.5px_2px_#fff,inset_0_-1.5px_3px_rgba(180,168,145,0.14)] flex items-center justify-between transition-all text-[12.5px] sm:text-[13px] font-[600] text-[#111111] group"
              >
                <div className="flex items-center gap-2 truncate">
                  <Github className="h-4 w-4 text-[#111111] shrink-0" />
                  <span className="truncate">GitHub</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#6A6253] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>
            </div>

          </div>

          {/* Location & Availability Note */}
          <div className="pt-2 flex items-center gap-2 text-[12.5px] font-[500] text-[#6A6253] font-inter">
            <MapPin className="h-4 w-4 text-[#111111] shrink-0" />
            <span>Bengaluru, Karnataka, India · Immediate joining availability</span>
          </div>

        </div>

        {/* Right Column: Direct Message Box */}
        <div className="lg:col-span-6 rounded-[28px] bg-[#FAF8F5] p-5 sm:p-7 md:p-8 space-y-4 shadow-[inset_0_2px_4px_rgba(80,70,55,0.06),0_2px_4px_rgba(255,255,255,0.8)] border border-[rgba(219,214,199,0.5)]">
          <div className="flex items-center justify-between pb-1">
            <h4 className="font-shantell text-[17px] sm:text-[18px] font-[800] text-[#111111]">
              Send a direct message
            </h4>
            <span className="badge-yashb-lavender text-[9.5px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              QUICK REPLY &lt; 2 HRS
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-mono font-[700] text-[#111111] uppercase tracking-wider block mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Maya Sharma"
                  className="w-full rounded-[16px] bg-white px-4 py-3 text-[13.5px] text-[#111111] shadow-[inset_0_2px_4px_rgba(60,50,35,0.07),0_1.5px_2px_#fff] border-0 focus:outline-none focus:ring-2 focus:ring-[#111111] font-inter transition-all placeholder:text-[#9E9B93]"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono font-[700] text-[#111111] uppercase tracking-wider block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. maya@company.com"
                  className="w-full rounded-[16px] bg-white px-4 py-3 text-[13.5px] text-[#111111] shadow-[inset_0_2px_4px_rgba(60,50,35,0.07),0_1.5px_2px_#fff] border-0 focus:outline-none focus:ring-2 focus:ring-[#111111] font-inter transition-all placeholder:text-[#9E9B93]"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono font-[700] text-[#111111] uppercase tracking-wider block mb-1.5">
                Company / Venture
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Stripe, early-stage stealth, or lab"
                className="w-full rounded-[16px] bg-white px-4 py-3 text-[13.5px] text-[#111111] shadow-[inset_0_2px_4px_rgba(60,50,35,0.07),0_1.5px_2px_#fff] border-0 focus:outline-none focus:ring-2 focus:ring-[#111111] font-inter transition-all placeholder:text-[#9E9B93]"
              />
            </div>

            <div>
              <label className="text-[11px] font-mono font-[700] text-[#111111] uppercase tracking-wider block mb-1.5">
                Your Message
              </label>
              <textarea
                name="message"
                required
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Let's talk about an SWE or AI Engineer role, a collaboration, or probing foundation models..."
                className="w-full rounded-[16px] bg-white px-4 py-3 text-[13.5px] text-[#111111] shadow-[inset_0_2px_4px_rgba(60,50,35,0.07),0_1.5px_2px_#fff] border-0 focus:outline-none focus:ring-2 focus:ring-[#111111] font-inter transition-all placeholder:text-[#9E9B93] resize-none leading-relaxed"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full h-11 text-[13.5px] font-[600] justify-center cursor-pointer shadow-lg mt-1"
            >
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </button>

            {submitSuccess && (
              <div className="p-3 rounded-full bg-[#FFFFFF] shadow-sm text-center text-[12px] text-[#111111] font-medium flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>Email client opened with pre-filled inquiry!</span>
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;