
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-24 md:pb-40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-24">
          
          {/* Left Column: Typography */}
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-black/5 rounded-full">
              <span className="text-sm font-medium text-black/70">Creative Ideas That Inspire Growth</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] clash-font">
                World’s Best Creative Agency Team
              </h1>
              <p className="text-lg text-black/60 max-w-xl leading-relaxed">
                World’s best creative agency team – crafting legendary brands through bold ideas, strategic genius, and flawless execution that dominates the global stage.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <button className="px-10 py-5 bg-[#111111] text-white rounded-lg font-bold hover:bg-[#6E00FF] transition-all duration-300 transform hover:-translate-y-1">
                Get Started
              </button>
              <button className="flex items-center gap-3 group">
                <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  <svg className="w-6 h-6 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <span className="font-bold text-sm">Watch Demo</span>
              </button>
            </div>
          </div>
          
          {/* Right Column: Image with unique shape */}
          <div className="w-full lg:w-1/2 relative">
             <div className="relative z-10 custom-shape overflow-hidden border-[12px] border-white shadow-2xl">
                <img 
                  src="https://picsum.photos/id/64/800/800" 
                  alt="Agency Member" 
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-700"
                />
             </div>
             
             {/* Decorative Background Element */}
             <div className="absolute -bottom-10 -right-10 w-full h-full bg-[#6E00FF]/5 -z-10 custom-shape translate-x-4 translate-y-4"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
