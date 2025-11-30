import type { Model } from "mongoose";
import { BaseQueryBuilder } from "./base.query.js";
export declare abstract class BaseRepository<T> {
    protected readonly model: Model<T>;
    constructor(model: Model<T>);
    query(): BaseQueryBuilder<T>;
    create(data: Partial<T>): Promise<import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T, {}, {}> & (import("mongoose").Require_id<T> extends infer T_1 ? T_1 extends import("mongoose").Require_id<T> ? T_1 extends {
        __v?: infer U;
    } ? T_1 : T_1 & {
        __v: number;
    } : never : never)>>;
    findById(id: any): Promise<import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T, {}, {}> & (import("mongoose").Require_id<T> extends infer T_1 ? T_1 extends import("mongoose").Require_id<T> ? T_1 extends {
        __v?: infer U;
    } ? T_1 : T_1 & {
        __v: number;
    } : never : never)> | null>;
    findOne(filter: Partial<T>): Promise<import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T, {}, {}> & (import("mongoose").Require_id<T> extends infer T_1 ? T_1 extends import("mongoose").Require_id<T> ? T_1 extends {
        __v?: infer U;
    } ? T_1 : T_1 & {
        __v: number;
    } : never : never)> | null>;
    findAll(): Promise<import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T, {}, {}> & (import("mongoose").Require_id<T> extends infer T_1 ? T_1 extends import("mongoose").Require_id<T> ? T_1 extends {
        __v?: infer U;
    } ? T_1 : T_1 & {
        __v: number;
    } : never : never)>[]>;
    update(filter: Partial<T>, update: Partial<T>): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(filter: Partial<T>): Promise<import("mongodb").DeleteResult>;
}
//# sourceMappingURL=base.repo.d.ts.map