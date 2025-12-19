import mongoose, { Document } from "mongoose";
type Mood = "great" | "okay" | "struggling";
export interface IPost extends Document {
    date: string;
    mood: Mood;
    content: string;
    prompt: string;
}
export declare const Post: mongoose.Model<IPost, {}, {}, {}, mongoose.Document<unknown, {}, IPost, {}, mongoose.DefaultSchemaOptions> & IPost & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, IPost>;
export {};
//# sourceMappingURL=userjournal.model.d.ts.map