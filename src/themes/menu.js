import tw from "twin.macro";

const menu = {
  menu: {
    desktop: tw`hidden md:flex space-x-10`,
    mobile: tw`grid gap-y-8`,
  },
  link: {
    base: tw`text-base font-medium`,
    color: tw`text-gray-500 hover:text-gray-900`,
    mobile: tw``,
  },
};

export default menu;
