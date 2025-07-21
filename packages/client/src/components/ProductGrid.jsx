import { useState } from "react";

import BookImg from "../assets/images/atomic.png";

const products = [
  {
    id: 1,
    name: "Wireless Pro Headphones",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 234,
    image: BookImg,
    badge: "Best Seller",
    description: "Premium noise-canceling headphones with 30-hour battery life",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199,
    originalPrice: 249,
    rating: 4.9,
    reviews: 156,
    image: BookImg,
    badge: "New",
    description: "Track your fitness goals with advanced health monitoring",
  },
  {
    id: 3,
    name: "Urban Explorer Backpack",
    price: 129,
    originalPrice: 159,
    rating: 4.7,
    reviews: 89,
    image: BookImg,
    badge: "Limited",
    description: "Durable and stylish backpack for modern adventurers",
  },
  {
    id: 4,
    name: "Wireless Speaker Pro",
    price: 159,
    originalPrice: 199,
    rating: 4.6,
    reviews: 112,
    image: BookImg,
    badge: "Popular",
    description: "360° sound with deep bass and crystal-clear highs",
  },
];

const ProductShowcase = () => {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    newFavorites.has(productId)
      ? newFavorites.delete(productId)
      : newFavorites.add(productId);
    setFavorites(newFavorites);
  };

  return (
    <section id="products" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium tech products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            // Placeholder for Card Component
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group transition duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-blue-200 text-blue-800 px-2 py-1 text-xs rounded">
                  {product.badge}
                </span>
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 text-red-500 hover:text-red-700"
                >
                  {favorites.has(product.id) ? "❤️" : "🤍"}
                </button>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-black text-white w-full py-2 text-sm rounded">
                    🛒 Quick Add
                  </button>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
                  {"★".repeat(Math.floor(product.rating)) +
                    "☆".repeat(5 - Math.floor(product.rating))}
                  <span className="text-xs text-gray-500 ml-1">
                    ({product.reviews})
                  </span>
                </div>

                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-green-600">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="text-sm text-blue-600 hover:underline">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded text-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
