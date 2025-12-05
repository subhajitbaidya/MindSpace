import type { User } from "./user.interface.js";
export declare class UserModel implements User {
    createUser(data: {
        fname: string;
        mname: string;
        lname: string;
        email: string;
        contact_no: string;
        password: string;
    }): Promise<any>;
    getUserByEmail(email: string): Promise<any | null>;
    getUserByContact(contact: string): Promise<any | null>;
}
//# sourceMappingURL=user.repo.d.ts.map