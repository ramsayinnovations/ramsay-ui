import tw from "twin.macro";

const select = {
  base: tw`w-full max-w-xs mx-auto`,
  listBox: tw`space-y-1`,
  label: tw`block text-sm leading-5 font-medium text-gray-700`,
  main: tw`relative`,
  buttonWrapper: tw`inline-block w-full rounded-md shadow-sm`,
  button: {
    base: tw`cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5`,
    value: tw`block truncate text-black`,
    iconWrapper: tw`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none`,
    icon: tw`h-5 w-5 text-gray-400`,
  },
  options: {
    transition: tw`absolute mt-1 w-full rounded-md bg-white shadow-lg`,
    base: tw`max-h-60 rounded-md py-1 text-base leading-6 shadow-sm overflow-auto focus:outline-none sm:text-sm sm:leading-5`,
  },
  option: {
    base: tw`cursor-default select-none relative py-2 pl-8 pr-4`,
    color: {
      default: tw`text-gray-900`,
      active: tw`text-white bg-blue-600`,
    },
    value: {
      base: tw`block truncate`,
      color: {
        default: tw`font-normal`,
        selected: tw`font-semibold`,
      },
    },
    selectedValue: {
      base: tw`absolute inset-y-0 left-0 flex items-center pl-1.5`,
      default: tw`text-blue-600`,
      active: tw`text-white`,
      svg: tw`h-5 w-5`,
    },
  },
};

export default select;
