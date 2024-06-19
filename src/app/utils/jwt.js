import jwt from "jsonwebtoken";

function sign(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    algorithm: process.env.JWT_ALGORITHM,
    expiresIn: process.env.JWT_EXPIRES,
  });
}

function verify(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

export default { sign, verify };
