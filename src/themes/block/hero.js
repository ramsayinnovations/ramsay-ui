import tw from "twin.macro";

const hero = {
  default: {
    base: tw`mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32`,
    grid: tw`lg:grid lg:grid-cols-12 lg:gap-8`,
    leftBlock: {
      base: tw`sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left`,
      smallTitle: tw`block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base`,
      title: {
        base: tw`mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl`,
        first: tw`block text-gray-900`,
        second: tw`block text-indigo-600`,
      },
      text: tw`mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl`,
      formBlock: {
        base: tw`mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0`,
        title: tw`text-base font-medium text-gray-900`,
        form: tw`mt-3 sm:flex`,
        label: tw`sr-only`,
        input: tw`block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300`,
        button: tw`mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto`,
        tip: tw`mt-3 text-sm text-gray-500`,
      },
    },
    rightBlock: {
      base: tw`mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center`,
      videoBlock: {
        base: tw`relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden`,
      },
    },
  },
};

export default hero;
