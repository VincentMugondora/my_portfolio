import React, { useState } from 'react';

const interests = ['UI UX', 'Website', 'App', 'Branding'];

const ContactSection = () => {
  const [selected, setSelected] = useState('UI UX');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, interest: selected }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await res.json();
        setError(data.message || 'Failed to send email');
        setStatus('error');
      }
    } catch (err) {
      setError('Failed to send email');
      setStatus('error');
    }
  };

  return (
    <section className="w-full py-16 px-4 bg-[#111111] flex justify-center">
      <div className="w-full max-w-6xl bg-[#18181b] rounded-3xl shadow-lg flex flex-col md:flex-row p-8 md:p-16 gap-10">
        {/* Left: Heading & Contact Info */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 leading-tight">
            LET'S WORK<br />TOGETHER ON YOUR<br />NEXT <span className="text-blue-500 italic">PROJECT</span>
          </h2>
          <div className="flex items-center gap-4 mb-4 text-gray-300">
            {/* Phone Icon */}
            <svg width="22" height="22" fill="none" stroke="#3b82f6" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.91 19.91 0 0 1 3 5.09 1 1 0 0 1 4 4h4.09a1 1 0 0 1 1 .75l1.13 4.52a1 1 0 0 1-.29 1L8.21 12.21a16 16 0 0 0 7.58 7.58l1.94-1.94a1 1 0 0 1 1-.29l4.52 1.13a1 1 0 0 1 .75 1V21z"/></svg>
            <div>
              <div className="text-sm font-semibold text-white">Phone</div>
              <div className="text-sm">+23777530322</div>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4 text-gray-300">
            {/* Email Icon */}
            <svg width="22" height="22" fill="none" stroke="#3b82f6" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6 12 13 2 6"/></svg>
            <div>
              <div className="text-sm font-semibold text-white">Email</div>
              <div className="text-sm">vincent@uncommon.org<br/>vinmugondora@gmail.com</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            {/* Location Icon */}
            <svg width="22" height="22" fill="none" stroke="#3b82f6" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21c-4.418 0-8-5.373-8-10A8 8 0 0 1 20 11c0 4.627-3.582 10-8 10z"/><circle cx="12" cy="11" r="3"/></svg>
            <div>
              <div className="text-sm font-semibold text-white">Address</div>
              <div className="text-sm">17 Tagutapadare<br/>Mufakose Harare</div>
            </div>
          </div>
        </div>
        {/* Right: Form */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-4 text-gray-300 text-sm">I'm Interested in,</div>
          <div className="flex gap-3 mb-6 flex-wrap">
            {interests.map((interest) => (
              <button
                key={interest}
                type="button"
                onClick={() => setSelected(interest)}
                className={`px-5 py-1.5 rounded-full font-semibold text-sm border transition-all duration-200 shadow-sm
                  ${selected === interest
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md scale-105'
                    : 'bg-[#23272F] text-gray-300 border-[#23272F] hover:bg-blue-900 hover:text-white hover:border-blue-500 hover:shadow-md'}
                `}
              >
                {interest}
              </button>
            ))}
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} className="flex-1 bg-[#23272F] border border-[#23272F] rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-blue-500" />
              <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="flex-1 bg-[#23272F] border border-[#23272F] rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-blue-500" />
            </div>
            <input name="subject" type="text" placeholder="Subject" value={form.subject} onChange={handleChange} className="bg-[#23272F] border border-[#23272F] rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-blue-500" />
            <textarea name="message" placeholder="Message" rows={4} value={form.message} onChange={handleChange} className="bg-[#23272F] border border-[#23272F] rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-blue-500 resize-none" />
            <button type="submit" disabled={status==='loading'} className="w-full bg-[#23272F] border border-[#23272F] text-gray-300 rounded-lg py-2 font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 mt-2">{status==='loading' ? 'Sending...' : 'Lets talk'}</button>
            {status==='success' && <div className="text-green-400 text-sm mt-2">Message sent successfully!</div>}
            {status==='error' && <div className="text-red-400 text-sm mt-2">{error}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 