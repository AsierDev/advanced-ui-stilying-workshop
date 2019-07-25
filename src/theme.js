const COLOR_BLUE = "#07c";
const COLOR_GREEN = "#3f714c";
const COLOR_BACKGROUND = "#f6f6ff";

const theme = {
  fonts: {
    serif: `"Times New Roman", Times, serif;`,
    sansSerif: `Arial, Helvetica, sans-serif;`,
    monospace: `"Courier New", Courier, monospace`
  },
  space: [
    "0rem", // 0
    "0.625rem", // 1
    "0.9rem", // 2
    "1rem", // 3
    "1.5rem", // 4
    "2rem", // 5
    "3rem", // 6
    "4rem" // 7
  ],
  fontSizes: [
    "0.8rem", // 0
    "0.9rem", // 1
    "1rem", // 2
    "0.5rem", // 3
    "1.563rem", // 4
    "1.953rem", // 5
    "2.441rem", // 6
    "2.77rem" // 7
  ],
  lineHeights: [
    "0", // 0
    "1.2rem", // 1
    "1.5rem", // 2
    "1.87rem", // 3
    "2rem", // 4
    "2.5rem", // 5
    "3rem" // 6
  ],
  fontWeights: {
    normal: "400",
    bold: "800"
  },

  buttons: {
    primary: {
      color: COLOR_BLUE,
      border: `3px solid ${COLOR_BLUE}`,
      ":hover": {
        backgroundColor: COLOR_BLUE,
        color: "white"
      }
    },
    secondary: {
      color: COLOR_GREEN,
      border: `3px solid ${COLOR_GREEN}`,
      ":hover": {
        backgroundColor: COLOR_GREEN,
        color: "white"
      }
    }
  }
};

export default theme;
