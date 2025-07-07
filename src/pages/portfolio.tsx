import React from 'react';
import Navbar from '@/components/Navbar';
import PortfolioSection from '@/components/PortfolioSection';

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
      <PortfolioSection />
    </div>
  );
};

export default PortfolioPage; 