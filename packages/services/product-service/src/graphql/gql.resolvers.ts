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
    createBook: async (_: any, { input }: { input: IBook }) => {
      const newBook = {
        ...input,
      };

      return await bookService.createBook(newBook);
    },
  },
};
