import React from 'react';
import Navbar from '@/components/Navbar';
import Stats from '@/components/Stats';
import TopSkills from '@/components/TopSkills';
import ExperiencedServices from '../components/ExperiencedServices';
import Footer from '@/components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-[#111111] min-h-screen flex flex-col">
      <Navbar />
      {/* Hero/Intro Section */}
      <section className="flex flex-col items-center justify-center max-w-4xl mx-auto w-full px-6 pt-32 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
          My <span className="text-blue-400 italic font-bold">Services</span>
        </h1>
        <p className="text-gray-400 mb-6 text-lg max-w-2xl">
          I offer a range of software engineering services, from web and mobile app development to API integration and dashboard analytics. My focus is on delivering robust, scalable, and innovative solutions tailored to your business needs.
        </p>
      </section>
      {/* Stats Section */}
      <Stats />
      {/* Top Skills Section */}
      <TopSkills />
      {/* Experienced Services Section */}
      <ExperiencedServices />
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default ServicesPage; 