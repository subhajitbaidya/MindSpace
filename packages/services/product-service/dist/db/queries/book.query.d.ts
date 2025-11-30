import type { IBook } from "../models/book.model.js";
import { BaseQueryBuilder } from "./base.query.js";
export declare class BookQueryBuilder extends BaseQueryBuilder<IBook> {
    filterByTitle(title: string): any;
    filterByCategory(category: string): any;
}
//# sourceMappingURL=book.query.d.ts.map