import Navbar from '@/components/Navbar'
import React from 'react'
import Stats from '@/components/Stats'
import TopSkills from '@/components/TopSkills'
import ExperiencedServices from '@/components/ExperiencedServices'
import Footer from '@/components/Footer'
import Image from 'next/image'

function AboutPage() {
  return (
    <div className="bg-[#111111] min-h-screen flex flex-col">
      <Navbar />
      {/* Hero/About Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto w-full px-6 md:px-0 pt-32 pb-16 gap-12">
        {/* Left: Profile & Bio */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
            About <span className="text-blue-400 italic font-bold">Vincent Mugondora</span>
          </h1>
          <p className="text-gray-400 mb-6 text-lg">
            Hi! I'm Vincent, a passionate <span className="text-white font-semibold">Software Engineer</span> from Zimbabwe. I specialize in building robust, scalable, and innovative digital solutions. With a Bachelor of Computer Science and a love for both problem-solving and technology, I blend creativity and logic to deliver impactful results for clients worldwide.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="/Vincent_Mugondora_CV.docx"
              download
              className="border border-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-colors duration-200"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block mr-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              <span>Download CV</span>
            </a>
            <a
              href="mailto:vincentmugondora@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="relative w-64 h-72 rounded-[2.5rem] bg-blue-700/30 flex items-center justify-center overflow-hidden shadow-lg">
            <Image
              src="/person.jpg"
              alt="Vincent Mugondora"
              width={260}
              height={320}
              className="object-cover w-full h-full rounded-[2.5rem]"
              priority
            />
          </div>
        </div>
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
  )
}

export default AboutPage