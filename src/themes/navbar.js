import tw from "twin.macro";

const navbar = {
  close: {
    base: tw`p-2 rounded-md`,
    bg: tw`bg-white hover:bg-gray-100`,
    color: tw`text-blue-700 hover:text-blue-800`,
    focus: tw`focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700`,
    size: tw`text-lg md:text-2xl`,
    wrapper: tw``,
  },
  hamburger: {
    base: tw`p-2 rounded-md`,
    bg: tw`bg-white hover:bg-gray-100`,
    color: tw`text-gray-400 hover:text-gray-500`,
    focus: tw`focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700`,
  },
  mobile: {
    base: tw`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`,
    wrapper: tw`rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50`,
    main: tw`pt-5 pb-6 px-5`,
  },
  mobileHeader: {
    base: tw`flex items-center justify-between`,
  },
};

export default navbar;
