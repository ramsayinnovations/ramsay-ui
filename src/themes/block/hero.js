import tw from "twin.macro";

const hero = {
  default: {
    base: tw`mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32`,
    grid: tw`lg:grid lg:grid-cols-12 lg:gap-8`,
  },
  leftBlock: {
    default: {
      base: tw`sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left`,
    },
  },
  rightBlock: {
    default: {
      base: tw`mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center`,
    },
  },
};

export default hero;
