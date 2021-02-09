import label from "./label";
import input from "./input";
import help from "./help";
import error from "./error";
import select from "./select";
import textarea from "./textarea";
import tw from "twin.macro";

const form = {
  base: tw``,
  label: label,
  input: input,
  help: help,
  error: error,
  select: select,
  textarea: textarea,
};

export default form;
