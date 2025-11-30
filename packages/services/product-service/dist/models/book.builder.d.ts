import { Model } from "mongoose";
import { type IBook } from "./book.interface.js";
export declare class BookBuilder {
    private readonly BookModel;
    private _data;
    constructor(BookModel: Model<IBook>);
    setId(id: number): this;
    setTitle(title: string): this;
    setAuthor(author: string): this;
    setPrice(price: number): this;
    setCategory(category: string): this;
    setRating(rating: number): this;
    setReviews(reviews: number): this;
    setImage(image: string): this;
    setDescription(description: string): this;
    build(): IBook;
}
//# sourceMappingURL=book.builder.d.ts.map