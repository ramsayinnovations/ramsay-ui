import tw from "twin.macro";

const fullCol = tw`col-span-6`;
const halfCol = tw`col-span-6 sm:col-span-3`;
const thirdCol = tw`col-span-6 sm:col-span-3 lg:col-span-2`;
const twoThirdsCol = tw`col-span-6 sm:col-span-4`;

const input = {
  base: tw`block w-full shadow-sm`,
  border: tw`border-gray-300 rounded-md`,
  size: tw`sm:text-sm`,
  space: tw`space-y-1`,
  focus: tw`focus:ring-primary-500 focus:border-primary-500`,
  error: tw`border-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`,
  col: {
    full: fullCol,
    half: halfCol,
    third: thirdCol,
    twoThirds: twoThirdsCol,
    1: fullCol,
    "1/2": halfCol,
    "1/3": thirdCol,
    "2/3": twoThirdsCol,
  },
};

export default input;
