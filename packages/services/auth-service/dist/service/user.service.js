import bcrypt from "bcryptjs";
import { UserModel } from "../repository/user.repo.js";
import { encryptUsers } from "../utils/jwt.util.js";
import { ulid } from "ulid";
export class UserService {
    userRepo;
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async registerUser(data) {
        const existingUser = await this.userRepo.getUserByEmail(data.email);
        if (existingUser) {
            throw new Error("User already exists, please login");
        }
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const publicID = ulid();
        const userToSave = {
            ...data,
            password: hashedPassword,
            publicID: publicID,
        };
        await this.userRepo.createUser(userToSave);
        console.log(userToSave);
        return encryptUsers({
            sub: publicID,
            name: data.username,
        });
    }
    async loginUser(data) {
        if (!data || !data.password) {
            throw new Error("Email and password are required");
        }
        let user = await this.userRepo.getUserByEmail(data.email);
        if (!data.email) {
            user = await this.userRepo.getUserByContact(data.contact_no);
        }
        if (!user) {
            throw new Error("Invalid email or password");
        }
        const isPasswordValid = await bcrypt.compare(data.password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }
        return encryptUsers({
            sub: user.publicid,
            name: user.username, // must exist in DB
        });
    }
}
//# sourceMappingURL=user.service.js.map