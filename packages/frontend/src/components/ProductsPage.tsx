import { useState } from "react";
import { client } from "@/gql/gql.client";
import { Search, Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Atomic from "./../assets/images/atomic.png";
import Dad from "./../assets/images/dad.png";
import Notgiving from "./../assets/images/notgiving.png";
import Ikigai from "./../assets/images/ikigai.png";
import { PageHeader } from "./widgets/PageHeader";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 16.99,
    category: "Anxiety",
    rating: 4.8,
    reviews: 342,
    image: Atomic,
    description: "Practical strategies to overcome anxiety and worry",
  },
  {
    id: 2,
    title: "Mindfulness in Plain English",
    author: "Bhante Henepola Gunaratana",
    price: 14.95,
    category: "Mindfulness",
    rating: 4.9,
    reviews: 521,
    image: Dad,
    description: "A comprehensive guide to meditation and mindfulness",
  },
  {
    id: 3,
    title: "Feeling Good",
    author: "David D. Burns, MD",
    price: 18.99,
    category: "Depression",
    rating: 4.7,
    reviews: 892,
    image: Notgiving,
    description: "The clinically proven drug-free treatment for depression",
  },
  {
    id: 4,
    title: "The Self-Love Workbook",
    author: "Shainna Ali, PhD",
    price: 19.99,
    category: "Self-Love",
    rating: 4.6,
    reviews: 267,
    image: Ikigai,
    description: "A life-changing guide to boost self-esteem and acceptance",
  },
];

const categories = [
  "All",
  "Anxiety",
  "Depression",
  "Mindfulness",
  "Self-Love",
  "Trauma",
  "Self-Improvement",
  "Vulnerability",
];

export function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.reviews - a.reviews; // popular
  });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <PageHeader
        text="Our Collections"
        description=" Professionally curated books to support your mental health
            journey"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search books, authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 rounded-lg border-purple-200 focus:border-purple-400"
              />
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48 py-6 rounded-lg border-purple-200">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-700 border border-purple-200 hover:bg-purple-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedBooks.length}{" "}
            {sortedBooks.length === 1 ? "book" : "books"}
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedBooks.map((book) => (
            <Card
              key={book.id}
              className="group overflow-hidden border-purple-100 hover:shadow-xl transition-all"
            >
              <div className="relative">
                <div className="aspect-4/4 bg-linear-to-br from-purple-100 to-teal-100 overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <button
                  onClick={() => toggleFavorite(book.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(book.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <h3 className="text-gray-900 line-clamp-2 mb-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600">{book.author}</p>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {book.description}
                </p>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{book.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    ({book.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl text-purple-700">
                    ${book.price}
                  </span>
                  <Button className="bg-purple-600 hover:bg-purple-700 rounded-lg">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {sortedBooks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">
              No books found matching your criteria.
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              variant="outline"
              className="mt-4 border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
