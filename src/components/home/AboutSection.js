'use client';

const AboutSection = () => {

  return (
    <section className="py-16 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Chellamay Baby Shop
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Welcome to Chellamay Baby Shop, your trusted destination for all things baby in Tenkasi. 
                Since our establishment, we have been dedicated to providing the highest quality baby products 
                to our valued customers.
              </p>
              <p>
                Our carefully curated selection includes everything from educational toys and safety gear 
                to comfortable clothing and essential accessories. We understand that every child is unique, 
                which is why we offer a diverse range of products to suit different needs and preferences.
              </p>
              <p>
                At Chellamay Baby Shop, we prioritize safety, quality, and customer satisfaction. Our team 
                is committed to helping you find the perfect products for your little ones, making your 
                shopping experience both enjoyable and rewarding.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-pink-200">
              {/* Replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-pink-100 to-blue-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
