import React from 'react';
import Image from 'next/image';
import Stats from '@/components/Stats';
import Hero from '@/components/Hero';
import ExperiencedServices from '@/components/ExperiencedServices';
import TopSkills from '@/components/TopSkills';
import PortfolioSection from '@/components/PortfolioSection';
import Testimonials from '@/components/Testimonials';

const Home: React.FC = () => {
  return (
    <div className="bg-[#111111] min-h-screen text-white flex flex-col justify-between">

      {/* Hero Section */}
      <Hero />
      <Stats />
      <ExperiencedServices />
      <TopSkills />
      <PortfolioSection />
      <Testimonials />
    </div>
  );
};

export default Home;
