import mongoose from "mongoose";
export declare const User: mongoose.Model<{
    password: string;
    username: string;
    email: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    password: string;
    username: string;
    email: string;
}, {}, mongoose.DefaultSchemaOptions> & {
    password: string;
    username: string;
    email: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    password: string;
    username: string;
    email: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    password: string;
    username: string;
    email: string;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    password: string;
    username: string;
    email: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=user.model.d.ts.map