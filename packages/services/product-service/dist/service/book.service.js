import { BookRepository } from "../repo/book.repo.js";
export class BookService {
    bookRepo = new BookRepository();
    async createBook(input) {
        return this.bookRepo.addBook(input);
    }
    async getAllBooks() {
        return this.bookRepo.getBooks();
    }
    async createBooksBulk(inputs) {
        return this.bookRepo.addBooksBulk(inputs);
    }
}
//# sourceMappingURL=book.service.js.map