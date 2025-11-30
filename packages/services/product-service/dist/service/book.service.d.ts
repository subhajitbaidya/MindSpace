import type { IBook } from "../models/book.model.js";
export declare class BookService {
    private bookRepo;
    createBook(input: IBook): Promise<import("mongoose").Document<unknown, {}, IBook, {}, {}> & IBook & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getAllBooks(): Promise<(import("mongoose").Document<unknown, {}, IBook, {}, {}> & IBook & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    createBooksBulk(inputs: IBook[]): Promise<(import("mongoose").Document<unknown, {}, IBook, {}, {}> & IBook & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
//# sourceMappingURL=book.service.d.ts.map