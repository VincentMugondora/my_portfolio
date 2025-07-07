import React from 'react';
import Navbar from '@/components/Navbar';
import PortfolioSection from '@/components/PortfolioSection';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';

const PortfolioPage: React.FC = () => {
  return (
    <div className="bg-[#111111] min-h-screen flex flex-col">
      <Navbar />
      <section className="flex flex-col items-center justify-center max-w-4xl mx-auto w-full px-6 pt-32 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
          My <span className="text-blue-400 italic font-bold">Portfolio</span>
        </h1>
        <p className="text-gray-400 mb-6 text-lg max-w-2xl">
          Explore a selection of my recent projects, showcasing my skills in web and mobile development, API integration, and more.
        </p>
      </section>
      {/* Stats Section */}
      <Stats />
      {/* Portfolio Grid Section */}
      <PortfolioSection />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Call to Action Section */}
      <section className="w-full py-16 px-4 bg-[#18181b] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your project?</h2>
        <p className="text-gray-400 mb-6 max-w-xl">
          Let&apos;s work together to build something amazing. Contact me to discuss your ideas, get a quote, or learn more about how I can help your business grow.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-transform duration-200 transform hover:scale-105 border border-blue-500"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
};

export default PortfolioPage; 