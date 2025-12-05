import type { Request, Response } from "express";
import { UserService } from "../service/user.service.js";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=user.controller.d.ts.map