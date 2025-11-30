import type { IBook } from "../models/book.model.js";
import { BaseQueryBuilder } from "../db/layer/base.query.js";

export class BookQueryBuilder extends BaseQueryBuilder<IBook> {
  filterByTitle(title: string) {
    return this.filter({ title });
  }

  filterByCategory(category: string) {
    return this.filter({ category });
  }
}
