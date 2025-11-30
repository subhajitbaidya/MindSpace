import type { FilterQuery, QueryOptions, ProjectionType, Model } from "mongoose";
export declare class BaseQueryBuilder<T> {
    protected readonly model: Model<T>;
    protected filter: FilterQuery<T>;
    protected projection: ProjectionType<T> | null;
    protected options: QueryOptions;
    protected sortOrder: any;
    protected populateFields: any;
    constructor(model: Model<T>);
    where(filter: FilterQuery<T>): this;
    select(fields: string | ProjectionType<T>): this;
    limit(count: number): this;
    skip(count: number): this;
    sort(order: any): this;
    populate(path: string | any): this;
    exec(): Promise<import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T, {}, {}> & (import("mongoose").Require_id<T> extends infer T_1 ? T_1 extends import("mongoose").Require_id<T> ? T_1 extends {
        __v?: infer U;
    } ? T_1 : T_1 & {
        __v: number;
    } : never : never)>[]>;
    findOne(): Promise<import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T, {}, {}> & (import("mongoose").Require_id<T> extends infer T_1 ? T_1 extends import("mongoose").Require_id<T> ? T_1 extends {
        __v?: infer U;
    } ? T_1 : T_1 & {
        __v: number;
    } : never : never)> | null>;
    create(data: Partial<T>): Promise<import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T, {}, {}> & (import("mongoose").Require_id<T> extends infer T_1 ? T_1 extends import("mongoose").Require_id<T> ? T_1 extends {
        __v?: infer U;
    } ? T_1 : T_1 & {
        __v: number;
    } : never : never)>>;
    update(update: Partial<T>): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(): Promise<import("mongodb").DeleteResult>;
}
//# sourceMappingURL=basequerybuilder.d.ts.map