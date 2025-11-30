import { Model } from "mongoose";
export declare class BaseQueryBuilder<T extends object> {
    protected model: Model<T>;
    protected query: any;
    protected updateData: Partial<T>;
    constructor(model: Model<T>);
    filter(filter: Partial<Record<keyof T, any>>): this;
    set(data: Partial<T>): this;
    create(data: T): Promise<import("mongoose").Document<unknown, {}, T, {}, {}> & (import("mongoose").Require_id<T> extends infer T_1 ? T_1 extends import("mongoose").Require_id<T> ? T_1 extends {
        __v?: infer U;
    } ? T_1 : T_1 & {
        __v: number;
    } : never : never)>;
    find(): Promise<(import("mongoose").Document<unknown, {}, T, {}, {}> & (import("mongoose").Require_id<T> extends infer T_1 ? T_1 extends import("mongoose").Require_id<T> ? T_1 extends {
        __v?: infer U;
    } ? T_1 : T_1 & {
        __v: number;
    } : never : never))[]>;
    findOne(): Promise<(import("mongoose").Document<unknown, {}, T, {}, {}> & (import("mongoose").Require_id<T> extends infer T_1 ? T_1 extends import("mongoose").Require_id<T> ? T_1 extends {
        __v?: infer U;
    } ? T_1 : T_1 & {
        __v: number;
    } : never : never)) | null>;
}
//# sourceMappingURL=base.query.d.ts.map