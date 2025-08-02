import EncryptUsers from "../utils/Jwt.js";

async function CheckLoggedInUser(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Missing or malformed token" });
    }

    const token = authHeader.split("Bearer ")[1];

    const jwtHelper = new EncryptUsers();
    const decoded = jwtHelper.validateJWTtokens(token);

    req.user = decoded;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Invalid or expired token", error: err.message });
  }
}

export default CheckLoggedInUser;
