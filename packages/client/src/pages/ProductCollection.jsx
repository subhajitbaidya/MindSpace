import { useState } from "react";
import BookImg from "../assets/images/atomic.png";
import NotGiving from "../assets/images/notgiving.png";
import Dad from "../assets/images/dad.png";
import Fault from "../assets/images/fault.png";
import ProductCard from "../components/widgets/ProductCard";
import { toast } from "react-toastify";

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
    author: "James Clear",
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
    author: "Mark Manson",
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
    description: "Life",
    author: "Robert Kiyosaki",
  },
  {
    id: 4,
    name: "Fault in our Stars",
    price: 159,
    originalPrice: 199,
    rating: 4.6,
    reviews: 112,
    image: Fault,
    badge: "Popular",
    description: "Fiction",
    author: "John Green",
  },
];

const ProductCollection = () => {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    newFavorites.has(productId)
      ? newFavorites.delete(productId)
      : newFavorites.add(productId);
    setFavorites(newFavorites);
  };

  const handleQuickAdd = (product) => {
    toast.success(`${product.name} added to cart`);
  };

  const handleViewDetails = (product) => {
    toast.info(`Viewing details for "${product.name}"`);
  };

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Our Book Collection</h2>
          <p className="text-gray-500">Pick your favorite today!</p>
        </div>

        <div className="grid grid-cols-3 gap-4 p-4 m-4">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onFavoriteToggle={toggleFavorite}
              isFavorite={favorites.has(product.id)}
              onQuickAdd={handleQuickAdd}
              onViewDetails={handleViewDetails}
              className="animate-fade-in-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCollection;
