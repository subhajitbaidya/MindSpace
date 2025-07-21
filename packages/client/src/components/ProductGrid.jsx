import { useState } from "react";
import { Card } from "@mui/material";

import BookImg from "../assets/images/atomic.png";
import NotGiving from "../assets/images/notgiving.png";
import Dad from "../assets/images/dad.png";
import Fault from "../assets/images/fault.png";

const products = [
  {
    id: 1,
    name: "Atomic Habits",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 234,
    image: BookImg,
    badge: "Best Seller",
    description: "Mind booster/productivity",
  },
  {
    id: 2,
    name: "Not Giving a F**K",
    price: 199,
    originalPrice: 249,
    rating: 4.9,
    reviews: 156,
    image: NotGiving,
    badge: "New",
    description: "Mind booster/productivity",
  },
  {
    id: 3,
    name: "Rich Dad Poor Dad",
    price: 129,
    originalPrice: 159,
    rating: 4.7,
    reviews: 89,
    image: Dad,
    badge: "Limited",
    description: "life",
  },
  {
    id: 4,
    name: "Fault in our stars",
    price: 159,
    originalPrice: 199,
    rating: 4.6,
    reviews: 112,
    image: Fault,
    badge: "Popular",
    description: "Fiction",
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
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Featured Products</h2>
          <br />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="rounded-lg shadow-lg overflow-hidden transition duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded font-medium">
                  {product.badge}
                </span>
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 text-red-500 hover:text-red-700"
                >
                  {favorites.has(product.id) ? "❤️" : "🤍"}
                </button>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 to-transparent p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
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

                <h3 className="font-semibold text-lg mb-1 hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-green-600">
                      Rs{product.price}
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
