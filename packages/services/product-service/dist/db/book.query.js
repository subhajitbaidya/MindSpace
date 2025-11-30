import { BaseQueryBuilder } from "./base.query.js";
export class BookQueryBuilder extends BaseQueryBuilder {
    filterByTitle(title) {
        return this.filter({ title });
    }
    filterByCategory(category) {
        return this.filter({ category });
    }
}
//# sourceMappingURL=book.query.js.map