import React from 'react';

const testimonials = [
  {
    text: "Shayan's designs are fantastic. Highly recommend!",
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    text: "Shayan's design skills are top-notch. He transformed our app with his innovative UI/UX solutions.",
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
    text: "Shayan's designs are fantastic. Highly recommend!",
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
      {/* Marquee Testimonials */}
      <div className="overflow-x-hidden relative">
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] group">
          {testimonials.concat(testimonials).map((t, idx) => (
            <div
              key={idx}
              className="bg-white/90 text-[#18181b] rounded-xl px-8 py-6 flex items-center gap-4 min-w-[320px] max-w-md shadow-lg border border-[#e5e7eb] font-medium transition-transform duration-300 group-hover:scale-105"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="text-2xl font-bold text-blue-600 mr-2">“</span>
              <span className="flex-1 text-base leading-relaxed">{t.text}</span>
              <img
                src={t.avatar}
                alt="client avatar"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-500 shadow"
              />
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 32s linear infinite;
            width: max-content;
          }
        `}</style>
      </div>
    </div>
  </section>
);

export default Testimonials; 