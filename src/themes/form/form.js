import label from "./label";
import input from "./input";
import help from "./help";
import error from "./error";
import select from "./select";
import textarea from "./textarea";
import tw from "twin.macro";

const form = {
  base: tw`grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6`,
  label: label,
  input: input,
  help: help,
  error: error,
  select: select,
  textarea: textarea,
};

export default form;
