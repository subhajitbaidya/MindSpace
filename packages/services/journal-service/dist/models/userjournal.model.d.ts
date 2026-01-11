import mongoose, { Document } from "mongoose";
export type Mood = "great" | "okay" | "struggling";
export interface IPost extends Document {
    createdBy: string;
    date: Date;
    mood: Mood;
    title: string;
    content: string;
    consent: boolean;
}
export declare const Post: mongoose.Model<IPost, {}, {}, {}, mongoose.Document<unknown, {}, IPost, {}, mongoose.DefaultSchemaOptions> & IPost & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, IPost>;
//# sourceMappingURL=userjournal.model.d.ts.map