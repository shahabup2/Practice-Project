
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      id: '01',
      name: 'Strategy & Research',
      desc: 'Focuses on the core business values and market landscape to ensure every design choice is backed by data and strategic vision.',
      img: 'https://picsum.photos/id/20/400/300'
    },
    {
      id: '02',
      name: 'Design & Branding',
      desc: 'Creating unique identities and immersive user experiences that resonate with audiences and build long-lasting brand loyalty.',
      img: 'https://picsum.photos/id/42/400/300'
    },
    {
      id: '03',
      name: 'Development & Launch',
      desc: 'Engineering high-performance digital products with the latest technologies, ensuring a seamless launch and scalable growth.',
      img: 'https://picsum.photos/id/36/400/300'
    }
  ];

  return (
    <section className="py-24 bg-[#111111] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 space-y-6">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Services</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-bold clash-font">Your Needs, Our Expertise</h2>
           <p className="text-white/60 text-lg">Your Vision, Our Expertise — Together, we bring ideas to life with tailored solutions that deliver real results. Let’s build something amazing.</p>
        </div>

        <div className="space-y-0">
          {services.map((s) => (
            <div key={s.id} className="service-row group relative border-t border-white/10 py-12 lg:py-20 transition-all duration-500 hover:bg-white/5 px-6 -mx-6 flex flex-col lg:flex-row items-center justify-between cursor-pointer">
              
              <div className="flex items-center gap-8 lg:gap-16 w-full lg:w-auto">
                <span className="service-number text-2xl font-bold text-white/20 transition-colors duration-300">{s.id}</span>
                <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold clash-font">{s.name}</h3>
              </div>

              <div className="mt-6 lg:mt-0 lg:max-w-md w-full opacity-60 group-hover:opacity-100 transition-opacity">
                <p className="text-lg leading-relaxed">{s.desc}</p>
              </div>

              <div className="service-arrow hidden lg:flex w-16 h-16 rounded-full border border-white/20 items-center justify-center transition-all duration-300 shrink-0 ml-8">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>

              {/* Hover Image Preview */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 -rotate-12 group-hover:rotate-0 z-20">
                 <div className="w-[300px] h-[200px] rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                 </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
