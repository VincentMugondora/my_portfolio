import React, { useState } from 'react';

const categories = ['All', 'Web App', 'API', 'Dashboard', 'Mobile'];

const projects = [
  {
    title: 'Fitness Tracker Web App',
    image: 'https://images.unsplash.com/photo-1637714409323-d5e6e9731252?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Web App',
  },
  {
    title: 'Salon Booking Platform',
    image: 'https://media.istockphoto.com/id/2172888389/photo/happy-customers-at-the-hair-salon.webp?a=1&b=1&s=612x612&w=0&k=20&c=4KLXNeqVozo-nkTHOo60FS2duADTybVORSVSBZE5kew=',
    category: 'Web App',
  },
  {
    title: 'DevOps Dashboard',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    category: 'Dashboard',
  },
  {
    title: 'Home Workout Mobile App',
    image: 'https://i.pinimg.com/736x/c1/0c/8c/c10c8c93e4e449161f2490a1d80883cd.jpg',
    category: 'Mobile',
  },
  {
    title: 'RESTful API Service',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    category: 'API',
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
            <div
              key={idx}
              className="bg-[#18181b] border border-[#23272F] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-2"
            >
              <div className="w-[100%] flex items-center justify-center p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full h-[100%] object-contain bg-[#23272F]"
                  style={{ maxHeight: 220 }}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-end">
                <h3 className="text-white text-lg font-semibold mb-3">{project.title}</h3>
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