'use client';
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/hero-1.jpg',
      title: 'Welcome to Chellamay Baby Shop',
      subtitle: 'Your Trusted Destination for Quality Baby Products in Tenkasi',
      cta: 'Explore Our Collection'
    },
    {
      image: '/images/hero-2.jpg',
      title: 'New Arrivals Every Week',
      subtitle: 'Discover the Latest in Baby Care, Toys, and More',
      cta: 'Shop New Arrivals'
    },
    {
      image: '/images/hero-3.jpg',
      title: 'Baby Care Essentials',
      subtitle: 'Premium Quality Products for Your Little One\'s Comfort',
      cta: 'Shop Baby Care'
    },
    {
      image: '/images/hero-4.jpg',
      title: 'Special Discounts',
      subtitle: 'Save Big on Selected Baby Products This Week',
      cta: 'View Offers'
    },
    {
      image: '/images/hero-5.jpg',
      title: 'Expert Baby Care Advice',
      subtitle: 'Get Tips and Guidance from Our Experienced Team',
      cta: 'Learn More'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    cssEase: 'cubic-bezier(0.87, 0, 0.13, 1)',
    beforeChange: (_, next) => setCurrentSlide(next),
    customPaging: i => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === currentSlide ? 'bg-pink-500 scale-125' : 'bg-gray-300'
        }`}
      />
    )
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[600px]">
            {/* Placeholder colored div until images are added */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-pink-200 to-blue-200"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center text-center px-4 max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
                {slide.subtitle}
              </p>
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg active:scale-95">
                {slide.cta}
              </button>
            </div>
          </div>
        ))}
      </Slider>git commit -m "first commit"
    </div>
  );
};

export default HeroSlider;
