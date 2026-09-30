import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Phone, Linkedin, Github, Copy, Check, ArrowUpRight } from 'lucide-react';

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
    <div className="bg-[#ffffff] border border-[#f0f0f0] rounded-[24px] p-8 sm:p-12 transition-colors">
      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Left Column: Direct contact channels */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <span className="text-[12px] font-semibold text-[#707070] uppercase tracking-wider block">
              Contact
            </span>
            <h3 className="text-3xl sm:text-4xl font-[650] text-[#141414] leading-[1.13]">
              Let's talk about opportunities.
            </h3>
            <p className="text-[16px] font-[456] text-[#707070] leading-[1.38]">
              I'm actively interviewing for Software Engineer and AI Engineer roles where I can build real products and work close to the model layer. Based in Bengaluru, open to both remote and on-site roles.
            </p>
          </div>

          {/* Quick Contact Stadium Pills */}
          <div className="space-y-3 pt-2">
            <div className="p-3.5 rounded-full bg-[#f3f3f3] flex items-center justify-between">
              <a 
                href="mailto:anilkumarmeda6@gmail.com" 
                className="flex items-center gap-3 text-[#141414] text-[14px] font-[500] truncate hover:opacity-80 transition-opacity"
              >
                <div className="h-8 w-8 rounded-full bg-[#141414] text-[#ffffff] flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="truncate">anilkumarmeda6@gmail.com</span>
              </a>
              <button
                type="button"
                className="h-8 px-3 rounded-full text-[12px] font-semibold text-[#141414] bg-[#ffffff] border border-[#e0e0e0] flex items-center gap-1.5 transition-colors cursor-pointer hover:border-[#141414]"
                onClick={() => copyToClipboard('anilkumarmeda6@gmail.com', 'email')}
              >
                {copied === 'email' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#0066ff]" />
                    <span className="text-[#0066ff]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-3.5 rounded-full bg-[#f3f3f3] flex items-center justify-between">
              <a 
                href="tel:+919986489887" 
                className="flex items-center gap-3 text-[#141414] text-[14px] font-[500] truncate hover:opacity-80 transition-opacity"
              >
                <div className="h-8 w-8 rounded-full bg-[#141414] text-[#ffffff] flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+91 9986489887</span>
              </a>
              <button
                type="button"
                className="h-8 px-3 rounded-full text-[12px] font-semibold text-[#141414] bg-[#ffffff] border border-[#e0e0e0] flex items-center gap-1.5 transition-colors cursor-pointer hover:border-[#141414]"
                onClick={() => copyToClipboard('+919986489887', 'phone')}
              >
                {copied === 'phone' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#0066ff]" />
                    <span className="text-[#0066ff]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a 
                href="https://www.linkedin.com/in/anilkumar-meda-2b2624331" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-11 px-4 rounded-full bg-[#ffffff] border border-[#e0e0e0] flex items-center justify-between hover:bg-[#f3f3f3] transition-colors text-[13px] font-[500] text-[#141414]"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#707070]" />
              </a>

              <a 
                href="https://github.com/anilkumara9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-11 px-4 rounded-full bg-[#ffffff] border border-[#e0e0e0] flex items-center justify-between hover:bg-[#f3f3f3] transition-colors text-[13px] font-[500] text-[#141414]"
              >
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#707070]" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct message form */}
        <div className="lg:col-span-6 bg-[#f3f3f3] rounded-[24px] p-6 sm:p-8 space-y-4">
          <h4 className="text-[18px] font-[650] text-[#141414]">
            Send a direct message.
          </h4>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[12px] font-semibold text-[#707070] block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full input-field"
                />
              </div>

              <div>
                <label className="text-[12px] font-semibold text-[#707070] block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full input-field"
                />
              </div>
            </div>

            <div>
              <label className="text-[12px] font-semibold text-[#707070] block mb-1">
                Company / Role
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company or venture"
                className="w-full input-field"
              />
            </div>

            <div>
              <label className="text-[12px] font-semibold text-[#707070] block mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Let's discuss an engineering role, collaboration, or project..."
                className="w-full input-field resize-none rounded-[16px]"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary cursor-pointer"
            >
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </button>

            {submitSuccess && (
              <div className="p-3 rounded-full bg-[#ffffff] border border-[#e0e0e0] text-center text-[13px] text-[#141414] font-medium flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#0066ff]" />
                <span>Email client opened with pre-filled message!</span>
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;