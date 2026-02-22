import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jacob Jones',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image: 'https://images.pexels.com/photos/1431284/pexels-photo-1431284.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Eleanor Pena',
      text: 'Consecutive adispicing elit. Sapiente, voluptatum. Quisquam, quos. Quisquam, quos. Quisquam, quos.',
      image: 'https://images.pexels.com/photos/1552248/pexels-photo-1552248.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Leslie Alexander',
      text: 'Magnam, quia. Voluptatem, quia. Quisquam, quos. Quisquam, quos. Quisquam, quos.',
      image: 'https://images.pexels.com/photos/2261145/pexels-photo-2261145.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="bg-[#1a1c21] py-32 px-8 md:px-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
                {/* Image Container */}
                <div className="flex-shrink-0 w-full md:w-[450px] aspect-square relative">
                  <div className="absolute inset-0 bg-gray-800 rounded-sm overflow-hidden z-10">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  {/* Layered Effect */}
                  <div className="absolute -top-4 -left-4 w-full h-full border border-gray-700 rounded-sm z-0"></div>
                </div>

                {/* Content Container */}
                <div className="flex-1 space-y-10 relative">
                  {/* Quote Icon */}
                  <div className="text-white text-7xl font-serif opacity-50 mb-4 select-none">
                    “
                  </div>
                  <p className="text-gray-300 text-2xl md:text-3xl leading-relaxed font-light italic">
                    {item.text}
                  </p>
                  <div>
                    <h4 className="text-white text-2xl font-bold tracking-wide">
                      {item.name}
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
          margin-top: 4rem;
          text-align: right !important;
        }
        .testimonial-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #4a5568 !important;
          opacity: 1 !important;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #e67e22 !important;
          width: 12px;
          height: 12px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
