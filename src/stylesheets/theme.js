const lightModeTheme = {
  colors: {
    black: "black",
    white: "white",
    blue: "blue",
    salmon: "red",
    lightGray: "#e5e5e5",
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
    black: "white",
    white: "black",
    blue: "blue",
    salmon: "red",
    lightGray: "#454545",
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
