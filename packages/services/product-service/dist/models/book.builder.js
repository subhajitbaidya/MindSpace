import { Model } from "mongoose";
import {} from "./book.interface.js";
export class BookBuilder {
    BookModel;
    _data = {};
    constructor(BookModel) {
        this.BookModel = BookModel;
    }
    setId(id) {
        this._data.id = id;
        return this;
    }
    setTitle(title) {
        this._data.title = title;
        return this;
    }
    setAuthor(author) {
        this._data.author = author;
        return this;
    }
    setPrice(price) {
        this._data.price = price;
        return this;
    }
    setCategory(category) {
        this._data.category = category;
        return this;
    }
    setRating(rating) {
        this._data.rating = rating;
        return this;
    }
    setReviews(reviews) {
        this._data.reviews = reviews;
        return this;
    }
    setImage(image) {
        this._data.image = image;
        return this;
    }
    setDescription(description) {
        this._data.description = description;
        return this;
    }
    build() {
        return new this.BookModel(this._data);
    }
}
//# sourceMappingURL=book.builder.js.map