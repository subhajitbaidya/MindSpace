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
    },
};
//# sourceMappingURL=gql.resolvers.js.map