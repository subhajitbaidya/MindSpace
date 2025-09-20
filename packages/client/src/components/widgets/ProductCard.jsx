import React, { useState } from "react";
import {
  Heart,
  ShoppingCart,
  Star,
  Eye,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  Plus,
  Minus,
  Zap,
  BookOpen,
  Calendar,
  User,
} from "lucide-react";

export default function BookProductCard() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedFormat, setSelectedFormat] = useState("paperback");
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // Sample book data
  const book = {
    id: 1,
    title: "The Art of Clean Code",
    author: "Robert C. Martin",
    publisher: "Prentice Hall",
    isbn: "978-0132350884",
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    rating: 4.6,
    reviewCount: 892,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    formats: ["paperback", "hardcover", "ebook"],
    formatPrices: {
      paperback: 29.99,
      hardcover: 39.99,
      ebook: 19.99,
    },
    pages: 464,
    publishDate: "2008",
    language: "English",
    inStock: true,
    stockCount: 15,
    isNew: false,
    isBestSeller: true,
    genres: ["Programming", "Software Development", "Technology"],
    description:
      "A comprehensive guide to writing clean, maintainable code that stands the test of time.",
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      book: book.id,
      quantity,
      format: selectedFormat,
      price: book.formatPrices[selectedFormat],
    });
    // Add your cart logic here
  };

  const handleBuyNow = () => {
    console.log("Buy now:", {
      book: book.id,
      quantity,
      format: selectedFormat,
      price: book.formatPrices[selectedFormat],
    });
    // Add your buy now logic here
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: book.title,
        text: `${book.title} by ${book.author}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const getCurrentPrice = () => {
    const basePrice = book.formatPrices[selectedFormat];
    return selectedFormat === "ebook"
      ? basePrice
      : book.discount > 0
      ? basePrice * (1 - book.discount / 100)
      : basePrice;
  };

  const getOriginalPrice = () => {
    return book.formatPrices[selectedFormat];
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden max-w-sm mx-auto border border-gray-100">
      {/* Book Badges */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
        {book.isNew && (
          <span className="bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            NEW
          </span>
        )}
        {book.discount > 0 && selectedFormat !== "ebook" && (
          <span className="bg-gradient-to-r from-red-400 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            -{book.discount}%
          </span>
        )}
        {book.isBestSeller && (
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
            <Zap className="w-3 h-3" />
            BESTSELLER
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
            isFavorite
              ? "bg-red-500 text-white"
              : "bg-white text-gray-600 hover:bg-red-50 hover:text-red-500"
          }`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
        </button>

        <button
          onClick={() => setIsQuickViewOpen(true)}
          className="p-2 bg-white text-gray-600 rounded-full shadow-lg hover:bg-blue-50 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
        >
          <Eye className="w-5 h-5" />
        </button>

        <button
          onClick={handleShare}
          className="p-2 bg-white text-gray-600 rounded-full shadow-lg hover:bg-green-50 hover:text-green-500 transition-all duration-300 transform hover:scale-110"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      {/* Book Cover */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 group-hover:from-blue-100 group-hover:to-indigo-200 transition-all duration-300 flex items-center justify-center">
        <img
          src={book.image}
          alt={book.title}
          className="h-64 w-auto object-cover transition-transform duration-500 group-hover:scale-105 shadow-2xl rounded-lg"
        />
      </div>

      {/* Book Info */}
      <div className="p-6 space-y-4">
        {/* Title & Author */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 mb-1">
            {book.title}
          </h3>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <User className="w-4 h-4" />
            <span>by {book.author}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(book.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-700">
            {book.rating}
          </span>
          <span className="text-sm text-gray-500">({book.reviewCount})</span>
        </div>

        {/* Book Details */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{book.pages}p</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{book.publishDate}</span>
          </div>
        </div>

        {/* Format Selection */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Format</p>
          <div className="flex gap-2">
            {book.formats.map((format) => (
              <button
                key={format}
                onClick={() => setSelectedFormat(format)}
                className={`px-3 py-2 text-xs font-medium border rounded-lg transition-all duration-300 ${
                  selectedFormat === format
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-300"
                }`}
              >
                {format === "ebook"
                  ? "E-Book"
                  : format.charAt(0).toUpperCase() + format.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">
            ${getCurrentPrice().toFixed(2)}
          </span>
          {selectedFormat !== "ebook" && book.discount > 0 && (
            <span className="text-lg text-gray-500 line-through">
              ${getOriginalPrice().toFixed(2)}
            </span>
          )}
        </div>

        {/* Quantity (only for physical books) */}
        {selectedFormat !== "ebook" && (
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Quantity</p>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={decrementQuantity}
                  className="p-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium bg-gray-50">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="p-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Stock Status */}
            <div className="text-right">
              <p className="text-sm font-medium text-gray-700">Stock</p>
              <p
                className={`text-sm font-medium ${
                  book.stockCount > 5 ? "text-green-600" : "text-orange-600"
                }`}
              >
                {book.stockCount} left
              </p>
            </div>
          </div>
        )}

        {/* Genres */}
        <div className="flex flex-wrap gap-1">
          {book.genres.slice(0, 3).map((genre, index) => (
            <span
              key={index}
              className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          {selectedFormat === "ebook" ? (
            <button
              onClick={handleBuyNow}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Download Now
            </button>
          ) : (
            <>
              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Buy Now
              </button>
            </>
          )}
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t">
          {selectedFormat === "ebook" ? (
            <>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4" />
                <span>Instant Download</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>DRM Free</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-1">
                <Truck className="w-4 h-4" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <RotateCcw className="w-4 h-4" />
                <span>Easy Return</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
