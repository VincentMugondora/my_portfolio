import * as React from 'react';

const faqs = [
  {
    q: 'How soon will I get a response?',
    a: 'I typically respond within 24 hours on business days.'
  },
  {
    q: 'Do you offer free consultations?',
    a: 'Yes, I offer a free initial consultation to discuss your project needs.'
  },
  {
    q: 'What information should I include in my message?',
    a: 'Please include your project goals, timeline, and any specific requirements.'
  },
];

const ContactPage: React.FC = () => {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = React.useState('');

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
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black px-4 py-12">
      <main className="w-full max-w-2xl flex flex-col items-center">
        <section className="w-full text-center mb-12 mt-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Contact Me</h1>
          <p className="text-gray-400 mb-6 text-lg">Have a project in mind or want to connect? Fill out the form below or email me directly at <a href="mailto:vincentmugondora@gmail.com" className="text-blue-400 underline">vincentmugondora@gmail.com</a>.</p>
        </section>
        <section className="w-full flex flex-col items-center">
          <div className="w-full bg-[#18181b] rounded-2xl shadow-lg p-10 flex flex-col gap-8 mb-12 border border-[#23272F]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="bg-[#23272F] text-white px-4 py-3 rounded-md focus:border-blue-500 outline-none text-base border border-transparent focus:ring-2 focus:ring-blue-500/30 transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="bg-[#23272F] text-white px-4 py-3 rounded-md focus:border-blue-500 outline-none text-base border border-transparent focus:ring-2 focus:ring-blue-500/30 transition"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="bg-[#23272F] text-white px-4 py-3 rounded-md focus:border-blue-500 outline-none text-base min-h-[120px] border border-transparent focus:ring-2 focus:ring-blue-500/30 transition"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-transform duration-200 hover:scale-105 disabled:opacity-60 shadow-md"
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
              </button>
              {status === 'success' && <div className="text-green-400 text-sm mt-2">{msg}</div>}
              {status === 'error' && <div className="text-red-400 text-sm mt-2">{msg}</div>}
            </form>
            <div className="mt-4 text-gray-400 text-sm text-center">
              <div className="mb-1">Email: <a href="mailto:vincentmugondora@gmail.com" className="text-blue-400 underline">vincentmugondora@gmail.com</a></div>
              <div className="mb-1">Phone: <a href="tel:+263778123456" className="text-blue-400 underline">+263 778 123 456</a></div>
              <div className="mb-1">Location: <span className="text-gray-300">Harare, Zimbabwe</span></div>
              <div>LinkedIn: <a href="https://www.linkedin.com/in/vincent-mugondora-7b2a922b3" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">vincent-mugondora</a></div>
            </div>
          </div>
        </section>
        <section className="w-full mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-6 items-center">
            {faqs.map((faq, idx) => (
              <div key={idx} className="w-full max-w-xl rounded-xl p-6 bg-[#18181b] border border-[#23272F] shadow-md">
                <div className="font-semibold text-gray-200 mb-2">{faq.q}</div>
                <div className="text-gray-400 text-sm">{faq.a}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full text-center mb-8">
          <h3 className="text-xl font-semibold text-white mb-2">Ready to start your project?</h3>
          <p className="text-gray-300 mb-4">Let&apos;s work together to build something amazing. Reach out and I&apos;ll get back to you as soon as possible.</p>
          <a href="mailto:vincentmugondora@gmail.com" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-transform duration-200 hover:scale-105 shadow-md">Contact Me</a>
        </section>
      </main>
    </div>
  );
};

export default ContactPage; 