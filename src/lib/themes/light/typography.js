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
  fontFamily: '"Inter", sans-serif',
  fontSize: 14,
  bold: 700,
};

const fontVariants = {
  body2: {
    fontSize: 12,
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
