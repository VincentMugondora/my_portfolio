import React from 'react';

const stats = [
  { value: '250', label: 'Creative Projects Delivered' },
  { value: '50', label: 'Happy Clients' },
  { value: '05', label: 'Years of Experience' },
  { value: '500', label: 'Hours of User Research' },
];

const Stats = () => (
  <div className="w-full py-16 px-4 flex justify-center bg-[#111111]">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 md:gap-x-16 w-full max-w-6xl text-center">
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <span className="text-white text-5xl md:text-6xl font-semibold">{stat.value}</span>
          <span className="text-gray-400 text-xs md:text-sm tracking-widest uppercase mt-2">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default Stats;
