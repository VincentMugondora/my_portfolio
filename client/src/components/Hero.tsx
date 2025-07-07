import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Hero = () => {
  const router = useRouter();

  const handleContactRedirect = () => {
    if (router.pathname !== '/contact') {
      router.push('/contact');
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto w-full px-6 md:px-0 mt-8 md:mt-0 flex-1">
      {/* Left: Text */}
      <div className="flex-1 max-w-xl">
        <div className="flex items-center mb-4">
          <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
          <span className="text-sm text-gray-300">Available for Work</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          A <span className="text-blue-400 italic font-bold">Software Engineer</span><br />
          FROM Zimbabwe
        </h1>
        <p className="text-gray-400 mb-8 max-w-md">
          I earned a Bachelor of <span className="text-white font-semibold">Computer Science</span> because I love both problem-solving and technology. This passion led me to <span className="text-white font-semibold">software engineering</span>, where I blend creativity and logic to build impactful digital solutions.
        </p>
        <div className="flex space-x-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            onClick={handleContactRedirect}
          >
            Submit Your Request
          </button>
          <a
            href="/Vincent_Mugondora_CV.docx"
            download
            className="border border-gray-600 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-colors duration-200"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block mr-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            <span>Download CV</span>
          </a>
        </div>
      </div>
      {/* Right: Profile Image */}
      <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
        <div className="relative w-64 h-72 rounded-[2.5rem] bg-blue-700/30 flex items-center justify-center overflow-hidden">
          <Image
            src="/person.jpg"
            alt="Profile"
            width={260}
            height={320}
            className="object-cover w-full h-full rounded-[2.5rem]"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
