
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-24 border-b border-white/5">
           <div className="space-y-8">
              <a href="#" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#6E00FF] rounded-lg flex items-center justify-center">
                   <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
                </div>
                <span className="text-2xl font-bold tracking-tighter clash-font">Ritovex</span>
              </a>
              <p className="text-white/50 leading-relaxed">
                Empowering brands with cutting-edge design and strategic digital solutions. Your growth is our mission.
              </p>
              <div className="flex gap-4">
                {['fb', 'ig', 'tw', 'li'].map(social => (
                  <div key={social} className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent transition-colors flex items-center justify-center cursor-pointer font-bold">
                    {social.toUpperCase()}
                  </div>
                ))}
              </div>
           </div>
           
           <div>
              <h4 className="text-xl font-bold clash-font mb-8">Site Map</h4>
              <ul className="space-y-4 text-white/50">
                <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blogs</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Projects</a></li>
              </ul>
           </div>

           <div>
              <h4 className="text-xl font-bold clash-font mb-8">Support</h4>
              <ul className="space-y-4 text-white/50">
                <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Team Members</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Licenses</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Style Guide</a></li>
              </ul>
           </div>

           <div>
              <h4 className="text-xl font-bold clash-font mb-8">Newsletter</h4>
              <p className="text-white/50 mb-6">Get the latest tips for social media growth straight to your inbox.</p>
              <div className="relative">
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none" />
                <button className="absolute right-2 top-2 bottom-2 px-4 bg-accent rounded-lg text-sm font-bold">Join</button>
              </div>
           </div>
        </div>
        
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
           <p className="text-white/30 text-sm">© 2025 Ritovex. All Rights Reserved. Designed by <span className="text-accent">Matesflow</span></p>
           <div className="flex gap-8 text-sm text-white/30">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>
        
        {/* Huge Logo Background */}
        <div className="mt-24 pointer-events-none opacity-[0.02] flex justify-center">
           <h1 className="text-[20vw] font-black uppercase tracking-tighter clash-font">RITOVEX</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
