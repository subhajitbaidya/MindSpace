import { BookRepository } from "../repo/book.repo.js";
import { redis } from "../server/redis.server.js";
export class BookService {
    bookRepo = new BookRepository();
    cacheKeyAllBooks = "books:all";
    async createBook(input) {
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
    async createBooksBulk(inputs) {
        return this.bookRepo.addBooksBulk(inputs);
    }
}
//# sourceMappingURL=book.service.js.map