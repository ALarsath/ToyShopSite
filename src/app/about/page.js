'use client';
import Layout from '@/components/layout/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Chellamay Baby Shop
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted destination for quality baby products in Tenkasi since our establishment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 text-gray-600">
              <p>
                Welcome to Chellamay Baby Shop, where we understand that every child is unique and special. 
                Our journey began with a simple mission: to provide parents with high-quality, safe, and 
                affordable baby products that contribute to their children's growth and development.
              </p>
              <p>
                We take pride in offering a carefully curated selection of products, from educational toys 
                and safety gear to comfortable clothing and essential accessories. Our experienced team is 
                always ready to help you find the perfect items for your little ones.
              </p>
              <p>
                At Chellamay Baby Shop, we believe in building lasting relationships with our customers. 
                Your trust and satisfaction are our top priorities, and we strive to maintain the highest 
                standards in everything we do.
              </p>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-blue-100" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Our Mission',
                content: 'To provide safe, high-quality baby products that support child development and bring joy to families.'
              },
              {
                title: 'Our Vision',
                content: 'To be the most trusted baby shop in Tenkasi, known for exceptional products and customer service.'
              },
              {
                title: 'Our Values',
                content: 'Quality, Safety, Customer Satisfaction, and Community Engagement are at the heart of everything we do.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
