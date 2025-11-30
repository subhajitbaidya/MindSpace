import { BookRepository } from "../repo/book.repo.js";
export class BookService {
    bookRepo = new BookRepository();
    async createBook(input) {
        return this.bookRepo.addBook(input);
    }
    async getAllBooks() {
        return this.bookRepo.getBooks();
    }
}
//# sourceMappingURL=book.service.js.map