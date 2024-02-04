import Joi from "joi";
//ilan v, oran m
const createCardSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
  subtitle: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(2).max(1024).required(),
  phone: Joi.string()
    .pattern(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/)
    .required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(500)
    .required(),
  web: Joi.string().uri({ scheme: ["http", "https"] }),
  image: Joi.object()
    .keys({
      url: Joi.string().uri({ scheme: ["http", "https"] }),
      alt: Joi.string().min(2).max(256).allow(""),
    })
    .required(),
  address: Joi.object()
    .keys({
      state: Joi.string().min(2).max(256).allow(""),
      country: Joi.string().min(2).max(256).required(),
      city: Joi.string().min(2).max(256).required(),
      street: Joi.string().min(2).max(256).required(),
      houseNumber: Joi.number().min(2).max(256).required(),
      zip: Joi.number().min(10000).max(9999999).allow(""),
    })
    .required(),
});

const createCardSchemaValidation = (cardInput) => {
  return createCardSchema.validateAsync(cardInput);
};
export default createCardSchemaValidation;
