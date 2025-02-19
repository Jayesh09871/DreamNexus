import React, { useState } from "react";

const houses = [
  {
    id: 1,
    name: "Luxury Villa",
    price: 500000,
    image: "https://www.houseofhiranandani.com/vlogs/storage/2019/01/35.png"
  },
  {
    id: 2,
    name: "Villa",
    price: 300000,
    image: "https://is1-3.housingcdn.com/4f2250e8/5a27ccfea0ad1d3a89f0faf677eb30bd/v5/fs/hiranandani_villas-devanahalli-bengaluru-house_of_hiranandani.jpg"
  },
  {
    id: 3,
    name: "Big Villa",
    price: 200000,
    image: "https://d3oo9u3p09egds.cloudfront.net/filters:format(webp)/rental_property/colina-villa-h/01_Facade__10_.jpeg"
  },
  {
    id: 4,
    name: "Swimming pool Villa",
    price: 600000,
    image: "https://blog.lohono.com/wp-content/uploads/2024/03/MEG07501-HDR-683x1024.jpg"
  },
  {
    id: 5,
    name: "Luxury Beachfront Villas",
    price: 500000,
    image: "https://cloudfront.wheretostay.com/images/collections/headers/WTS-Collections-Beachfront-Banner-192.jpg"
  },
  {
    id: 6,
    name: "Modern Beach Villa",
    price: 300000,
    image: "https://architecturesstyle.b-cdn.net/wp-content/uploads/2021/01/modern-beach-house-3.jpg"
  },
  {
    id: 7,
    name: "Big Villa",
    price: 200000,
    image: "https://d3oo9u3p09egds.cloudfront.net/filters:format(webp)/rental_property/colina-villa-h/01_Facade__10_.jpeg"
  },
  {
    id: 8,
    name: "Swimming pool Villa",
    price: 600000,
    image: "https://blog.lohono.com/wp-content/uploads/2024/03/MEG07501-HDR-683x1024.jpg"
  },
  {
    id: 9,
    name: "Swimming pool Villa",
    price: 600000,
    image: "https://blog.lohono.com/wp-content/uploads/2024/03/MEG07501-HDR-683x1024.jpg"
  }
];

const Buy = () => {
  const [filterPrice, setFilterPrice] = useState(0);

  const filteredHouses = houses.filter(house => house.price >= filterPrice);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Buy Your Dream Home</h1>
      <div className="mb-6 flex justify-center">
        <input
          type="number"
          placeholder="Enter minimum price"
          className="p-2 border rounded-md"
          value={filterPrice}
          onChange={(e) => setFilterPrice(Number(e.target.value))}
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHouses.map((house) => (
          <div key={house.id} className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img src={house.image} alt={house.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{house.name}</h2>
              <p className="text-gray-600">${house.price.toLocaleString()}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;
