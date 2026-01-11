import client from "../db/pg.connect.js";
import { QueryBuilder } from "../db/base.builder.js";
export class UserModel {
    async createUser(data) {
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
    async getUserByEmail(email) {
        const qb = new QueryBuilder()
            .select(["password", "publicid", "username"], "users")
            .where("email", email);
        const query = qb.build();
        const result = await client.query(query);
        return result.rows[0];
    }
    getUserByContact(contact) {
        throw new MessageEvent("User not found");
    }
}
//# sourceMappingURL=user.repo.js.map