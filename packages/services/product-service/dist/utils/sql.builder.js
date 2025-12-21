export class SQLQueryBuilder {
    type;
    table = "";
    columns = [];
    values = [];
    whereClauses = [];
    joins = [];
    orderByClause = "";
    limitValue;
    offsetValue;
    params = [];
    reset() {
        this.type = undefined;
        this.table = "";
        this.columns = [];
        this.values = [];
        this.whereClauses = [];
        this.joins = [];
        this.orderByClause = "";
        this.limitValue = undefined;
        this.offsetValue = undefined;
        this.params = [];
    }
    // -----------------------
    // SELECT
    // -----------------------
    select(columns = ["*"]) {
        this.reset();
        this.type = "SELECT";
        this.columns = columns;
        return this;
    }
    from(table) {
        this.table = table;
        return this;
    }
    // -----------------------
    // INSERT
    // -----------------------
    insertInto(table) {
        this.reset();
        this.type = "INSERT";
        this.table = table;
        return this;
    }
    valuesFrom(data) {
        this.columns = Object.keys(data);
        this.values = Object.values(data);
        this.params.push(...this.values);
        return this;
    }
    // -----------------------
    // UPDATE
    // -----------------------
    update(table) {
        this.reset();
        this.type = "UPDATE";
        this.table = table;
        return this;
    }
    set(data) {
        this.columns = Object.keys(data);
        this.values = Object.values(data);
        this.params.push(...this.values);
        return this;
    }
    // -----------------------
    // DELETE
    // -----------------------
    deleteFrom(table) {
        this.reset();
        this.type = "DELETE";
        this.table = table;
        return this;
    }
    // -----------------------
    // COMMON CLAUSES
    // -----------------------
    where(condition, value) {
        this.params.push(value);
        this.whereClauses.push(`${condition} $${this.params.length}`);
        return this;
    }
    join(type, table, on) {
        this.joins.push(`${type} JOIN ${table} ON ${on}`);
        return this;
    }
    orderBy(column, direction = "ASC") {
        this.orderByClause = `${column} ${direction}`;
        return this;
    }
    limit(limit) {
        this.limitValue = limit;
        return this;
    }
    offset(offset) {
        this.offsetValue = offset;
        return this;
    }
    // -----------------------
    // BUILD
    // -----------------------
    build() {
        if (!this.type) {
            throw new Error("Query type not specified");
        }
        let sql = "";
        switch (this.type) {
            case "SELECT":
                sql = `SELECT ${this.columns.join(", ")} FROM ${this.table}`;
                break;
            case "INSERT":
                sql = `
          INSERT INTO ${this.table} (${this.columns.join(", ")})
          VALUES (${this.columns.map((_, i) => `$${i + 1}`).join(", ")})
          RETURNING *
        `;
                break;
            case "UPDATE":
                sql = `
          UPDATE ${this.table}
          SET ${this.columns.map((col, i) => `${col} = $${i + 1}`).join(", ")}
        `;
                break;
            case "DELETE":
                sql = `DELETE FROM ${this.table}`;
                break;
        }
        if (this.joins.length) {
            sql += " " + this.joins.join(" ");
        }
        if (this.whereClauses.length) {
            sql += " WHERE " + this.whereClauses.join(" AND ");
        }
        if (this.orderByClause) {
            sql += ` ORDER BY ${this.orderByClause}`;
        }
        if (this.limitValue !== undefined) {
            sql += ` LIMIT ${this.limitValue}`;
        }
        if (this.offsetValue !== undefined) {
            sql += ` OFFSET ${this.offsetValue}`;
        }
        return {
            text: sql.trim(),
            values: this.params,
        };
    }
}
//# sourceMappingURL=sql.builder.js.map