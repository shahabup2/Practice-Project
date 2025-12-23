
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#E4E4E4]/80 backdrop-blur-md border-b border-black/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#6E00FF] rounded-lg flex items-center justify-center">
               <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
            </div>
            <span className="text-2xl font-bold tracking-tighter clash-font">Ritovex</span>
          </a>
          
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Home</a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">About Us</a>
            <div className="relative group cursor-pointer">
              <span className="text-sm font-medium flex items-center gap-1 hover:text-accent">
                Company <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </span>
            </div>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Services</a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Projects</a>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-sm font-medium">
             <span>Cart (0)</span>
          </div>
          <a href="tel:22003567890" className="hidden xl:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group hover:bg-accent transition-all duration-300">
              <svg className="w-5 h-5 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div>
              <p className="text-[10px] uppercase opacity-60">Call Any Time</p>
              <p className="text-sm font-bold">22 (00) 356 7890</p>
            </div>
          </a>
          <button className="lg:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
