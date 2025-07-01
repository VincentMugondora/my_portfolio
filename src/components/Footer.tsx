import React, { useState } from 'react';
import Image from 'next/image';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterMsg, setNewsletterMsg] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('loading');
    setNewsletterMsg('');
    try {
      const res = await fetch('/api/send-newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const data = await res.json();
      if (res.ok) {
        setNewsletterStatus('success');
        setNewsletterMsg(data.message || 'Thank you for subscribing!');
        setNewsletterEmail('');
      } else {
        setNewsletterStatus('error');
        setNewsletterMsg(data.message || 'Failed to subscribe.');
      }
    } catch {
      setNewsletterStatus('error');
      setNewsletterMsg('Failed to subscribe.');
    }
  };

  return (
    <footer className="w-full bg-gradient-to-t from-[#18181b] via-[#23272F] to-[#18181b] text-gray-400 pt-12 pb-6 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* Logo & Trustpilot */}
        <div className="flex flex-col gap-4 min-w-[200px]">
          <div className="flex items-center gap-2">
            <Image src="/person.png" alt="Vincent Mugondora" width={36} height={36} className="rounded-full" />
            <span className="font-bold text-white text-lg">Vincent</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/vercel.svg" alt="Trustpilot" width={60} height={18} />
            <div className="flex flex-col text-xs">
              <span className="text-green-400 font-semibold">4.9/5 on Trustpilot</span>
              <span className="text-gray-500">635 reviews</span>
            </div>
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex flex-col gap-2 min-w-[260px]">
          <div className="font-semibold text-white mb-1 text-left text-lg">Newsletter</div>
          <div className="text-xs mb-2 text-left text-gray-300">Enter Your E-mail & Get the Latest Updates</div>
          <form className="w-full" onSubmit={handleNewsletterSubmit}>
            <div className="flex items-center bg-[#181c2f] rounded-2xl px-2 py-1 shadow-inner border border-[#23272F] focus-within:border-blue-500 transition-all">
              <input
                type="email"
                placeholder="info@gmail.com"
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                className="flex-1 bg-transparent outline-none border-none px-3 py-2 text-gray-200 text-sm placeholder-gray-500"
                required
              />
              <button type="submit" disabled={newsletterStatus==='loading'} className="ml-2 h-9 w-9 flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 transition-all shadow-md">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            {newsletterStatus==='success' && <div className="text-green-400 text-xs mt-2">{newsletterMsg}</div>}
            {newsletterStatus==='error' && <div className="text-red-400 text-xs mt-2">{newsletterMsg}</div>}
          </form>
        </div>
        {/* Products */}
        <div className="flex flex-col gap-2 min-w-[120px]">
          <div className="font-semibold text-white mb-1">Products</div>
          <a href="#" className="hover:text-blue-400 transition text-sm">Features</a>
          <a href="#" className="hover:text-blue-400 transition text-sm">Pricing</a>
          <a href="#" className="hover:text-blue-400 transition text-sm">About us</a>
        </div>
        {/* User Center */}
        <div className="flex flex-col gap-2 min-w-[120px]">
          <div className="font-semibold text-white mb-1">User Center</div>
          <a href="#" className="hover:text-blue-400 transition text-sm">Feed</a>
          <a href="#" className="hover:text-blue-400 transition text-sm">E-commerce</a>
        </div>
        {/* Resources */}
        <div className="flex flex-col gap-2 min-w-[120px]">
          <div className="font-semibold text-white mb-1">Resources</div>
          <a href="#" className="hover:text-blue-400 transition text-sm">E-learning</a>
          <a href="#" className="hover:text-blue-400 transition text-sm">Blog</a>
          <a href="#" className="hover:text-blue-400 transition text-sm">FAQ</a>
        </div>
        {/* Company */}
        <div className="flex flex-col gap-2 min-w-[120px]">
          <div className="font-semibold text-white mb-1">Company</div>
          <a href="#" className="hover:text-blue-400 transition text-sm">About us</a>
          <a href="#" className="hover:text-blue-400 transition text-sm">Career</a>
          <a href="#" className="hover:text-blue-400 transition text-sm">Personal</a>
          <a href="#" className="hover:text-blue-400 transition text-sm">Contact Us</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between mt-8 border-t border-[#23272F] pt-4 gap-4 text-xs text-gray-500">
        <div>&copy; {new Date().getFullYear()} Vincent Mugondora. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-400 transition">Terms & Conditions</a>
          <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition">Cookies Setting</a>
        </div>
        <div className="flex gap-3">
          <a href="https://github.com/vinmugondora" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-400 transition">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
          </a>
          <a href="https://linkedin.com/in/vincent-mugondora" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 