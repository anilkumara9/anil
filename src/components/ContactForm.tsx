import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, Mail, Phone, MapPin, Clock, Copy, Check } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('anilkumarmeda6@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('+91 9972437551');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/anilkumarmeda6@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `⚡ Portfolio Message from ${formData.name}`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Server returned an error');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
      setErrorMessage('Could not send message automatically.');
    }
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Anil,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:anilkumarmeda6@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative px-4 sm:px-8 py-10 sm:py-16 scroll-mt-20">
      {/* Outside Hand-drawn Note, Coffee Cup Sticker & Sketched Arrow on RIGHT SIDE in gutter */}
      <div
        aria-hidden="true"
        className="absolute -right-24 sm:-right-32 md:-right-40 lg:-right-48 xl:-right-52 top-10 sm:top-14 md:top-16 z-20 select-none hidden xl:flex flex-col items-start rotate-[2deg] pointer-events-none"
      >
        {/* Coffee Cup Cutout Sticker with Sip Sound */}
        <button
          type="button"
          onClick={() => {
            const audio = new Audio('/coffee-cup.mp3');
            audio.play().catch(() => {});
          }}
          className="cursor-pointer hover:scale-110 hover:rotate-[-4deg] transition-transform duration-300 pointer-events-auto mb-1.5 drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"
          title="Click to sip coffee ☕"
          aria-label="Cup of coffee sticker"
        >
          <img
            src="/coffee.webp"
            alt="Cup of Coffee"
            className="w-16 sm:w-20 md:w-22 lg:w-24 h-auto object-contain rotate-[-6deg]"
          />
        </button>

        {/* Handwritten text in Caveat script font */}
        <div className="font-['Caveat',_'Shantell_Sans',_cursive] text-[18px] sm:text-[21px] lg:text-[24px] text-zinc-100 leading-tight font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] text-left whitespace-nowrap">
          <div>Let's connect ☕</div>
          <div className="text-[14px] sm:text-[17px] lg:text-[19px] text-zinc-300 -mt-0.5">
            Grab a coffee &amp; chat!
          </div>
        </div>

        {/* Sketched Hand-drawn Curving Arrow pointing down-left across border into Contact form */}
        <svg 
          width="48" 
          height="40" 
          viewBox="0 0 48 40" 
          fill="none" 
          className="text-zinc-300 drop-shadow-md mt-1 ml-1 rotate-[-2deg]"
        >
          <path 
            d="M40 4 C34 14, 22 24, 6 28" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            fill="none" 
          />
          <path 
            d="M16 20 L6 28 L14 34" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left Column: Context & Direct Reach */}
        <div className="md:col-span-5 space-y-5">
          <div className="space-y-2">
            <h2 className="text-[20px] sm:text-[22px] font-medium text-[#F4F4F5] tracking-tight">
              Let's build something remarkable.
            </h2>
            <p className="text-[13.5px] text-zinc-300 font-sans leading-relaxed">
              I am actively open to work. If you are looking for a dedicated engineer who builds fast, scalable systems and AI solutions — <span className="text-white font-medium underline underline-offset-4 decoration-emerald-500/50">hire me</span> and let's build something great together.
            </p>
          </div>

          <div className="space-y-2 text-xs font-mono text-zinc-400 pt-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <a
                  href="mailto:anilkumarmeda6@gmail.com"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  anilkumarmeda6@gmail.com
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-1 text-zinc-500 hover:text-zinc-200 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <a
                  href="tel:+919972437551"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  +91 9972437551
                </a>
                <button
                  type="button"
                  onClick={copyPhone}
                  className="p-1 text-zinc-500 hover:text-zinc-200 transition-colors cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-2 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span>Bengaluru, India · IST (UTC+5:30)</span>
              </div>

              <div className="flex items-center gap-2 text-zinc-500">
                <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span>Direct to inbox · &lt; 24h response</span>
              </div>
            </div>
          </div>

        {/* Right Column: Clean Form with Curved Inputs */}
        <div className="md:col-span-7">
          {status === 'success' ? (
            <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/25 space-y-3">
              <div className="flex items-center gap-2.5 text-emerald-400">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <h3 className="text-base font-medium text-white">Message delivered directly to Anil!</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Thank you, <span className="text-zinc-200 font-medium">{formData.name}</span>. Your message has been sent directly to{' '}
                <span className="text-zinc-300 font-mono text-xs">anilkumarmeda6@gmail.com</span>. I'll get back to you shortly at{' '}
                <span className="text-zinc-300 font-mono text-xs">{formData.email}</span>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus('idle');
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="text-xs font-mono text-emerald-400 hover:underline cursor-pointer pt-1 block"
              >
                ← Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="contact-name" className="block text-[11.5px] font-mono text-zinc-400 mb-1.5">
                    Your Name <span className="text-zinc-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#12131A] border border-[#27272A] focus:border-zinc-400 focus:outline-none text-sm text-zinc-100 placeholder-zinc-600 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[11.5px] font-mono text-zinc-400 mb-1.5">
                    Email Address <span className="text-zinc-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#12131A] border border-[#27272A] focus:border-zinc-400 focus:outline-none text-sm text-zinc-100 placeholder-zinc-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[11.5px] font-mono text-zinc-400 mb-1.5">
                  Message <span className="text-zinc-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the open role, your team, or the project you'd like to build together..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#12131A] border border-[#27272A] focus:border-zinc-400 focus:outline-none text-sm text-zinc-100 placeholder-zinc-600 transition-colors resize-none leading-relaxed"
                />
              </div>

              {status === 'error' && (
                <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/30 text-rose-300 text-xs">
                  {errorMessage}{' '}
                  <button
                    type="button"
                    onClick={handleMailtoFallback}
                    className="underline font-bold text-white hover:text-rose-200 cursor-pointer ml-1"
                  >
                    Send via email client →
                  </button>
                </div>
              )}

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-mono text-zinc-500">
                  Straight to inbox · &lt; 24h
                </span>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-900 text-sm font-medium transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending directly...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message · Let's Talk</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;