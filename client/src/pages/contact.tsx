import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMsg('');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMsg('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setMsg(data.message || 'Failed to send message.');
      }
    } catch {
      setStatus('error');
      setMsg('Failed to send message.');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#111111] overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-blue-700/40 via-blue-400/30 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/30 via-blue-400/10 to-purple-400/20 rounded-full blur-2xl animate-pulse" />
      </div>
      <Navbar />
      <section className="flex flex-col items-center justify-center max-w-4xl mx-auto w-full px-6 pt-32 pb-8 text-center z-10 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg">
          Get in <span className="text-blue-400 italic font-bold">Touch</span>
        </h1>
        <p className="text-gray-300 mb-6 text-lg max-w-2xl">
          Have a project in mind or want to connect? Fill out the form below or email me directly at <a href="mailto:vincentmugondora@gmail.com" className="text-blue-400 underline">vincentmugondora@gmail.com</a>.
        </p>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center w-full px-4 pb-16 gap-12 z-10 relative">
        {/* Contact Card */}
        <div className="bg-gradient-to-br from-blue-700/60 via-blue-900/40 to-[#23272F] border border-blue-700/30 shadow-2xl rounded-3xl p-8 flex flex-col items-center mb-10 md:mb-0 max-w-sm w-full animate-fade-in">
          <div className="bg-blue-600 rounded-full p-3 mb-4 shadow-lg">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#fff"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.5" strokeWidth="2"/><path d="M3 6l9 6 9-6" strokeWidth="2"/></svg>
          </div>
          <div className="text-white text-lg font-bold mb-2">Vincent Mugondora</div>
          <div className="text-gray-400 text-sm mb-2">Software Engineer</div>
          <a href="mailto:vincentmugondora@gmail.com" className="text-blue-400 underline text-sm mb-2">vincentmugondora@gmail.com</a>
          <a href="https://www.linkedin.com/in/vincent-mugondora-7b2a922b3" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline text-sm">LinkedIn</a>
        </div>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-xl bg-[#18181b]/90 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 border border-[#23272F] animate-fade-in">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="bg-[#23272F] text-white px-12 py-3 rounded-lg border border-[#23272F] focus:border-blue-500 outline-none text-base w-full transition-all duration-200 shadow-sm"
              required
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" strokeWidth="2"/></svg>
            </span>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="bg-[#23272F] text-white px-12 py-3 rounded-lg border border-[#23272F] focus:border-blue-500 outline-none text-base w-full transition-all duration-200 shadow-sm"
              required
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.5" strokeWidth="2"/><path d="M3 6l9 6 9-6" strokeWidth="2"/></svg>
            </span>
          </div>
          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="bg-[#23272F] text-white px-12 py-3 rounded-lg border border-[#23272F] focus:border-blue-500 outline-none text-base w-full min-h-[120px] transition-all duration-200 shadow-sm"
              required
            />
            <span className="absolute left-4 top-6 text-blue-400">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 4v16h16V4H4zm2 2h12v12H6V6zm2 2v8h8V8H8z" strokeWidth="2"/></svg>
            </span>
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-gradient-to-tr from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-transform duration-200 transform hover:scale-105 border border-blue-500 disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
            ) : status === 'success' ? (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#fff"><path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ) : (
              'Send Message'
            )}
          </button>
          {status === 'success' && <div className="text-green-400 text-sm mt-2 animate-fade-in">{msg}</div>}
          {status === 'error' && <div className="text-red-400 text-sm mt-2 animate-fade-in">{msg}</div>}
        </form>
      </section>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
};

export default ContactPage; 