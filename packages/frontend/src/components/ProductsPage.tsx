import { useState } from "react";
// import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "./ui/button";
// import { Card } from "./ui/card";
// import { Input } from "./ui/input";
import { GET_BOOKS } from "@/gql/gql.client";
import { useQuery } from "@apollo/client/react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
import { PageHeader } from "./widgets/PageHeader";
import ProductCard from "./widgets/ProductCard";

interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
  category: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
}

interface BooksResponse {
  books: Book[];
}

function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [favorites, setFavorites] = useState<number[]>([]);

  const { data, loading, error } = useQuery<BooksResponse>(GET_BOOKS);

  const categories = data?.books
    ?.map((book: Book) => book.category) // extract category
    .filter(Boolean) // remove null/undefined
    .filter((cat: string, i: number, arr: string[]) => arr.indexOf(cat) === i); // unique

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading books</p>;

  // 🔥 Always a real array, never undefined
  const books = data?.books ?? [];

  // 🔥 Filtering
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // 🔥 Sorting
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
    <div className="min-h-screen pb-10 bg-linear-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader
          text="Our Collections"
          description="Professionally curated books to support your mental health journey"
        />
        {/* Search + Sort */}
        <div className="mb-8 space-y-4">
          {/* <div className="flex flex-col md:flex-row gap-4">
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
          </div> */}

          {/* Categories */}
          {/* <div className="flex flex-wrap gap-2">
            {categories?.map((category) => (
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
          </div> */}
        </div>

        {/* Count */}
        {/* <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedBooks.length}{" "}
            {sortedBooks.length === 1 ? "book" : "books"}
          </p>
        </div> */}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedBooks.map((book) => (
            // <Card
            //   key={book.id}
            //   className="group overflow-hidden border-purple-100 hover:shadow-xl transition-all"
            // >
            //   <div className="relative">
            //     <div className="aspect-4/4 bg-linear-to-br from-purple-100 to-teal-100 overflow-hidden">
            //       <img
            //         src={book.image}
            //         alt={book.title}
            //         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            //       />
            //     </div>

            //     <button
            //       onClick={() => toggleFavorite(book.id)}
            //       className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
            //     >
            //       <Heart
            //         className={`h-5 w-5 ${
            //           favorites.includes(book.id)
            //             ? "fill-red-500 text-red-500"
            //             : "text-gray-400"
            //         }`}
            //       />
            //     </button>
            //   </div>

            //   <div className="p-4 space-y-3">
            //     <h3 className="text-gray-900 line-clamp-2">{book.title}</h3>
            //     <p className="text-sm text-gray-600">{book.author}</p>

            //     <p className="text-sm text-gray-600 line-clamp-2">
            //       {book.description}
            //     </p>

            //     <div className="flex items-center gap-2">
            //       <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            //       <span className="text-sm">{book.rating}</span>
            //       <span className="text-sm text-gray-500">
            //         ({book.reviews})
            //       </span>
            //     </div>

            //     <div className="flex items-center justify-between pt-2">
            //       <span className="text-2xl text-purple-700">
            //         Rs {book.price}
            //       </span>
            //       <Button className="bg-purple-600 hover:bg-purple-700 rounded-lg">
            //         <ShoppingCart className="h-4 w-4 mr-2" />
            //         Add
            //       </Button>
            //     </div>
            //   </div>
            // </Card>
            <ProductCard
              image={book.image}
              category={book.category}
              price={book.price}
              title={book.title}
              key={book.id}
            />
          ))}
        </div>

        {/* Empty State */}
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
