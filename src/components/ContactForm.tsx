import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Phone, Linkedin, Github, Copy, Check, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';

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
    <div className="bg-[#ffffff] border border-[#e4e4e9] rounded-[24px] sm:rounded-[32px] p-4.5 sm:p-8 md:p-12 transition-all shadow-xs hover:shadow-md overflow-hidden w-full">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
        
        {/* Left Column: Direct contact channels & recruitment pitch */}
        <div className="lg:col-span-6 space-y-5 sm:space-y-6">
          <div className="space-y-2.5 sm:space-y-3">
            <h3 className="text-2xl sm:text-4xl font-[700] text-[#111113] leading-[1.15]">
              Let's build <span className="font-editorial text-indigo-600 text-[1.18em] font-normal">something great</span>.
            </h3>
            <p className="text-[14px] sm:text-[15px] font-[400] text-[#6e6e78] leading-relaxed">
              I'm actively interviewing for Software Engineer and AI Engineer roles where I can combine rapid product execution with model layer depth. Based in Bengaluru, open to remote and relocation.
            </p>
          </div>

          {/* Quick Contact Stadium Pills */}
          <div className="space-y-2.5 sm:space-y-3 pt-1">
            
            {/* Email Pill */}
            <div className="p-1.5 sm:p-2.5 rounded-full bg-[#f8f8fa] border border-[#e4e4e9] flex items-center justify-between gap-2 hover:border-[#111113] transition-colors min-w-0">
              <a 
                href="mailto:anilkumarmeda6@gmail.com" 
                className="flex items-center gap-2 sm:gap-3 text-[#111113] text-[12px] sm:text-[13.5px] font-[600] truncate min-w-0 pl-1.5 sm:pl-2 hover:text-indigo-600 transition-colors"
              >
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-[#111113] text-white flex items-center justify-center shrink-0">
                  <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span className="truncate">anilkumarmeda6@gmail.com</span>
              </a>
              <button
                type="button"
                className="h-7 sm:h-8 px-2.5 sm:px-3.5 rounded-full text-[11px] sm:text-[12px] font-[600] text-[#111113] bg-[#ffffff] border border-[#e4e4e9] flex items-center gap-1 sm:gap-1.5 transition-colors cursor-pointer hover:bg-[#111113] hover:text-white shrink-0"
                onClick={() => copyToClipboard('anilkumarmeda6@gmail.com', 'email')}
              >
                {copied === 'email' ? (
                  <>
                    <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-500" />
                    <span className="text-emerald-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone Pill */}
            <div className="p-1.5 sm:p-2.5 rounded-full bg-[#f8f8fa] border border-[#e4e4e9] flex items-center justify-between gap-2 hover:border-[#111113] transition-colors min-w-0">
              <a 
                href="tel:+919986489887" 
                className="flex items-center gap-2 sm:gap-3 text-[#111113] text-[12px] sm:text-[13.5px] font-[600] truncate min-w-0 pl-1.5 sm:pl-2 hover:text-indigo-600 transition-colors"
              >
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-[#111113] text-white flex items-center justify-center shrink-0">
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span>+91 9986489887</span>
              </a>
              <button
                type="button"
                className="h-7 sm:h-8 px-2.5 sm:px-3.5 rounded-full text-[11px] sm:text-[12px] font-[600] text-[#111113] bg-[#ffffff] border border-[#e4e4e9] flex items-center gap-1 sm:gap-1.5 transition-colors cursor-pointer hover:bg-[#111113] hover:text-white shrink-0"
                onClick={() => copyToClipboard('+919986489887', 'phone')}
              >
                {copied === 'phone' ? (
                  <>
                    <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-500" />
                    <span className="text-emerald-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* LinkedIn & GitHub Cards */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              <a 
                href="https://www.linkedin.com/in/anilkumar-meda-2b2624331" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 sm:h-11 px-3 sm:px-4 rounded-full bg-[#f8f8fa] border border-[#e4e4e9] flex items-center justify-between hover:border-[#111113] hover:bg-[#ffffff] transition-all text-[12px] sm:text-[13px] font-[600] text-[#111113] group"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 truncate">
                  <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-600 shrink-0" />
                  <span className="truncate">LinkedIn</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#6e6e78] group-hover:text-[#111113] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>

              <a 
                href="https://github.com/anilkumara9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 sm:h-11 px-3 sm:px-4 rounded-full bg-[#f8f8fa] border border-[#e4e4e9] flex items-center justify-between hover:border-[#111113] hover:bg-[#ffffff] transition-all text-[12px] sm:text-[13px] font-[600] text-[#111113] group"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 truncate">
                  <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-600 shrink-0" />
                  <span className="truncate">GitHub</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#6e6e78] group-hover:text-[#111113] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>
            </div>

          </div>

          {/* Location & Availability Note */}
          <div className="pt-1 flex items-center gap-2 text-[12px] sm:text-[12.5px] font-[500] text-[#6e6e78]">
            <MapPin className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
            <span>Bengaluru, Karnataka · Available for immediate hiring</span>
          </div>

        </div>

        {/* Right Column: Direct Message Box */}
        <div className="lg:col-span-6 bg-[#f8f8fa] border border-[#e4e4e9] rounded-[22px] sm:rounded-[28px] p-4.5 sm:p-6 md:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-[16px] sm:text-[17px] font-[700] text-[#111113]">
              Send a direct message
            </h4>
            <span className="text-[11px] font-[600] text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Usually replies &lt; 2 hrs
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[12px] font-[600] text-[#111113] block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Maya Sharma"
                  className="w-full px-4 py-2.5 rounded-[14px] bg-[#ffffff] border border-[#e4e4e9] text-[#111113] text-[13.5px] focus:outline-none focus:border-[#111113] focus:ring-1 focus:ring-[#111113] transition-all"
                />
              </div>

              <div>
                <label className="text-[12px] font-[600] text-[#111113] block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. maya@company.com"
                  className="w-full px-4 py-2.5 rounded-[14px] bg-[#ffffff] border border-[#e4e4e9] text-[#111113] text-[13.5px] focus:outline-none focus:border-[#111113] focus:ring-1 focus:ring-[#111113] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-[12px] font-[600] text-[#111113] block mb-1">
                Company / Venture
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Stripe, early-stage stealth, or university lab"
                className="w-full px-4 py-2.5 rounded-[14px] bg-[#ffffff] border border-[#e4e4e9] text-[#111113] text-[13.5px] focus:outline-none focus:border-[#111113] focus:ring-1 focus:ring-[#111113] transition-all"
              />
            </div>

            <div>
              <label className="text-[12px] font-[600] text-[#111113] block mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Let's talk about an SWE or AI Engineer role, a collaboration, or probing foundation models..."
                className="w-full px-4 py-3 rounded-[16px] bg-[#ffffff] border border-[#e4e4e9] text-[#111113] text-[13.5px] focus:outline-none focus:border-[#111113] focus:ring-1 focus:ring-[#111113] resize-none transition-all leading-relaxed"
              />
            </div>

            <button
              type="submit"
              className="w-full h-11 rounded-full bg-[#111113] hover:bg-black text-white font-[600] text-[14px] flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer shadow-xs"
            >
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </button>

            {submitSuccess && (
              <div className="p-3 rounded-full bg-[#ffffff] border border-[#e4e4e9] text-center text-[12.5px] text-[#111113] font-medium flex items-center justify-center gap-2 shadow-xs">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
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