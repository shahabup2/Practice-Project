
import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'SmartCity Traffic Solution',
      category: 'Web Development',
      date: 'August 23, 2025',
      desc: 'AI-powered sensors reduced downtown traffic congestion by 35% weekly.',
      img: 'https://picsum.photos/id/119/800/600'
    },
    {
      title: 'ShopEasy E-Commerce Platform',
      category: 'UI/UX Design',
      date: 'July 15, 2025',
      desc: 'Boosted online sales 200% with lightning-fast, mobile-friendly checkout flows.',
      img: 'https://picsum.photos/id/160/800/600'
    }
  ];

  return (
    <section className="py-24 bg-[#E4E4E4]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
           <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-black/5 rounded-full">
                 <span className="text-xs font-bold uppercase tracking-widest text-[#6E00FF]">Portfolio</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold clash-font">Explore Our Real Works</h2>
           </div>
           <button className="px-8 py-4 border border-black/10 rounded-xl font-bold hover:bg-[#111111] hover:text-white transition-all">
             View All Projects
           </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <div key={i} className="group cursor-pointer">
               <div className="relative rounded-[40px] overflow-hidden aspect-[4/3] mb-8 border-8 border-white shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-0 left-0 w-full h-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-white font-bold transform scale-50 group-hover:scale-100 transition-transform duration-500">View</div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/20 backdrop-blur-md rounded-3xl border border-white/20">
                     <div className="flex items-center gap-4 text-white text-xs font-bold uppercase tracking-widest">
                       <span>{p.category}</span>
                       <div className="w-1 h-1 rounded-full bg-accent"></div>
                       <span>{p.date}</span>
                     </div>
                  </div>
               </div>
               
               <div className="space-y-2 px-4">
                  <h3 className="text-3xl font-bold clash-font group-hover:text-[#6E00FF] transition-colors">{p.title}</h3>
                  <p className="text-black/60 text-lg leading-relaxed">{p.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
