import { BookModel } from "../models/book.model.js";
import { BookQueryBuilder } from "./book.query.js";
export class BookRepository {
    builder = new BookQueryBuilder(BookModel);
    async addBook(data) {
        return this.builder.create(data);
    }
    async getBooks() {
        return this.builder.find();
    }
    async addBooksBulk(data) {
        return this.builder.insertMany(data);
    }
}
//# sourceMappingURL=book.repo.js.map