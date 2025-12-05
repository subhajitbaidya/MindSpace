export declare class QueryBuilder {
    private sql;
    private params;
    private paramIndex;
    select(fields: string[], table: string): this;
    where(field: string, value: any, operator?: string): this;
    insert(table: string, data: Record<string, any>): this;
    build(): {
        text: string;
        values: any[];
    };
}
//# sourceMappingURL=base.builder.d.ts.map