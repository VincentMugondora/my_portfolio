import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');
  const [token, setToken] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMsg('');
    setToken('');
    try {
      const res = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        setStatus('success');
        setMsg('Login successful!');
        setToken(data.token);
      } else {
        setStatus('error');
        setMsg(data.message || 'Login failed.');
      }
    } catch {
      setStatus('error');
      setMsg('Login failed.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#111111] px-4 py-12">
      <div className="w-full max-w-md bg-[#18181b] rounded-2xl shadow-lg p-8 border border-[#23272F]">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="bg-[#23272F] text-white px-4 py-3 rounded-md focus:border-blue-500 outline-none text-base border border-transparent focus:ring-2 focus:ring-blue-500/30 transition"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="bg-[#23272F] text-white px-4 py-3 rounded-md focus:border-blue-500 outline-none text-base border border-transparent focus:ring-2 focus:ring-blue-500/30 transition"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-transform duration-200 hover:scale-105 disabled:opacity-60 shadow-md"
          >
            {status === 'loading' ? 'Logging in...' : 'Login'}
          </button>
          {status === 'success' && <div className="text-green-400 text-sm mt-2">{msg}</div>}
          {status === 'error' && <div className="text-red-400 text-sm mt-2">{msg}</div>}
        </form>
        {token && (
          <div className="mt-6 break-all text-xs text-gray-400">
            <div className="mb-1 text-green-400 font-semibold">JWT Token:</div>
            <code>{token}</code>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage; 