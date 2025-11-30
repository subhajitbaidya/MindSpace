import { Model } from "mongoose";
export class BaseQueryBuilder {
    model;
    query = {};
    updateData = {};
    constructor(model) {
        this.model = model;
    }
    filter(filter) {
        this.query = { ...this.query, ...filter };
        return this;
    }
    set(data) {
        this.updateData = { ...this.updateData, ...data };
        return this;
    }
    async create(data) {
        return this.model.create(data);
    }
    async find() {
        return this.model.find(this.query);
    }
    async findOne() {
        return this.model.findOne(this.query);
    }
    async insertMany(data) {
        return this.model.insertMany(data);
    }
}
//# sourceMappingURL=base.query.js.map