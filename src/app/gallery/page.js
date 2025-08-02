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
      image: '/images/gallery-1.jpg',
      category: 'new-arrivals',
      title: 'Baby Play Mat'
    },
    {
      id: 2,
      image: '/images/gallery-2.jpg',
      category: 'baby-toys',
      title: 'Soft Plush Toy'
    },
    // Add more items here
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
            {/* Placeholder items */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-blue-100" />
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Placeholder Image
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
