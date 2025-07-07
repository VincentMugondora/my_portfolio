import React from 'react';

const skills = [
  {
    name: 'JavaScript',
    percent: 85,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="transition-colors duration-300 group-hover:fill-[#F7DF1E] group-hover:text-black"><rect width="48" height="48" rx="12" fill="#23272F" className="group-hover:fill-[#F7DF1E]"/><text x="50%" y="60%" textAnchor="middle" fill="#6B7280" fontSize="20" fontWeight="bold" fontFamily="Arial" className="group-hover:fill-black">Js</text></svg>
    ),
    hoverColor: '#F7DF1E',
  },
  {
    name: 'React',
    percent: 80,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="transition-colors duration-300"><rect width="48" height="48" rx="12" fill="#23272F" className="group-hover:fill-[#23272F]"/><g className="group-hover:stroke-[#61DAFB]" stroke="#6B7280"><ellipse cx="24" cy="24" rx="10" ry="18" strokeWidth="2"/><ellipse cx="24" cy="24" rx="18" ry="10" strokeWidth="2"/><circle cx="24" cy="24" r="3" fill="#6B7280" className="group-hover:fill-[#61DAFB]"/></g></svg>
    ),
    hoverColor: '#61DAFB',
  },
  {
    name: 'TypeScript',
    percent: 75,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="transition-colors duration-300"><rect width="48" height="48" rx="12" fill="#23272F" className="group-hover:fill-[#3178C6]"/><text x="50%" y="60%" textAnchor="middle" fill="#6B7280" fontSize="20" fontWeight="bold" fontFamily="Arial" className="group-hover:fill-white">Ts</text></svg>
    ),
    hoverColor: '#3178C6',
  },
  {
    name: 'Node.js',
    percent: 70,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="transition-colors duration-300"><rect width="48" height="48" rx="12" fill="#23272F" className="group-hover:fill-[#3C873A]"/><text x="50%" y="60%" textAnchor="middle" fill="#6B7280" fontSize="20" fontWeight="bold" fontFamily="Arial" className="group-hover:fill-white">Nd</text></svg>
    ),
    hoverColor: '#3C873A',
  },
  {
    name: 'MongoDB',
    percent: 65,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="transition-colors duration-300"><rect width="48" height="48" rx="12" fill="#23272F" className="group-hover:fill-[#47A248]"/><text x="50%" y="60%" textAnchor="middle" fill="#6B7280" fontSize="18" fontWeight="bold" fontFamily="Arial" className="group-hover:fill-white">MDB</text></svg>
    ),
    hoverColor: '#47A248',
  },
  {
    name: 'Python',
    percent: 80,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="transition-colors duration-300"><rect width="48" height="48" rx="12" fill="#23272F" className="group-hover:fill-[#3776AB]"/><text x="50%" y="60%" textAnchor="middle" fill="#6B7280" fontSize="20" fontWeight="bold" fontFamily="Arial" className="group-hover:fill-white">Py</text></svg>
    ),
    hoverColor: '#3776AB',
  },
  {
    name: 'FastAPI',
    percent: 70,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="transition-colors duration-300"><rect width="48" height="48" rx="12" fill="#23272F" className="group-hover:fill-[#009688]"/><text x="50%" y="60%" textAnchor="middle" fill="#6B7280" fontSize="18" fontWeight="bold" fontFamily="Arial" className="group-hover:fill-white">FA</text></svg>
    ),
    hoverColor: '#009688',
  },
];

const TopSkills = () => (
  <section className="w-full py-16 px-4 bg-[#111111]">
    <div className="max-w-6xl mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
        TOP <span className="text-blue-500 italic">PROFESSIONAL</span> <br className="hidden md:block" /> SKILLS
      </h2>
      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-[#18181b] rounded-xl flex flex-col items-center justify-center p-6 min-h-[140px] group cursor-pointer transition-all duration-300"
          >
            {skill.icon}
            <span className="block mt-4 mb-2" />
            <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TopSkills; 