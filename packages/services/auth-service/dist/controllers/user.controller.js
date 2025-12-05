import { UserService } from "../service/user.service.js";
export class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    register = async (req, res) => {
        try {
            const user = await req.body;
            const token = await this.userService.registerUser(user);
            res.status(201).json(token);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    };
    login = async (req, res) => {
        try {
            const user = req.body;
            const token = await this.userService.loginUser(user);
            res.status(200).json({
                success: true,
                message: "Login successful",
                token: token,
            });
        }
        catch (err) {
            res.status(401).json({
                success: false,
                error: err.message,
            });
        }
    };
}
//# sourceMappingURL=user.controller.js.map