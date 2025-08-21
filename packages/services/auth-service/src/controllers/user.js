export class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  register = async (req, res) => {
    try {
      const user = await this.userService.registerUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  login = async (req, res) => {
    try {
      const user = await this.userService.loginUser(req.body);
      res.status(200).json({
        success: true,
        message: "Login successful",
        token: user,
      });
    } catch (err) {
      res.status(401).json({
        success: false,
        error: err.message,
      });
    }
  };

  getUsers = async (req, res) => {
    try {
      const users = await this.userService.getUsers();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}
