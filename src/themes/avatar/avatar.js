import tw from "twin.macro";

const avatar = {
  default: {
    base: tw`inline-block`,
    shape: {
      rounded: tw`rounded-md`,
      pill: tw`rounded-full`,
    },
    size: {
      xs: tw`h-6 w-6`,
      sm: tw`h-8 w-8`,
      md: tw`h-10 w-10`,
      lg: tw`h-12 w-12`,
      xl: tw`h-14 w-14`,
    },
  },
};

export default avatar;
