export interface BuiltQuery {
    text: string;
    values: unknown[];
}
export declare class SQLQueryBuilder {
    private type?;
    private table;
    private columns;
    private values;
    private whereClauses;
    private joins;
    private orderByClause;
    private limitValue?;
    private offsetValue?;
    private params;
    private reset;
    select(columns?: string[]): this;
    from(table: string): this;
    insertInto(table: string): this;
    valuesFrom<T extends object>(data: T): this;
    update(table: string): this;
    set<T extends object>(data: T): this;
    deleteFrom(table: string): this;
    where(condition: string, value: unknown): this;
    join(type: "INNER" | "LEFT" | "RIGHT", table: string, on: string): this;
    orderBy(column: string, direction?: "ASC" | "DESC"): this;
    limit(limit: number): this;
    offset(offset: number): this;
    build(): BuiltQuery;
}
//# sourceMappingURL=sql.builder.d.ts.map