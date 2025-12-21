type QueryType = "SELECT" | "INSERT" | "UPDATE" | "DELETE";

export interface BuiltQuery {
  text: string;
  values: unknown[];
}

export class SQLQueryBuilder {
  private type?: QueryType | undefined;
  private table = "";
  private columns: string[] = [];
  private values: unknown[] = [];
  private whereClauses: string[] = [];
  private joins: string[] = [];
  private orderByClause = "";
  private limitValue?: number | undefined;
  private offsetValue?: number | undefined;
  private params: unknown[] = [];

  private reset(): void {
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
  select(columns: string[] = ["*"]): this {
    this.reset();
    this.type = "SELECT";
    this.columns = columns;
    return this;
  }

  from(table: string): this {
    this.table = table;
    return this;
  }

  // -----------------------
  // INSERT
  // -----------------------
  insertInto(table: string): this {
    this.reset();
    this.type = "INSERT";
    this.table = table;
    return this;
  }

  valuesFrom<T extends object>(data: T): this {
    this.columns = Object.keys(data);
    this.values = Object.values(data);
    this.params.push(...this.values);
    return this;
  }

  // -----------------------
  // UPDATE
  // -----------------------
  update(table: string): this {
    this.reset();
    this.type = "UPDATE";
    this.table = table;
    return this;
  }

  set<T extends object>(data: T): this {
    this.columns = Object.keys(data);
    this.values = Object.values(data);
    this.params.push(...this.values);
    return this;
  }

  // -----------------------
  // DELETE
  // -----------------------
  deleteFrom(table: string): this {
    this.reset();
    this.type = "DELETE";
    this.table = table;
    return this;
  }

  // -----------------------
  // COMMON CLAUSES
  // -----------------------
  where(condition: string, value: unknown): this {
    this.params.push(value);
    this.whereClauses.push(`${condition} $${this.params.length}`);
    return this;
  }

  join(type: "INNER" | "LEFT" | "RIGHT", table: string, on: string): this {
    this.joins.push(`${type} JOIN ${table} ON ${on}`);
    return this;
  }

  orderBy(column: string, direction: "ASC" | "DESC" = "ASC"): this {
    this.orderByClause = `${column} ${direction}`;
    return this;
  }

  limit(limit: number): this {
    this.limitValue = limit;
    return this;
  }

  offset(offset: number): this {
    this.offsetValue = offset;
    return this;
  }

  // -----------------------
  // BUILD
  // -----------------------
  build(): BuiltQuery {
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
