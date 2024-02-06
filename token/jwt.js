import jwt from "jsonwebtoken";

const generateToken = (payload, expDate = "30d") => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      "2r3417dg869ynb8h75t43",
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
    jwt.verify(token, "2r3417dg869ynb8h75t43", (err, payload) => {
      if (err) reject(err);
      else resolve(payload);
    });
  });
};

export { generateToken, verifyToken };
