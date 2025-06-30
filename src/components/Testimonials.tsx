import React from 'react';

const testimonials = [
  {
    text: 'Shayan's designs are fantastic. Highly recommend!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    text: 'Shayan's design skills are top-notch. He transformed our app with his innovative UI/UX solutions.',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    text: 'Great work, Shayan! Efficient and creative.',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    text: 'Excellent UI/UX designer. Very pleased with his work.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    text: 'He transformed our app with his innovative UI/UX solutions.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    text: 'Great work, Shayan! Efficient and creative.',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    text: 'Shayan's designs are fantastic. Highly recommend!',
    avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
  },
  {
    text: 'Excellent UI/UX designer. Very pleased with his work.',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
];

const Testimonials = () => (
  <section className="w-full py-16 px-4 bg-[#111111]">
    <div className="max-w-6xl mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
        WHAT <span className="text-blue-500 italic">CLIENTS</span> <br className="hidden md:block" /> SAYING ABOUT ME
      </h2>
      {/* Testimonials Grid */}
      <div className="flex flex-wrap gap-4 justify-center">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-blue-600 text-white rounded-lg px-6 py-4 flex items-center gap-4 min-w-[260px] max-w-xs shadow-md"
          >
            <span className="text-2xl font-bold mr-2">"</span>
            <span className="flex-1 text-sm">{t.text}</span>
            <img
              src={t.avatar}
              alt="client avatar"
              className="w-9 h-9 rounded-full object-cover border-2 border-white shadow"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 