import React from 'react';

const services = [
  {
    number: '01',
    title: 'Web App Development',
    description: 'Building robust, scalable, and responsive web applications tailored to client needs using modern frameworks and best practices.',
    projects: '10 Projects',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" className="mb-4"><rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2"/><path d="M3 9h18" strokeWidth="2"/><path d="M7 13h2" strokeWidth="2"/><path d="M15 13h2" strokeWidth="2"/></svg>
    ),
  },
  {
    number: '02',
    title: 'Mobile App Development',
    description: 'Creating high-quality, user-friendly mobile applications for Android and iOS platforms with seamless performance.',
    projects: '04 Projects',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" className="mb-4"><rect x="7" y="2" width="10" height="20" rx="2" strokeWidth="2"/><circle cx="12" cy="18" r="1" strokeWidth="2"/></svg>
    ),
  },
  {
    number: '03',
    title: 'API Integration',
    description: 'Integrating third-party APIs and developing custom APIs to enable powerful features and connectivity in applications.',
    projects: '03 Projects',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" className="mb-4"><path d="M12 19V5" strokeWidth="2"/><circle cx="12" cy="5" r="2" strokeWidth="2"/><path d="M12 19c-2.5 0-4.5-2-4.5-4.5S9.5 10 12 10s4.5 2 4.5 4.5S14.5 19 12 19z" strokeWidth="2"/></svg>
    ),
  },
  {
    number: '04',
    title: 'Dashboard Development',
    description: 'Designing and building interactive dashboards for effective data visualization, analytics, and business insights.',
    projects: '02 Projects',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" className="mb-4"><rect x="3" y="7" width="18" height="10" rx="2" strokeWidth="2"/><path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" strokeWidth="2"/><path d="M7 17v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2" strokeWidth="2"/></svg>
    ),
  },
];

const ExperiencedServices = () => (
  <section className="w-full py-16 px-4 bg-[#111111]">
    <div className="max-w-6xl mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
        MOST <span className="text-blue-500 italic">EXPERINCED</span> <br className="hidden md:block" /> SERVICES
      </h2>
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-[#18181b] rounded-xl p-8 flex flex-col items-start text-left shadow-sm min-h-[320px]"
          >
            {service.icon}
            <span className="text-xs text-gray-500 mb-2">{service.number}</span>
            <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm mb-6 flex-1">{service.description}</p>
            <span className="text-blue-500 font-semibold text-xs">{service.projects}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperiencedServices; 