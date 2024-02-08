import jwt from "jsonwebtoken";

const generateToken = (payload, expDate = "30d") => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.TOKEN_PRIVATE_KEY,
      { expiresIn: expDate },
      (err, token) => {
        if (err) reject(err);
        else resolve(token);
      }
    );
  });
};

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.TOKEN_PRIVATE_KEY, (err, payload) => {
      if (err) reject(err);
      else resolve(payload);
    });
  });
};

export { generateToken, verifyToken };
