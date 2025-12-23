
import React from 'react';

const WorkingProcess: React.FC = () => {
  const steps = [
    { num: '01', title: 'Discovery & Strategy', desc: 'We start by understanding your vision, goals, and core target audience.' },
    { num: '02', numColor: '#FF9505', title: 'Design & Development', desc: 'Our creative team crafts the visuals and our engineers build the backbone.' },
    { num: '03', title: 'Launch & Growth', desc: 'The final product is deployed and we monitor its performance for success.' }
  ];

  return (
    <section className="py-24 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-black/5 rounded-full">
              <span className="text-xs font-bold uppercase tracking-widest text-[#6E00FF]">Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold clash-font leading-tight">Explore Our 3 Step Working Process</h2>
            <button className="px-8 py-4 bg-[#6E00FF] text-white rounded-xl font-bold hover:bg-[#111111] transition-all">
              Start Projects
            </button>
          </div>
          
          <div className="w-full lg:w-2/3 space-y-8">
            {steps.map((s, i) => (
              <div key={i} className="flex items-start gap-8 p-10 bg-white rounded-[40px] shadow-sm hover:shadow-xl transition-all group">
                <div className="text-5xl font-black clash-font text-black/10 group-hover:text-accent transition-colors shrink-0">
                  {s.num}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold clash-font">{s.title}</h3>
                  <p className="text-black/60 leading-relaxed text-lg">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
