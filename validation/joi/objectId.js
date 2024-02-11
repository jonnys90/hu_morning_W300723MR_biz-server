import Joi from "joi";

const objectIdSchema = Joi.object({
  id: Joi.string().hex().length(24).required(),
});

const validateObjectIdSchema = (id) => {
  return objectIdSchema.validateAsync({ id });
};

export default validateObjectIdSchema;
