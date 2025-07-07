import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

const faqs = [
  {
    q: 'How quickly do you respond to inquiries?',
    a: 'I typically respond within 24 hours on business days.'
  },
  {
    q: 'What information should I include in my message?',
    a: 'Please include your project goals, timeline, and any specific requirements.'
  },
  {
    q: 'Do you offer consultations?',
    a: 'Yes, I offer free initial consultations to discuss your project needs.'
  },
];

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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9]">
      <Navbar />
      <section className="flex flex-col items-center justify-center max-w-3xl mx-auto w-full px-6 pt-32 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-gray-900">
          Contact <span className="text-blue-600 italic font-bold">Vincent</span>
        </h1>
        <p className="text-gray-600 mb-6 text-lg max-w-2xl">
          I&apos;d love to hear from you. Whether you have a question, want to discuss a project, or just want to say hello, my inbox is always open.
        </p>
      </section>
      <section className="flex flex-col md:flex-row items-start justify-center w-full px-4 pb-16 gap-12">
        {/* Contact Card */}
        <div className="shadow-none rounded-2xl p-8 flex flex-col items-start max-w-sm w-full mx-auto md:mx-0 bg-transparent border-none">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 rounded-full p-2">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#fff"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.5" strokeWidth="2"/><path d="M3 6l9 6 9-6" strokeWidth="2"/></svg>
            </div>
            <div>
              <div className="text-gray-900 text-lg font-bold">Vincent Mugondora</div>
              <div className="text-gray-500 text-sm">Software Engineer</div>
            </div>
          </div>
          <div className="mb-2">
            <span className="block text-gray-700 text-sm font-medium">Email</span>
            <a href="mailto:vincentmugondora@gmail.com" className="text-blue-600 underline text-sm">vincentmugondora@gmail.com</a>
          </div>
          <div className="mb-2">
            <span className="block text-gray-700 text-sm font-medium">Phone</span>
            <a href="tel:+263778123456" className="text-blue-600 underline text-sm">+263 778 123 456</a>
          </div>
          <div className="mb-2">
            <span className="block text-gray-700 text-sm font-medium">Location</span>
            <span className="text-gray-500 text-sm">Harare, Zimbabwe</span>
          </div>
          <div className="mb-2">
            <span className="block text-gray-700 text-sm font-medium">LinkedIn</span>
            <a href="https://www.linkedin.com/in/vincent-mugondora-7b2a922b3" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">linkedin.com/in/vincent-mugondora</a>
          </div>
        </div>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-xl bg-[#18181b] border border-[#23272F] rounded-2xl shadow-lg p-8 flex flex-col gap-6 mx-auto md:mx-0">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-200 font-medium text-sm">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="bg-[#23272F] text-white px-4 py-3 rounded-lg border border-[#23272F] focus:border-blue-500 outline-none text-base w-full transition-all duration-200"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-200 font-medium text-sm">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="bg-[#23272F] text-white px-4 py-3 rounded-lg border border-[#23272F] focus:border-blue-500 outline-none text-base w-full transition-all duration-200"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-200 font-medium text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="bg-[#23272F] text-white px-4 py-3 rounded-lg border border-[#23272F] focus:border-blue-500 outline-none text-base w-full min-h-[120px] transition-all duration-200"
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-transform duration-200 transform hover:scale-105 border border-blue-500 disabled:opacity-60"
          >
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
          </button>
          {status === 'success' && <div className="text-green-600 text-sm mt-2">{msg}</div>}
          {status === 'error' && <div className="text-red-600 text-sm mt-2">{msg}</div>}
        </form>
      </section>
      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto w-full px-6 pb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl p-0 shadow-none bg-transparent border-none">
              <div className="font-semibold text-gray-800 mb-2">{faq.q}</div>
              <div className="text-gray-600 text-sm">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 