import React, { useEffect, useState } from 'react';

const stats = [
  { value: 250, label: 'Creative Projects Delivered' },
  { value: 50, label: 'Happy Clients' },
  { value: 5, label: 'Years of Experience' },
  { value: 500, label: 'Hours of User Research' },
];

const AnimatedNumber = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200; 
    const stepTime = Math.max(Math.floor(duration / target), 20);
    const increment = Math.ceil(target / (duration / stepTime));
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [target]);

  // Pad with zero for '05'
  return <span>{target < 10 ? String(count).padStart(2, '0') : count}</span>;
};

const Stats = () => (
  <div className="w-full py-16 px-4 flex justify-center bg-[#111111]">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 md:gap-x-16 w-full max-w-6xl text-center">
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <span className="text-white text-5xl md:text-6xl font-semibold">
            <AnimatedNumber target={stat.value} />
          </span>
          <span className="text-gray-400 text-xs md:text-sm tracking-widest uppercase mt-2">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default Stats;
