import tw from "twin.macro";

const fullCol = tw`col-span-6`
const halfCol = tw`col-span-6 sm:col-span-3`
const thirdCol = tw`col-span-6 sm:col-span-3 lg:col-span-2`,
const twoThirdsCol = tw`col-span-6 sm:col-span-4`

const form = {
  label: {
    base: tw`block font-medium`,
    color: tw`text-gray-700`,
    size: tw`text-sm`,
  },
  input: {
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
      '1': fullCol,
      '1/2': halfCol,
      '1/3': thirdCol,
      '2/3': twoThirdsCol
    },
  },
  help: {
    color: tw`text-gray-500`,
    size: tw`text-sm`,
    space: tw`pt-2`,
  },
  error: {
    color: tw`text-red-600`,
    size: tw`text-sm`,
    space: tw`pt-2`,
  },
};

export default form;
