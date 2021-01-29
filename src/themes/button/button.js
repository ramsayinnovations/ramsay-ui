import tw from "twin.macro";

const borderGrey = tw`border-gray-300 text-gray-700 bg-white hover:bg-gray-50`;

const button = {
  default: {
    base: tw`inline-flex items-center  font-medium`,
    color: tw`text-white bg-indigo-600`,
    hover: tw`hover:bg-indigo-700`,
    focus: tw`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
  },
  color: {
    primary: tw`  `,
    success: tw`bg-green-500 hover:bg-green-600 border-green-500`,
    danger: tw`bg-red-600 hover:bg-red-700 border-red-600`,
  },
  border: {
    base: tw`border`,
    gray: borderGrey,
    grey: borderGrey,
    transparent: tw`bg-transparent`,
    primary: tw`  hover:text-gray-50`,
    success: tw`border-green-500 hover:bg-green-500 hover:text-gray-50`,
    danger: tw`border-red-500 hover:bg-red-500 hover:text-gray-50`,
  },
  borderRadius: {
    flat: tw`rounded-none`,
    rounded: tw`rounded-sm`,
    pill: tw`rounded-full`,
  },
  size: {
    xs: tw`px-2.5 py-1.5 text-xs`,
    sm: tw`px-3 py-2 text-sm`,
    md: tw`px-4 py-2 text-sm`,
    lg: tw`px-6 py-3 text-base`,
  },
};

export default button;
