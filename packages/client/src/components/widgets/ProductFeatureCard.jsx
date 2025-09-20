import { useNavigate } from "react-router-dom";
export const ProductFeatureCard = ({
  product,
  index = 0,
  onFavoriteToggle,
  isFavorite = false,
  onQuickAdd,
  onViewDetails,
  className = "",
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:-translate-y-2 ${className}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded font-medium">
            {product.badge}
          </span>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => onFavoriteToggle?.(product.id)}
          className="absolute top-3 right-3 bg-white rounded-full p-2 text-red-500 hover:text-red-700 transition-colors"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onQuickAdd?.(product)}
            className="bg-black text-white w-full py-2 text-sm rounded hover:bg-gray-800 transition-colors"
          >
            🛒 Quick Add
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
          {"★".repeat(Math.floor(product.rating)) +
            "☆".repeat(5 - Math.floor(product.rating))}
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-lg mb-1 hover:text-blue-600 transition-colors cursor-pointer">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-green-600">
              Rs{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                Rs{product.originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={() => navigate("collections")}
            className="text-sm text-blue-600 hover:underline transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
