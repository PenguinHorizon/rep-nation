import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: ['About', 'Terms of Use', 'Privacy Policy', 'How it works']
    },
    {
      title: 'Get Help',
      links: ['Support Carrier', '24h Service', 'Quick Chat']
    },
    {
      title: 'Support',
      links: ['FAQ', 'policy', 'Business']
    },
    {
      title: 'Download App',
      links: ['WhatsApp', 'Support 24']
    }
  ];

  return (
    <footer className="relative bg-[#0f1115] pt-24 pb-12 px-8 md:px-24 overflow-hidden border-t border-gray-900">
      {/* Background Decorative Layer (Gym-related) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e67e22]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-8 mb-20">
          
          {/* Logo and Socials */}
          <div className="space-y-10">
            <h2 className="text-white text-3xl font-black tracking-tighter">Fitted</h2>
            <div className="flex items-center space-x-6">
              {/* Social Icons Placeholder (Circular) */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#e67e22] flex items-center justify-center transition-all duration-300">
                <span className="text-white text-xs">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#e67e22] flex items-center justify-center transition-all duration-300">
                <span className="text-white text-xs">TW</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#e67e22] flex items-center justify-center transition-all duration-300">
                <span className="text-white text-xs">YT</span>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx} className="space-y-8">
              <h4 className="text-white text-lg font-bold tracking-tight">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 text-xs tracking-widest uppercase">
          <p>© 2024 FITTED. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
