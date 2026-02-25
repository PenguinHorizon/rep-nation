import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', number: '01' },
    { name: 'Services', href: '#services', number: '02' },
    { name: 'Work Out', href: '#workouts', number: '03' },
    { name: 'Testimonials', href: '#testimonials', number: '04' },
  ];

  return (
    <nav className="absolute top-0 w-full z-50 px-8 py-10">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group">
          <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center shadow-lg shadow-[#e67e22]/20 transition-transform group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="text-white text-3xl font-black tracking-tighter">
            Rep Nation
          </div>
        </div>
        
        {/* Desktop Nav Links */}
        <div className="hidden lg:flex flex-grow justify-center pl-32">
          <div className="flex items-center space-x-12 text-sm font-bold text-gray-400">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className={`${link.name === 'Home' ? 'text-white' : 'hover:text-white'} transition-colors relative group`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#e67e22] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button className="px-8 py-3 bg-[#e67e22] hover:bg-[#d35400] text-white text-xs font-bold rounded-full transition-all duration-300 shadow-lg shadow-[#e67e22]/20 transform hover:-translate-y-1">
            Contact us
          </button>
        </div>

        {/* Hamburger Icon */}
        <button 
          className="lg:hidden text-white z-[60] p-2 hover:scale-110 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-8 h-6 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-500 ease-in-out ${isOpen ? 'rotate-[225deg] translate-y-2.5 bg-[#e67e22]' : ''}`}></span>
            <span className={`w-3/4 h-0.5 bg-white transition-all duration-300 self-end ${isOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-500 ease-in-out ${isOpen ? '-rotate-[225deg] -translate-y-2.5 bg-[#e67e22]' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[50] transition-opacity duration-500 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsOpen(false)}
      ></div>
      
      {/* Mobile Drawer Content */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[500px] bg-[#0f1115] z-[55] transform transition-transform duration-700 cubic-bezier(0.77, 0, 0.175, 1) lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Background Layers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[#e67e22]/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 -left-20 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]"></div>
          {/* Subtle Gym Grid/Pattern Overlay could go here */}
          <div className="absolute inset-0 grayscale brightness-[0.2] opacity-30" style={{backgroundImage: "url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800')", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        </div>

        <div className="relative h-full flex flex-col justify-center px-12 md:px-20 z-10">
          {/* Vertical Menu Label */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden sm:block">
             <span className="[writing-mode:vertical-lr] rotate-180 text-gray-700 uppercase tracking-[0.5em] text-[10px] font-black">
               Rep Nation Navigation
             </span>
          </div>

          <div className="space-y-10">
            {navLinks.map((link, index) => (
              <div 
                key={link.name} 
                className={`transform transition-all duration-500 delay-[${index * 100}ms] ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
              >
                <a 
                  href={link.href} 
                  className="group flex items-baseline space-x-6"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#e67e22] text-sm font-black tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity">
                    {link.number}
                  </span>
                  <span className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase transition-transform group-hover:translate-x-4 duration-300">
                    {link.name}
                  </span>
                </a>
              </div>
            ))}
          </div>

          <div className={`mt-20 transform transition-all duration-700 delay-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <button className="w-full sm:w-auto px-12 py-5 bg-[#e67e22] text-white text-sm font-black uppercase tracking-widest rounded-full shadow-2xl shadow-[#e67e22]/30 hover:scale-105 transition-transform duration-300">
              Get Started Now
            </button>
            <div className="mt-12 flex space-x-6">
               <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Instagram</span>
               <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Twitter</span>
            </div>
          </div>
        </div>

        {/* Diagonal Line Aesthetic */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gray-800 to-transparent"></div>
      </div>
    </nav>
  );
};

export default Navbar;
