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
    <div className="bg-[#111111] min-h-screen flex flex-col">
      <Navbar />
      <section className="flex flex-col items-center justify-center max-w-4xl mx-auto w-full px-6 pt-32 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
          Get in <span className="text-blue-400 italic font-bold">Touch</span>
        </h1>
        <p className="text-gray-400 mb-6 text-lg max-w-2xl">
          Have a project in mind or want to connect? Fill out the form below or email me directly at <a href="mailto:vincentmugondora@gmail.com" className="text-blue-400 underline">vincentmugondora@gmail.com</a>.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center w-full px-4 pb-16">
        <form onSubmit={handleSubmit} className="w-full max-w-xl bg-[#18181b] rounded-2xl shadow-lg p-8 flex flex-col gap-6 border border-[#23272F]">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="bg-[#23272F] text-white px-4 py-3 rounded-lg border border-[#23272F] focus:border-blue-500 outline-none text-base"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="bg-[#23272F] text-white px-4 py-3 rounded-lg border border-[#23272F] focus:border-blue-500 outline-none text-base"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="bg-[#23272F] text-white px-4 py-3 rounded-lg border border-[#23272F] focus:border-blue-500 outline-none text-base min-h-[120px]"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-transform duration-200 transform hover:scale-105 border border-blue-500 disabled:opacity-60"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <div className="text-green-400 text-sm mt-2">{msg}</div>}
          {status === 'error' && <div className="text-red-400 text-sm mt-2">{msg}</div>}
        </form>
        <div className="mt-10 text-gray-400 text-sm text-center">
          <div>Or email me at <a href="mailto:vincentmugondora@gmail.com" className="text-blue-400 underline">vincentmugondora@gmail.com</a></div>
          <div className="mt-2">Connect on <a href="https://www.linkedin.com/in/vincent-mugondora-7b2a922b3" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">LinkedIn</a></div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 