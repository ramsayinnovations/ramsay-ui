import tw from "twin.macro";

const typography = {
  title: {
    default: {
      base: tw`tracking-tight font-extrabold`,
      color: tw`text-gray-900`,
      size: tw`text-4xl sm:text-5xl md:text-6xl`,
    },
    subtitle: {
      default: {
        base: tw``,
        color: tw`text-gray-500`,
        size: tw`text-base sm:text-lg md:text-xl`,
      },
    },
  },
  text: {
    default: {
      base: tw``,
      color: tw``,
      size: tw``,
    },
    paragraph: {
      base: tw``,
      color: tw``,
      size: tw``,
    },
    link: {
      default: {
        base: tw`font-medium`,
        color: tw`text-gray-500 hover:text-gray-900`,
        size: tw`text-base sm:text-lg md:text-xl`,
      },
    },
  },
  code: {
    default: {
      base: tw``,
      color: tw``,
      size: tw``,
    },
  },
};

export default typography;
