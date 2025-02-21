import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="relative h-[500px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://png.pngtree.com/background/20210709/original/pngtree-creative-synthesis-city-comic-real-estate-picture-image_916360.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Find Your Dream Home</h2>
          <p className="text-lg">Discover the perfect home for you and your family.</p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Browse Listings</button>
        </div>
      </header>

      {/* Featured Listings */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Featured Properties</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-56 object-cover" src={`https://www.favouritehomes.com/wp-content/uploads/2022/01/luxury-villa-life.jpg}`} alt="House" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Luxury Villa {item}</h3>
                <p className="text-gray-600">$500,000 - 4 Beds, 3 Baths</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
