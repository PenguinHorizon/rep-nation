import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-[#111418] overflow-hidden flex flex-col md:flex-row">
      {/* Left Content Area (Dark Background) */}
      <div className="relative flex-[1.2] h-full flex flex-col justify-center pt-44 md:pt-48 px-8 md:px-24 z-10">
        {/* Scroll Down Vertical Indicator */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center space-y-6">
          <span className="[writing-mode:vertical-lr] rotate-180 text-gray-500 uppercase tracking-[0.4em] text-[11px] font-bold py-4">
            Scroll Down
          </span>
          <div className="h-20 w-px bg-gray-700 relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2 w-px bg-white"></div>
          </div>
          <svg
            className="w-4 h-4 text-white transform rotate-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>

        {/* Hero Title */}
        <div className="max-w-2xl">
          <h1 className="text-white text-6xl md:text-[5.5rem] font-bold leading-[1.1] mb-12 tracking-tight">
            Keep your
            body healthy <br /> & in shape
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed mb-20">
            In order to stay in shape and stay healthy, it is necessary to take
            a variety of steps, including a balanced and nutritious diet...
          </p>

          {/* Large Diagonal Arrow Icon */}
          <div className="w-16 h-16 flex items-center justify-center cursor-pointer hover:bg-white/5 rounded-full transition-colors mb-20 md:mb-0">
            <svg
              viewBox="0 0 24 24"
              className="w-12 h-12 text-white transform hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>
      </div>

      {/* Right Content Area (Image with Cut) */}
      <div className="relative flex-1 h-full overflow-visible">
        {/* The Clipped Image Container */}
        <div
          className="absolute inset-x-0 inset-y-0 bg-[#16191e] z-0"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 55%, 25% 45%, 25% 0)",
            // Note: Adjusting clip-path for more precision based on screenshot
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 100%, 0 65%, 0 0)",
          }}
        >
          <img
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Bodybuilder"
            className="w-full h-full object-cover grayscale brightness-[0.4] contrast-125"
          />
          {/* Subtle Blending Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111418] via-transparent to-transparent opacity-60"></div>
          <div className="absolute inset-0 bg-[#e67e22]/5 mix-blend-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
