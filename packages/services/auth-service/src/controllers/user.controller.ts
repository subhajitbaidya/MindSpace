import type { Request, Response } from "express";
import { UserService } from "../service/user.service.js";

export class UserController {
  constructor(private userService: UserService) {}

  register = async (req: Request, res: Response) => {
    try {
      const user = await req.body;
      const token = await this.userService.registerUser(user);
      res.status(201).json(token);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const user = req.body;
      const token = await this.userService.loginUser(user);

      res.cookie("access_token", token, {
        httpOnly: true, // JS cannot access
        secure: true, // HTTPS only
        sameSite: "strict", // CSRF protection
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.status(200).json({
        success: true,
        message: "Login successful",
      });
    } catch (err: any) {
      res.status(401).json({
        success: false,
        error: err.message,
      });
    }
  };
}
