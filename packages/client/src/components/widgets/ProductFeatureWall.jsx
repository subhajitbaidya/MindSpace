import { useState } from "react";
import BookImg from "../../assets/images/atomic.png";
import NotGiving from "../../assets/images/notgiving.png";
import Dad from "../../assets/images//dad.png";
import Fault from "../../assets/images/fault.png";
import { ProductFeatureCard } from "./ProductFeatureCard";
import { toast } from "react-toastify";
import Notification from "../../lib/Notification";

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

const ProductFeatureWall = () => {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    newFavorites.has(productId)
      ? newFavorites.delete(productId)
      : newFavorites.add(productId);
    setFavorites(newFavorites);
  };

  const handleQuickAdd = (product) => {
    toast(`${product.name} added to cart`);
  };

  const handleViewDetails = (product) => {
    console.log("Viewing details for:", product.name);
    // Add your view details logic here
    alert(`Viewing details for "${product.name}"`);
  };

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Featured Products</h2>
        </div>
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductFeatureCard
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
      <Notification />
    </section>
  );
};

export default ProductFeatureWall;
