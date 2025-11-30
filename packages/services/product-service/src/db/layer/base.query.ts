import { Model } from "mongoose";

export class BaseQueryBuilder<T extends object> {
  protected query: any = {};
  protected updateData: Partial<T> = {};

  constructor(protected model: Model<T>) {}

  filter(filter: Partial<Record<keyof T, any>>) {
    this.query = { ...this.query, ...filter };
    return this;
  }

  set(data: Partial<T>) {
    this.updateData = { ...this.updateData, ...data };
    return this;
  }

  async create(data: T) {
    return this.model.create(data);
  }

  async find() {
    return this.model.find(this.query);
  }

  async findOne() {
    return this.model.findOne(this.query);
  }
}
