export class QueryBuilder {
  private sql = "";
  private params: any[] = [];
  private paramIndex = 1;

  select(fields: string[], table: string) {
    this.sql = `SELECT ${fields.join(", ")} FROM ${table}`;
    return this;
  }

  where(field: string, value: any, operator = "=") {
    this.params.push(value);
    this.sql += ` WHERE ${field} ${operator} $${this.paramIndex++}`;
    return this;
  }

  insert(table: string, data: Record<string, any>) {
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
