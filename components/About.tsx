
import React from 'react';

const About: React.FC = () => {
  const stats = [
    { value: '256+', label: 'We deliver great work always', icon: '✨' },
    { value: '15+', label: 'Experience you can count on', icon: '⏳' },
    { value: '45+', label: 'Award-Winning Work, Trusted Results', icon: '🏆' },
    { value: '5K+', label: 'We have happy Clients worldwide', icon: '🤝' },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
             <div className="relative">
                <div className="rounded-[40px] overflow-hidden shadow-2xl">
                   <img src="https://picsum.photos/id/1/800/1000" alt="Team Meeting" className="w-full" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#6E00FF]/20 to-transparent pointer-events-none"></div>
             </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-4">
               <div className="flex items-center gap-2 text-accent">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                 <span className="text-sm font-bold uppercase tracking-wider">About Us</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-bold clash-font">Who We Are. Learn About Us</h2>
               <p className="text-black/60 text-lg leading-relaxed">
                 We are a dynamic team of innovators, storytellers, and visionaries dedicated to transforming ideas into extraordinary experiences.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5">
                   <div className="text-3xl mb-4">{stat.icon}</div>
                   <h3 className="text-4xl font-black clash-font text-[#6E00FF] mb-2">{stat.value}</h3>
                   <p className="text-sm text-black/50 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center gap-8 pt-4">
               <button className="px-8 py-4 bg-[#6E00FF] text-white rounded-xl font-bold hover:bg-[#111111] transition-all duration-300">
                 More About Us
               </button>
               <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-[#6E00FF] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#6E00FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-accent uppercase">Get free Quote</p>
                    <p className="font-black text-[#111111]">22 (00) 356 7890</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
