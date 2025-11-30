import type { IBook } from "../models/book.model.js";
import { BookRepository } from "../repo/book.repo.js";

export class BookService {
  private bookRepo = new BookRepository();

  async createBook(input: IBook) {
    return this.bookRepo.addBook(input);
  }

  async getAllBooks() {
    return this.bookRepo.getBooks();
  }
}
