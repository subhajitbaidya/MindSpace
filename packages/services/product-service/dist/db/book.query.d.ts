import type { IBook } from "../models/book.model.js";
import { BaseQueryBuilder } from "./base.query.js";
export declare class BookQueryBuilder extends BaseQueryBuilder<IBook> {
    filterByTitle(title: string): this;
    filterByCategory(category: string): this;
}
//# sourceMappingURL=book.query.d.ts.map