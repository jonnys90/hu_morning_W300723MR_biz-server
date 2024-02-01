import registerSchemaValidation from "./joi/users/register.js";
import loginSchemaValidation from "./joi/users/login.js";

const VALIDATION = "joi";

const registerValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return registerSchemaValidation(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const loginValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return loginSchemaValidation(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

export { registerValidation, loginValidation };
