import React, { useState } from "react";

const rentals = [
  {
    id: 1,
    name: "Luxury Villa",
    price: 2000,
    image: "https://www.houseofhiranandani.com/vlogs/storage/2019/01/35.png",
    description: "A luxurious villa with modern amenities and spacious rooms."
  },
  {
    id: 2,
    name: "Villa",
    price: 1500,
    image: "https://is1-3.housingcdn.com/4f2250e8/5a27ccfea0ad1d3a89f0faf677eb30bd/v5/fs/hiranandani_villas-devanahalli-bengaluru-house_of_hiranandani.jpg",
    description: "Cozy villa with a beautiful garden and peaceful surroundings."
  },
  {
    id: 3,
    name: "Big Villa",
    price: 1200,
    image: "https://d3oo9u3p09egds.cloudfront.net/filters:format(webp)/rental_property/colina-villa-h/01_Facade__10_.jpeg",
    description: "Spacious villa perfect for families with all essential facilities."
  },
  {
    id: 4,
    name: "Swimming Pool Villa",
    price: 2500,
    image: "https://blog.lohono.com/wp-content/uploads/2024/03/MEG07501-HDR-683x1024.jpg",
    description: "Elegant villa with a private swimming pool and scenic views."
  },
  {
    id: 1,
    name: "Luxury Villa",
    price: 2000,
    image: "https://www.houseofhiranandani.com/vlogs/storage/2019/01/35.png",
    description: "A luxurious villa with modern amenities and spacious rooms."
  },
  {
    id: 2,
    name: "Villa",
    price: 1500,
    image: "https://is1-3.housingcdn.com/4f2250e8/5a27ccfea0ad1d3a89f0faf677eb30bd/v5/fs/hiranandani_villas-devanahalli-bengaluru-house_of_hiranandani.jpg",
    description: "Cozy villa with a beautiful garden and peaceful surroundings."
  },
  {
    id: 3,
    name: "Big Villa",
    price: 1200,
    image: "https://d3oo9u3p09egds.cloudfront.net/filters:format(webp)/rental_property/colina-villa-h/01_Facade__10_.jpeg",
    description: "Spacious villa perfect for families with all essential facilities."
  },
  {
    id: 4,
    name: "Swimming Pool Villa",
    price: 2500,
    image: "https://blog.lohono.com/wp-content/uploads/2024/03/MEG07501-HDR-683x1024.jpg",
    description: "Elegant villa with a private swimming pool and scenic views."
  }
];

const Rent = () => {
  const [filterPrice, setFilterPrice] = useState(0);

  const filteredRentals = rentals.filter(rental => rental.price >= filterPrice);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Rent Your Perfect Home</h1>
      <div className="mb-6 flex justify-center">
        <input
          type="number"
          placeholder="Enter minimum rent price"
          className="p-2 border rounded-md"
          value={filterPrice}
          onChange={(e) => setFilterPrice(Number(e.target.value))}
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRentals.map((rental) => (
          <div key={rental.id} className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img src={rental.image} alt={rental.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{rental.name}</h2>
              <p className="text-gray-600">${rental.price.toLocaleString()} / month</p>
              <p className="text-gray-500 text-sm mt-2">{rental.description}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rent;
