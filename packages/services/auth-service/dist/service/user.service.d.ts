import { UserModel } from "../repository/user.repo.js";
export declare class UserService {
    private userRepo;
    constructor(userRepo: UserModel);
    registerUser(data: any): Promise<string>;
    loginUser(data: any): Promise<string>;
}
//# sourceMappingURL=user.service.d.ts.map