import client from "../db/pg.connect.js";
import { QueryBuilder } from "../db/base.builder.js";
export class UserModel {
    async createUser(data) {
        const { fname, email, password } = data;
        const qb = new QueryBuilder().insert("users", {
            fname,
            email,
            password,
        });
        const query = qb.build();
        const result = client.query(query);
        return result;
    }
    async getUserByEmail(email) {
        const qb = new QueryBuilder()
            .select(["password"], "users")
            .where("email", email);
        const query = qb.build();
        const result = await client.query(query);
        console.log(result.rows[0]);
        return result.rows[0];
    }
    getUserByContact(contact) {
        throw new MessageEvent("User not found");
    }
}
//# sourceMappingURL=user.repo.js.map