
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Jakob Alison',
      role: 'Project Manager at Triko',
      text: 'Their expertise and creative solutions were impressive. The final product exceeded my expectations and truly captures our brand essence.',
      img: 'https://picsum.photos/id/1011/100/100'
    },
    {
      name: 'Alisa Olivia',
      role: 'CTO at Ritovex',
      text: 'Throughout the process, they kept me informed and involved, ensuring I was happy with the direction. Highly professional team.',
      img: 'https://picsum.photos/id/1027/100/100'
    },
    {
      name: 'Jordan Walk',
      role: 'Engineer at Briks',
      text: 'I especially appreciated their attention to detail. Working with them was a true pleasure. They are responsive and communicative.',
      img: 'https://picsum.photos/id/1005/100/100'
    }
  ];

  return (
    <section className="py-24 bg-[#E4E4E4] overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
         <div className="space-y-4 max-w-2xl mx-auto">
           <div className="inline-flex items-center gap-2 px-4 py-1 bg-black/5 rounded-full">
              <span className="text-xs font-bold uppercase tracking-widest text-[#6E00FF]">Testimonials</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-bold clash-font">What Our Clients are Saying</h2>
           <p className="text-black/60">Hear directly from our clients about their experiences and the results we've delivered.</p>
         </div>
      </div>

      <div className="flex overflow-hidden">
        <div className="ticker-animation py-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 px-4">
              {reviews.map((r, idx) => (
                <div key={idx} className="w-[450px] p-10 bg-white rounded-[40px] shadow-sm border border-black/5 flex flex-col justify-between shrink-0">
                  <div className="space-y-6">
                    <div className="flex gap-1 text-accent">
                      {[...Array(5)].map((_, s) => <span key={s}>★</span>)}
                    </div>
                    <p className="text-lg text-black/70 italic leading-relaxed">"{r.text}"</p>
                  </div>
                  <div className="flex items-center gap-4 mt-8">
                     <img src={r.img} alt={r.name} className="w-14 h-14 rounded-full border-2 border-[#6E00FF]" />
                     <div>
                       <h4 className="font-bold">{r.name}</h4>
                       <p className="text-xs text-black/40 font-medium uppercase tracking-wider">{r.role}</p>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
