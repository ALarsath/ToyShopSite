'use client';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiHome, FiUsers, FiCamera, FiMail, FiHeart } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { Inter, Montserrat } from 'next/font/google';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', path: '/', icon: FiHome, color: 'text-pink-500' },
    { title: 'About Us', path: '/about', icon: FiUsers, color: 'text-purple-500' },
    { title: 'Gallery', path: '/gallery', icon: FiCamera, color: 'text-blue-500' },
    { title: 'Contact Us', path: '/contact', icon: FiMail, color: 'text-green-500' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-pink-100' 
        : 'bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50'
    }`}>
      <div className="  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
         {/* Logo and Title */}
            <Link href="/" className="group flex items-center ">
            {/* Main Logo */}
            <div className="w-16 h-16 relative">
                <Image
                src="/images/chella-trns-logo.png"
                alt="Chellamay Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
                />
            </div>

            {/* Wordmark Logo (Text Logo) */}
            <div className="h-12 relative">
                <Image
                src="/images/titlelogo.png" // Replace with your own path
                alt="Chellamay Text Logo"
                width={180} // or 200
                height={45} // or 50
                className="object-contain"
                priority
                />
            </div>
            </Link>

          {/* Desktop Menu with playful hover effects */}
          <div className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="relative group">
                  <Link href={item.path} className="flex items-center space-x-2 px-4 py-3 rounded-2xl bg-white/70 hover:bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <IconComponent className={`${item.color} text-lg group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-gray-700 font-medium group-hover:text-gray-900">
                      {item.title}
                    </span>
                  </Link>
                  {/* Cute tooltip on hover */}
                  
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button with fun animation */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            >
              <div className="relative">
                {isOpen ? (
                  <FiX className="text-white text-xl transform group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <FiMenu className="text-white text-xl transform group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with delightful animations */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out ${
        isOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-pink-100 shadow-2xl">
          <div className="px-4 py-6 space-y-3">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  href={item.path}
                  key={item.title}
                  onClick={() => setIsOpen(false)}
                  className={`w-full flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md ${
                    isOpen ? 'animate-slideIn' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${
                    item.color.includes('pink') ? 'from-pink-100 to-pink-200' :
                    item.color.includes('purple') ? 'from-purple-100 to-purple-200' :
                    item.color.includes('blue') ? 'from-blue-100 to-blue-200' :
                    'from-green-100 to-green-200'
                  } flex items-center justify-center`}>
                    <IconComponent className={`${item.color} text-lg`} />
                  </div>
                  <div className="text-left">
                    <span className="text-gray-800 font-semibold text-lg block">
                      {item.title}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {item.title === 'Home' && 'Welcome back!'}
                      {item.title === 'About Us' && 'Our story'}
                      {item.title === 'Gallery' && 'Cute photos'}
                      {item.title === 'Contact Us' && 'Get in touch'}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          
          {/* Fun footer in mobile menu */}
          <div className="border-t border-pink-100 px-4 py-4 bg-gradient-to-r from-pink-25 to-purple-25">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <FiHeart className="text-pink-400 animate-pulse" />
              <span className="text-sm font-medium">Made with love for babies</span>
              <FiHeart className="text-pink-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;