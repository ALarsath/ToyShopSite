'use client';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'new-arrivals', label: 'New Arrivals' },
    { id: 'baby-toys', label: 'Baby Toys' },
    { id: 'educational', label: 'Educational Toys' },
    { id: 'gifts', label: 'Gifts' },
  ];

  // Example gallery items (replace with actual items)
  const items = [
    {
      id: 1,
      image: '/images/gallerypics/gal1.jpg',
      category: 'new-arrivals',
      title: 'Baby Care Essentials'
    },
    {
      id: 2,
      image: '/images/gallerypics/gal2.jpg',
      category: 'baby-toys',
      title: 'Educational Toys Set'
    },
    {
      id: 3,
      image: '/images/gallerypics/gal3.jpg',
      category: 'gifts',
      title: 'Baby Gift Collection'
    },
    {
      id: 4,
      image: '/images/gallerypics/gal4.jpeg',
      category: 'educational',
      title: 'Learning Tools'
    },
    {
      id: 5,
      image: '/images/gallerypics/gal5.jpeg',
      category: 'new-arrivals',
      title: 'Baby Fashion'
    },
    {
      id: 6,
      image: '/images/gallerypics/gal6.jpeg',
      category: 'baby-toys',
      title: 'Interactive Playtime'
    },
    {
      id: 7,
      image: '/images/gallerypics/gal7.jpeg',
      category: 'educational',
      title: 'Baby Development Tools'
    }
  ];

  const filteredItems = items.filter(
    item => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <Layout>
      <div className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of quality toys and baby products
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-pink-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
