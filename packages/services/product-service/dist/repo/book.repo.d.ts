import { type IBook } from "../models/book.model.js";
export declare class BookRepository {
    private builder;
    addBook(data: IBook): Promise<import("mongoose").Document<unknown, {}, IBook, {}, {}> & IBook & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getBooks(): Promise<(import("mongoose").Document<unknown, {}, IBook, {}, {}> & IBook & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    addBooksBulk(data: IBook[]): Promise<(import("mongoose").Document<unknown, {}, IBook, {}, {}> & IBook & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
//# sourceMappingURL=book.repo.d.ts.map