import mongoose, { Document } from "mongoose";
export interface IBook extends Document {
    id: number;
    title: string;
    author: string;
    price: number;
    category: string;
    rating: number;
    reviews: number;
    image: string;
    description: string;
}
export declare const Book: mongoose.Model<IBook, {}, {}, {}, mongoose.Document<unknown, {}, IBook, {}, {}> & IBook & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=book.model.d.ts.map