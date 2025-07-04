import React from 'react';
import Image from 'next/image';
import Stats from '@/components/Stats';
import Hero from '@/components/Hero';
import ExperiencedServices from '@/components/ExperiencedServices';
import TopSkills from '@/components/TopSkills';
import PortfolioSection from '@/components/PortfolioSection';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';

const Home: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <Hero />
      <Stats />
      <ExperiencedServices />
      <TopSkills />
      <PortfolioSection />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Home;
