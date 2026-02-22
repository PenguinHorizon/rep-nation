import React from 'react';
import Navbar from '../layout/Navbar';
import Hero from '../components/Hero';
import Counters from '../components/Counters';
import Services from '../components/Services';
import Workouts from '../components/Workouts';
import Testimonials from '../components/Testimonials';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#111418] text-white">
      <Navbar />
      <div id="home"><Hero /></div>
      <Counters />
      <div id="services"><Services /></div>
      <div id="workouts"><Workouts /></div>
      <div id="testimonials"><Testimonials /></div>
      {/* Additional sections can be added here */}
      <Footer />
    </div>
  );
};

export default Home;
