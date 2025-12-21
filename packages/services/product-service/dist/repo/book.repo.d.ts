import { type IBook } from "../models/book.model.js";
export declare class BookRepository {
    private qb;
    constructor();
    addBook(data: IBook): Promise<any>;
    getBooks(): Promise<any[]>;
}
//# sourceMappingURL=book.repo.d.ts.map