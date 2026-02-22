import React from 'react';

const ServiceItem = ({ title, image }) => {
  return (
    <div className="group flex items-center justify-between py-8 border-b border-gray-800 cursor-pointer hover:bg-white/5 transition-all duration-300">
      <div className="flex items-center gap-12">
        {/* Thumbnail */}
        <div className="w-40 h-24 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-500">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/* Title */}
        <h3 className="text-white text-3xl font-bold tracking-wider uppercase">
          {title}
        </h3>
      </div>

      {/* Diagonal Arrow */}
      <div className="text-[#e67e22] transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">
        <svg 
          viewBox="0 0 24 24" 
          className="w-10 h-10"
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
  );
};

const Services = () => {
  const services = [
    { 
      title: 'Boxing', 
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=600&auto=format&fit=crop' 
    },
    { 
      title: 'Yoga', 
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop' 
    },
    { 
      title: 'Bodybuilding', 
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600' 
    },
    { 
      title: 'Running', 
      image: 'https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?q=80&w=600&auto=format&fit=crop' 
    },
  ];

  return (
    <section className="bg-[#111418] py-32 px-8 md:px-24">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-white text-4xl font-bold mb-20 max-w-2xl leading-tight uppercase tracking-tight">
          We provide best service to <br /> 
          increase your confidence
        </h2>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <ServiceItem 
              key={index} 
              title={service.title} 
              image={service.image} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
