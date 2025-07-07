import React from 'react';

const Dashboard: React.FC = () => {
  // In a real app, fetch user info from context or API
  const username = 'User';

  // Dummy stats and activity
  const stats = [
    { label: 'Projects', value: 5 },
    { label: 'Messages', value: 12 },
    { label: 'Tasks', value: 3 },
  ];
  const recentActivity = [
    { time: '2 hours ago', action: 'Logged in' },
    { time: '1 day ago', action: 'Updated profile' },
    { time: '3 days ago', action: 'Completed a project' },
  ];

  const handleLogout = () => {
    // Remove token if stored, then redirect
    // localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#111111] px-4 py-12">
      <div className="w-full max-w-3xl bg-[#18181b] rounded-2xl shadow-lg p-10 border border-[#23272F] flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white mb-2 text-center">Welcome back, <span className="text-blue-400">{username}</span>!</h1>
        <p className="text-gray-400 mb-8 text-center">Here&apos;s a quick overview of your account.</p>
        {/* Stats */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-[#23272F] rounded-xl px-6 py-6 flex flex-col items-center shadow text-center">
              <span className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</span>
              <span className="text-gray-300 text-sm uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
        {/* Recent Activity */}
        <div className="w-full mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
          <ul className="flex flex-col gap-3">
            {recentActivity.map((item, idx) => (
              <li key={idx} className="bg-[#23272F] rounded-lg px-5 py-3 flex justify-between items-center text-gray-300 shadow-sm">
                <span>{item.action}</span>
                <span className="text-xs text-gray-500">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={handleLogout}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-transform duration-200 hover:scale-105 shadow-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard; 