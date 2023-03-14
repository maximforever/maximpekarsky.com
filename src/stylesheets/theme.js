const lightModeTheme = {
  colors: {
    black: "#103038",
    white: "#f8f5ec",
    blue: "#108ddf",
    salmon: "#F07167",
    lightGray: "#c6c1b6",
    veryLightGray: "#ebe6db",
    washedOutBlack: "#eae1cb",
  },
  backupColors: {
    black: "#343434",
    white: "#fdfdf5",
    blue: "#43b1df",
    salmon: "#f98072",
    lightGray: "#e5e5e5",
  },
  borders: {
    lightGray: `1px solid #e4e4e4`,
  },
  boxShadow: {
    standard: `0px 2px 3px 0px rgb(172, 173, 166, 40%);`,
  },
  fonts: {
    serif: `"Vollkorn", "Times", serif`,
    sansSerif: `"Montserrat", "Helvetica", sans-serif`,
    monospace: `"Source Code Pro", monospace`,
  },
  transitions: {
    veryLong: "3s",
    long: "1s",
    medium: "0.5s",
    short: "0.3s",
  },
};

// unfortunately, for now, we need to manually keep the two themes synched.

const darkModeTheme = {
  colors: {
    black: "#92b6e9",
    white: "#05152e",
    blue: "#1092ff",
    salmon: "#F07167",
    lightGray: "#30568b",
    veryLightGray: "#0d2649",
    washedOutBlack: "#1654ad",
  },
  backupColors: {
    black: "#343434",
    white: "#fdfdf5",
    blue: "#43b1df",
    salmon: "#f98072",
    lightGray: "#e5e5e5",
  },
  borders: {
    lightGray: `1px solid #e4e4e4`,
  },
  boxShadow: {
    standard: `0px 2px 3px 0px rgb(172, 173, 166, 40%);`,
  },
  fonts: {
    serif: `"Vollkorn", "Times", serif`,
    sansSerif: `"Montserrat", "Helvetica", sans-serif`,
    monospace: `"Source Code Pro", monospace`,
  },
  transitions: {
    veryLong: "3s",
    long: "1s",
    medium: "0.5s",
    short: "0.3s",
  },
};

export { lightModeTheme, darkModeTheme };
