import tw from "twin.macro";

const input = {
  default: {
    label: tw`block text-sm font-medium text-gray-700`,
    inputWrapper: tw`mt-1`,
    input: tw`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md`,
    inputError: tw`block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md`,
    error: tw`absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none`,
    errorSvg: tw`h-5 w-5 text-red-500`,
    helpText: tw`mt-2 text-sm text-gray-500`,
    errorText: tw`mt-2 text-sm text-red-600`,
  },
};

export default input;
