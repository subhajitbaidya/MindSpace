import { BookService } from "../service/book.service.js";
const bookService = new BookService();
export const resolvers = {
    Query: {
        books: async () => {
            return await bookService.getAllBooks();
        },
    },
    Mutation: {
        createBook: async (_, { input }) => {
            const newBook = {
                id: Date.now(),
                ...input,
            };
            return await bookService.createBook(newBook);
        },
        createBooksBulk: async (_, { input }) => {
            try {
                // Bulk insert without id
                const insertedBooks = await bookService.createBooksBulk(input.books);
                // Map MongoDB _id to GraphQL id
                return insertedBooks.map((book) => ({
                    title: book.title,
                    author: book.author,
                    price: book.price,
                    category: book.category,
                    rating: book.rating,
                    reviews: book.reviews,
                    image: book.image,
                    description: book.description,
                }));
            }
            catch (error) {
                console.error("Error bulk inserting books:", error);
                throw new Error("Failed to insert books");
            }
        },
    },
};
//# sourceMappingURL=gql.resolvers.js.map