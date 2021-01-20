import tw from "twin.macro";

const borderGrey = tw`border-gray-300 text-gray-700 bg-white-100 hover:bg-gray-50`;

const theme = {
  button: {
    default: {
      base: tw`inline-flex items-center shadow-sm font-medium`,
      color: tw`text-white-100 bg-indigo-600`,
      hover: tw`hover:bg-indigo-700`,
      focus: tw`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
    },
    color: {
      primary: tw`bg-primary-500 hover:bg-primary-600 border-primary-500`,
      success: tw`bg-success-500 hover:bg-success-600 border-success-500`,
      danger: tw`bg-danger-600 hover:bg-danger-700 border-danger-600`,
    },
    border: {
      base: tw`border`,
      gray: borderGrey,
      grey: borderGrey,
      transparent: tw`bg-transparent`,
      primary: tw`border-primary-500 hover:bg-primary-500 hover:text-gray-50`,
      success: tw`border-success-500 hover:bg-success-500 hover:text-gray-50`,
      danger: tw`border-danger-500 hover:bg-danger-500 hover:text-gray-50`,
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
  },
  typography: {
    title: {
      default: {
        base: tw`tracking-tight font-extrabold`,
        color: tw`text-gray-900`,
        size: tw`text-4xl sm:text-5xl md:text-6xl`,
      },
    },
    subtitle: {
      default: {
        base: tw``,
        color: tw`text-gray-500`,
        size: tw`text-base sm:text-lg md:text-xl`,
      },
    },
    paragraph: {},
    text: {
      default: {
        base: tw``,
      },
    },
    menu: {
      default: {
        base: tw`font-medium`,
        color: tw`text-gray-500 hover:text-gray-900`,
        size: tw`text-base sm:text-lg md:text-xl`,
      },
    },
    code: {
      default: {
        base: tw``,
      },
    },
  },
};

export default theme;
