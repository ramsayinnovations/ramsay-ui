import tw from "twin.macro";

const navbar = {
  close: {
    base: tw`p-2 rounded-md`,
    bg: tw`bg-white-100 hover:bg-grey-100`,
    color: tw`text-primary-700 hover:text-primary-800`,
    focus: tw`focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-700`,
    size: tw`text-lg md:text-2xl`,
    wrapper: tw``,
  },
  hamburger: {
    base: tw`p-2 rounded-md`,
    bg: tw`bg-white hover:bg-gray-100`,
    color: tw`text-gray-400 hover:text-gray-500`,
    focus: tw`focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-700`,
  },
};

export default navbar;
