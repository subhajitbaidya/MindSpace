import { BookService } from "../service/book.service.js";
import type { IBook } from "../models/book.model.js";

const bookService = new BookService();

export const resolvers = {
  Query: {
    books: async () => {
      return await bookService.getAllBooks();
    },
  },

  Mutation: {
    createBook: async (_: any, { input }: { input: Omit<IBook, "id"> }) => {
      const newBook = {
        id: Date.now(),
        ...input,
      };

      return await bookService.createBook(newBook);
    },
  },
};
