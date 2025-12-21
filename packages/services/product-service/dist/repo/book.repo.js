import {} from "../models/book.model.js";
import { ConnectionPool } from "../db/pg.connect.js";
import { SQLQueryBuilder } from "../utils/sql.builder.js";
export class BookRepository {
    qb;
    constructor() {
        this.qb = new SQLQueryBuilder();
    }
    async addBook(data) {
        const query = this.qb.insertInto("products").valuesFrom(data).build();
        const result = await ConnectionPool.query(query.text, query.values);
        return result.rows[0];
    }
    async getBooks() {
        const query = this.qb.select().from("products").orderBy("id").build();
        const result = await ConnectionPool.query(query.text, query.values);
        return result.rows;
    }
}
//# sourceMappingURL=book.repo.js.map