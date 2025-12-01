import type { IBook } from "../models/book.model.js";
import { BookRepository } from "../repo/book.repo.js";
import { redis } from "../server/redis.server.js";

export class BookService {
  private bookRepo = new BookRepository();

  private cacheKeyAllBooks = "books:all";

  async createBook(input: IBook) {
    const result = await this.bookRepo.addBook(input);
    await redis.del(this.cacheKeyAllBooks);

    return result;
  }

  async getAllBooks() {
    const cached = await redis.get(this.cacheKeyAllBooks);

    if (cached) {
      console.log("Cache HIT");
      return JSON.parse(cached);
    }

    console.log("Cache MISS");
    const books = await this.bookRepo.getBooks();

    await redis.set(this.cacheKeyAllBooks, JSON.stringify(books), "EX", 60);

    return books;
  }

  async createBooksBulk(inputs: IBook[]) {
    return this.bookRepo.addBooksBulk(inputs);
  }
}
