import React, { useState, useEffect } from 'react';

const AnimatedCounter = ({ endValue, label, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const end = parseInt(endValue);
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endValue]);

  return (
    <div className="flex flex-col">
      <span className="text-[#e67e22] text-5xl md:text-6xl font-light mb-2">
        {count}{suffix}
      </span>
      <span className="text-gray-400 text-sm md:text-base uppercase tracking-widest font-medium">
        {label}
      </span>
    </div>
  );
};

const Counters = () => {
  const stats = [
    { value: '10', label: 'Members', suffix: 'k+' },
    { value: '60', label: 'Partners', suffix: '+' },
    { value: '42', label: 'Best coach', suffix: '+' },
  ];

  return (
    <section className="bg-[#24292e] py-16 px-8 md:px-24">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side Text */}
        <div className="flex-1">
          <h2 className="text-[#e67e22] text-4xl md:text-5xl font-bold leading-tight max-w-sm">
            We raise your <br />
            Confidence
          </h2>
        </div>

        {/* Right Side Counters */}
        <div className="flex-[1.5] w-full flex flex-wrap justify-between md:justify-end gap-12 md:gap-24">
          {stats.map((stat, index) => (
            <AnimatedCounter 
              key={index} 
              endValue={stat.value} 
              label={stat.label} 
              suffix={stat.suffix} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Counters;
