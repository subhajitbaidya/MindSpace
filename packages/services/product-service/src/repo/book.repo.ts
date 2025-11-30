import { BookModel } from "../models/book.model.js";
import { BookQueryBuilder } from "../queries/book.query.js";
import type { IBook } from "../models/book.model.js";

export class BookRepository {
  private builder = new BookQueryBuilder(BookModel);

  async addBook(data: IBook) {
    return this.builder.create(data);
  }

  async getBooks() {
    return this.builder.find();
  }

  async addBooksBulk(data: IBook[]) {
    return this.builder.insertMany(data);
  }
}
