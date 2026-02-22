import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full z-50 px-8 py-10">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-3xl font-black tracking-tighter">
          Fitted
        </div>
        
        {/* Nav Links - Positioned to center-right */}
        <div className="hidden lg:flex flex-grow justify-center pl-32">
          <div className="flex items-center space-x-12 text-sm font-bold text-gray-400">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="hover:text-white transition-colors">Membership</a>
            <a href="#" className="hover:text-white transition-colors">Team</a>
            <a href="#" className="hover:text-white transition-colors">About Us</a>
          </div>
        </div>

        {/* CTA */}
        <button className="px-8 py-3 bg-[#e67e22] hover:bg-[#d35400] text-white text-xs font-bold rounded-full transition-all duration-300">
          Contact us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
