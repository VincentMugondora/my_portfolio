import React, { useState } from 'react';

const categories = ['All', 'Website', 'Apps', 'Branding'];

const projects = [
  {
    title: 'Cardio Exercise',
    image: '/portfolio1.png',
    category: 'Website',
  },
  {
    title: 'Best Haircut Salon',
    image: '/portfolio2.png',
    category: 'Website',
  },
  {
    title: 'Designing & Deploying Things',
    image: '/portfolio3.png',
    category: 'Website',
  },
  {
    title: 'Workout at Home',
    image: '/portfolio4.png',
    category: 'Apps',
  },
];

const PortfolioSection = () => {
  const [selected, setSelected] = useState('All');
  const filtered = selected === 'All' ? projects : projects.filter(p => p.category === selected);

  return (
    <section className="w-full py-16 px-4 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8">
          RECENT <span className="text-blue-500 italic">BEST WORK</span> <br className="hidden md:block" /> PORTFOLIO
        </h2>
        {/* Filters */}
        <div className="flex justify-center gap-4 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-5 py-1.5 rounded-full font-semibold text-sm transition-colors duration-200 ${selected === cat ? 'bg-blue-600 text-white' : 'bg-[#18181b] text-gray-400 hover:bg-blue-900 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
          {filtered.map((project, idx) => (
            <div key={idx} className="bg-[#18181b] rounded-2xl overflow-hidden shadow flex flex-col">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 flex items-center justify-center">
                {/* Replace with real images */}
                <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-end">
                <h3 className="text-white text-lg font-semibold mb-2">{project.title}</h3>
                <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
        {/* View All Projects Button */}
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full font-semibold transition-colors duration-200">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection; 