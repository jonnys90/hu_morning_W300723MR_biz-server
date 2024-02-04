import mongoose from "mongoose";
import {
  DEFAULT_STRING_VALIDATION,
  DEFAULT_REQUIRED_STRING_VALIDATION,
} from "../helper/defaultStringValidation.helper.js";

const Name = new mongoose.Schema({
  first: DEFAULT_REQUIRED_STRING_VALIDATION,
  middle: DEFAULT_STRING_VALIDATION,
  last: DEFAULT_REQUIRED_STRING_VALIDATION,
});

export default Name;
