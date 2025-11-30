export class BaseQueryBuilder {
    model;
    filter = {};
    projection = null;
    options = {};
    sortOrder = null;
    populateFields = null;
    constructor(model) {
        this.model = model;
    }
    where(filter) {
        this.filter = { ...this.filter, ...filter };
        return this;
    }
    select(fields) {
        this.projection = fields;
        return this;
    }
    limit(count) {
        this.options.limit = count;
        return this;
    }
    skip(count) {
        this.options.skip = count;
        return this;
    }
    sort(order) {
        this.sortOrder = order;
        return this;
    }
    populate(path) {
        this.populateFields = path;
        return this;
    }
    async exec() {
        let query = this.model.find(this.filter, this.projection, this.options);
        if (this.sortOrder)
            query = query.sort(this.sortOrder);
        if (this.populateFields)
            query = query.populate(this.populateFields);
        return query.exec();
    }
    async findOne() {
        let query = this.model.findOne(this.filter, this.projection, this.options);
        if (this.populateFields)
            query = query.populate(this.populateFields);
        return query.exec();
    }
    async create(data) {
        return this.model.create(data);
    }
    async update(update) {
        return this.model.updateMany(this.filter, update);
    }
    async delete() {
        return this.model.deleteMany(this.filter);
    }
}
//# sourceMappingURL=basequerybuilder.js.map