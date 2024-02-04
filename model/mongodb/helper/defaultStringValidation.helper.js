const DEFAULT_STRING_VALIDATION = {
  type: String,
  minLength: 2,
  maxLength: 256,
  trim: true,
};
const DEFAULT_REQUIRED_STRING_VALIDATION = {
  ...DEFAULT_STRING_VALIDATION,
  required: true,
};
//trim: delete spaces before and after word
//                                         g
//g
export { DEFAULT_STRING_VALIDATION, DEFAULT_REQUIRED_STRING_VALIDATION };
