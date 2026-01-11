import type { User } from "./user.interface.js";
import client from "../db/pg.connect.js";
import { QueryBuilder } from "../db/base.builder.js";

export class UserModel implements User {
  async createUser(data: {
    publicID: string;
    username: string;
    email: string;
    contact_no: string;
    password: string;
  }): Promise<any> {
    const { publicID, username, email, password } = data;
    const qb = new QueryBuilder().insert("users", {
      publicID,
      username,
      email,
      password,
    });
    const query = qb.build();

    const result = client.query(query);

    return result;
  }
  async getUserByEmail(email: string): Promise<any | null> {
    const qb = new QueryBuilder()
      .select(["password", "publicid", "username"], "users")
      .where("email", email);

    const query = qb.build();
    const result = await client.query(query);
    return result.rows[0];
  }
  getUserByContact(contact: string): Promise<any | null> {
    throw new MessageEvent("User not found");
  }
}
