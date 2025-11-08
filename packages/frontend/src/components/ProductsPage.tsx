import { useState } from "react";
import { Search, Filter, Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const books = [
  {
    id: 1,
    title: "The Anxiety Toolkit",
    author: "Alice Boyes, PhD",
    price: 16.99,
    category: "Anxiety",
    rating: 4.8,
    reviews: 342,
    image:
      "https://images.unsplash.com/photo-1718975592728-7b594fb035b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBib29rc3xlbnwxfHx8fDE3NjAyNzE0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image:
      "https://images.unsplash.com/photo-1634746144619-338921b4d612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5kZnVsbmVzcyUyMGpvdXJuYWx8ZW58MXx8fHwxNzYwMjAzNTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image:
      "https://images.unsplash.com/photo-1748775444726-d5156bf58db9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwcmVhZGluZyUyMHNwYWNlfGVufDF8fHx8MTc2MDI3MTQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
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
    image:
      "https://images.unsplash.com/photo-1759754154962-f56bc4965843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG1lZGl0YXRpb24lMjBuYXR1cmV8ZW58MXx8fHwxNzYwMjU4NzIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A life-changing guide to boost self-esteem and acceptance",
  },
  {
    id: 5,
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk, MD",
    price: 21.99,
    category: "Trauma",
    rating: 4.9,
    reviews: 1203,
    image:
      "https://images.unsplash.com/photo-1718975592728-7b594fb035b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBib29rc3xlbnwxfHx8fDE3NjAyNzE0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Brain, mind, and body in the healing of trauma",
  },
  {
    id: 6,
    title: "Atomic Habits",
    author: "James Clear",
    price: 17.99,
    category: "Self-Improvement",
    rating: 4.8,
    reviews: 1567,
    image:
      "https://images.unsplash.com/photo-1634746144619-338921b4d612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5kZnVsbmVzcyUyMGpvdXJuYWx8ZW58MXx8fHwxNzYwMjAzNTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Build good habits and break bad ones",
  },
  {
    id: 7,
    title: "Daring Greatly",
    author: "Brené Brown, PhD",
    price: 16.5,
    category: "Vulnerability",
    rating: 4.7,
    reviews: 734,
    image:
      "https://images.unsplash.com/photo-1748775444726-d5156bf58db9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwcmVhZGluZyUyMHNwYWNlfGVufDF8fHx8MTc2MDI3MTQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "How the courage to be vulnerable transforms our lives",
  },
  {
    id: 8,
    title: "The Gifts of Imperfection",
    author: "Brené Brown, PhD",
    price: 15.99,
    category: "Self-Love",
    rating: 4.8,
    reviews: 456,
    image:
      "https://images.unsplash.com/photo-1759754154962-f56bc4965843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG1lZGl0YXRpb24lMjBuYXR1cmV8ZW58MXx8fHwxNzYwMjU4NzIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Let go of who you think you're supposed to be",
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
      <div className="bg-linear-to-r from-purple-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-white mb-4">Our Collections</h1>
          <p className="text-xl text-white/90">
            Professionally curated products to support your mental health
            journey
          </p>
        </div>
      </div>

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
                <div className="aspect-[3/4] bg-gradient-to-br from-purple-100 to-teal-100 overflow-hidden">
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
                <Badge className="absolute top-3 left-3 bg-purple-600">
                  {book.category}
                </Badge>
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
