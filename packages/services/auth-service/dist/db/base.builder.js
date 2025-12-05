export class QueryBuilder {
    sql = "";
    params = [];
    paramIndex = 1;
    select(fields, table) {
        this.sql = `SELECT ${fields.join(", ")} FROM ${table}`;
        return this;
    }
    where(field, value, operator = "=") {
        this.params.push(value);
        this.sql += ` WHERE ${field} ${operator} $${this.paramIndex++}`;
        return this;
    }
    insert(table, data) {
        const keys = Object.keys(data);
        const placeholders = keys.map(() => `$${this.paramIndex++}`);
        this.sql = `
      INSERT INTO ${table} (${keys.join(", ")})
      VALUES (${placeholders.join(", ")})
      RETURNING *
    `;
        this.params = Object.values(data);
        return this;
    }
    build() {
        return {
            text: this.sql,
            values: this.params,
        };
    }
}
//# sourceMappingURL=base.builder.js.map