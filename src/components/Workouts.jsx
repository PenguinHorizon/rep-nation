import React from 'react';

const Workouts = () => {
  return (
    <section className="bg-[#111418] py-32 px-8 md:px-24 space-y-40">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section 1: Work out at home */}
        <div className="flex flex-col md:flex-row items-center gap-20">
          {/* Left Side: Layered Images */}
          <div className="flex-1 relative h-[400px] md:h-[500px] w-full">
            {/* Background Image (Top Right) */}
            <div className="absolute right-0 top-0 w-3/4 h-3/4 overflow-hidden rounded-sm grayscale opacity-30 blur-[1px]">
               <img 
                src="https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Gym Background" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Foreground Image (Bottom Left) */}
            <div className="absolute left-0 bottom-0 w-3/4 h-3/4 overflow-hidden rounded-sm shadow-2xl z-10 border border-gray-800">
              <img 
                src="https://images.pexels.com/photos/4058411/pexels-photo-4058411.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Working out at home" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 space-y-8">
            <h2 className="text-white text-3xl md:text-6xl font-bold leading-tight">
              For free, you can <br className="hidden md:block" />
              work out at home
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using...
            </p>
            <button className="px-10 py-4 bg-[#e67e22] hover:bg-[#d35400] text-white text-sm font-bold rounded-full transition-all duration-300 transform hover:scale-105">
              Learn more
            </button>
          </div>
        </div>

        {/* Section 2: Health Journey (Reversed) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-20">
          {/* Right Side: Image */}
          <div className="flex-1 relative h-[400px] md:h-[500px] w-full">
            <div className="w-full h-full overflow-hidden rounded-sm grayscale brightness-75 contrast-125 border border-gray-800">
               <img 
                src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Bodybuilder lifting weights" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Left Side: Content */}
          <div className="flex-1 space-y-8">
            <h2 className="text-white text-3xl md:text-6xl font-bold leading-tight">
              With us, you can start <br className="hidden md:block" />
              your health journey
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Lets be here to grow together with others, don't hesitate to start good habits. Make yourself up from that bed of laziness, be a good life.
            </p>
            <button className="px-10 py-4 bg-[#e67e22] hover:bg-[#d35400] text-white text-sm font-bold rounded-full transition-all duration-300 transform hover:scale-105">
              Join now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Workouts;
