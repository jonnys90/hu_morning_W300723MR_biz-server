import bcrypt from "bcryptjs";

const generateHash = (password) => bcrypt.hash(password, 10);

const cmpHash = (password, hash) => bcrypt.compare(password, hash);

// const test = async () => {
//   const password = "1234";
//   const hash = await generateHash(password);
//   console.log(hash);
//   const result = await cmpHash("12345", hash);
//   console.log(result);
// };
// test();
export { generateHash, cmpHash };
