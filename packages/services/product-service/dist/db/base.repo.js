import { BaseQueryBuilder } from "./base.query.js";
export class BaseRepository {
    model;
    constructor(model) {
        this.model = model;
    }
    query() {
        return new BaseQueryBuilder(this.model);
    }
    async create(data) {
        return this.model.create(data);
    }
    async findById(id) {
        return this.model.findById(id).exec();
    }
    async findOne(filter) {
        return this.model.findOne(filter).exec();
    }
    async findAll() {
        return this.model.find().exec();
    }
    async update(filter, update) {
        return this.model.updateMany(filter, update).exec();
    }
    async delete(filter) {
        return this.model.deleteMany(filter).exec();
    }
}
//# sourceMappingURL=base.repo.js.map