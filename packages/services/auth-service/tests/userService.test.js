const bcrypt = require("bcryptjs");
const JwtClass = require("../src/utils/Jwt.js");
const { UserService } = require("../src/business/userService.js");

describe("UserService - registerUser", () => {
  let userModelMock;
  let userService;

  beforeAll(() => {
    // Simulate .env
    process.env.JWT_SECRET = "test_secret";

    // Mocked user model
    userModelMock = {
      findUserByUsername: jest.fn(),
      createUser: jest.fn(),
    };

    userService = new UserService(userModelMock);
  });

  it("should register a new user, hash password, and return JWT", async () => {
    const userInput = {
      username: "subhajit baidya",
      email: "subhajitbaidya40@gmail.com",
      password: "coder",
    };

    userModelMock.findUserByUsername.mockResolvedValue(null); // no existing user

    const fakeUser = {
      id: "user123",
      username: userInput.username,
      email: userInput.email,
      password: "hashed_password", // pretend bcrypt hashed this
    };

    userModelMock.createUser.mockResolvedValue(fakeUser);

    const result = await userService.registerUser(userInput);

    // Should not store raw password
    expect(userModelMock.createUser).toHaveBeenCalledWith(
      expect.objectContaining({
        password: expect.not.stringMatching(userInput.password),
      })
    );

    expect(result).toHaveProperty("token");
    expect(typeof result.token).toBe("string");

    expect(result.user).toEqual({
      id: "user123",
      username: "subhajit baidya",
      email: "subhajitbaidya40@gmail.com",
    });
  });

  it("should throw error if user already exists", async () => {
    userModelMock.findUserByUsername.mockResolvedValue({ id: "existingUser" });

    await expect(
      userService.registerUser({
        username: "subhajit",
        email: "test@example.com",
        password: "secret",
      })
    ).rejects.toThrow("User already exists");
  });
});
