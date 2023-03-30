import beach_background_day from "../assets/backgrounds/beach_background_day.svg";
import beach_background_night from "../assets/backgrounds/beach_background_night.svg";
import sun from "../assets/backgrounds/sun.svg";
import moon from "../assets/backgrounds/moon.svg";

const mainTheme = {
  sun: sun,
  moon: moon,
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

const lightModeTheme = {
  darkMode: false,
  beachBackground: beach_background_day,
  colors: {
    black: "#103038",
    white: "#f8f5ec",
    blue: "#108ddf",
    salmon: "#F07167",
    lightGray: "#c6c1b6",
    veryLightGray: "#ebe6db",
    washedOutBlack: "#eae1cb",
    accentedWhite: "#fffefc",
  },
};

const darkModeTheme = {
  darkMode: true,
  beachBackground: beach_background_night,
  colors: {
    black: "#92b6e9",
    white: "#05152e",
    blue: "#1092ff",
    salmon: "#F07167",
    lightGray: "#30568b",
    veryLightGray: "#0d2649",
    washedOutBlack: "#1654ad",
    accentedWhite: "#10315f",
  },
};

export { mainTheme, lightModeTheme, darkModeTheme };
