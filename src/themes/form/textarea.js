import tw from "twin.macro";

const textarea = {
  label: tw`block text-sm font-medium text-gray-700`,
  textarea: {
    wrapper: tw`mt-1`,
    base: tw`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md`,
  },
  help: tw`mt-2 text-sm text-gray-500`,
};

export default textarea;
