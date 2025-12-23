
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-[#111111] rounded-[60px] overflow-hidden shadow-2xl">
          
          {/* Left: Info */}
          <div className="w-full lg:w-2/5 p-12 md:p-20 bg-[#6E00FF] text-white flex flex-col justify-between space-y-12">
             <div className="space-y-6">
                <h2 className="text-5xl font-bold clash-font leading-tight">Let’s Start Talk</h2>
                <p className="text-white/80 text-lg">Have a project in mind? Just let us know and we will get back to you within 24 hours.</p>
             </div>
             
             <div className="space-y-8">
               <div className="flex items-center gap-6">
                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                 </div>
                 <div>
                   <p className="text-xs uppercase font-bold text-white/60">Email Address</p>
                   <p className="text-lg font-bold">hello@ritovex.com</p>
                 </div>
               </div>
               <div className="flex items-center gap-6">
                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                 </div>
                 <div>
                   <p className="text-xs uppercase font-bold text-white/60">Visit Agency</p>
                   <p className="text-lg font-bold">Springfield, USA</p>
                 </div>
               </div>
             </div>
          </div>
          
          {/* Right: Form */}
          <div className="w-full lg:w-3/5 p-12 md:p-20 bg-[#111111]">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="text-white/60 text-sm font-bold uppercase tracking-wider">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#6E00FF] transition-all" placeholder="John Doe" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-white/60 text-sm font-bold uppercase tracking-wider">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#6E00FF] transition-all" placeholder="john@example.com" />
                 </div>
               </div>
               <div className="space-y-2">
                  <label className="text-white/60 text-sm font-bold uppercase tracking-wider">Project Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#6E00FF] transition-all">
                    <option>Web Development</option>
                    <option>Branding & Design</option>
                    <option>Mobile App</option>
                    <option>Other</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-white/60 text-sm font-bold uppercase tracking-wider">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#6E00FF] transition-all" placeholder="Tell us about your project..."></textarea>
               </div>
               
               <button className="w-full py-5 bg-accent text-white rounded-xl font-bold hover:bg-[#6E00FF] transition-all shadow-lg hover:shadow-accent/20">
                 Send Message Now
               </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
