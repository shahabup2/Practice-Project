
import React from 'react';

const Sponsors: React.FC = () => {
  const sponsors = [
    'Logoipsum', 'BrandName', 'Vertex', 'Alpha', 'Nova', 'Echo', 'Orbit'
  ];

  return (
    <section className="py-12 border-y border-black/5 bg-white/30">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium opacity-40 uppercase tracking-widest">Trusted Partners Worldwide for Success</p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="ticker-animation whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8">
              {sponsors.map((name, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span className="text-3xl font-black uppercase tracking-tighter clash-font">{name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
