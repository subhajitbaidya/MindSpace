import type { IBook } from "../models/book.model.js";
export declare class BookService {
    private bookRepo;
    private cacheKeyAllBooks;
    createBook(input: IBook): Promise<import("mongoose").Document<unknown, {}, IBook, {}, {}> & IBook & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getAllBooks(): Promise<any>;
    createBooksBulk(inputs: IBook[]): Promise<(import("mongoose").Document<unknown, {}, IBook, {}, {}> & IBook & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
//# sourceMappingURL=book.service.d.ts.map