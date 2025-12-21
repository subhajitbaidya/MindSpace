import type { IBook } from "../models/book.model.js";
export declare class BookService {
    private bookRepo;
    private cacheKeyAllBooks;
    createBook(input: IBook): Promise<any>;
    getAllBooks(): Promise<any>;
}
//# sourceMappingURL=book.service.d.ts.map