const {
  fontFamily,
  fontSize,
  htmlFontSize,
  light,
  regular,
  medium,
  semiBold,
  bold,
  textTransform,
} = {
  fontFamily: '"Source Sans 3", sans-serif',
  fontSize: 12,
  bold: 700,
};

const fontVariants = {
  body2: {
    fontSize: 10,
  },
};

export const typography = {
  fontFamily,
  fontSize,
  htmlFontSize,
  fontWeightLight: light,
  fontWeightRegular: regular,
  fontWeightMedium: medium,
  fontWeightSemiBold: semiBold,
  fontWeightBold: bold,
  textTransform,
  ...fontVariants,
};
