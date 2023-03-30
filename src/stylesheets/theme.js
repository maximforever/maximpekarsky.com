import day_one from "../assets/backgrounds/day_1.jpg";
import day_two from "../assets/backgrounds/day_2.jpg";
import day_three from "../assets/backgrounds/day_3.jpg";
import day_four from "../assets/backgrounds/day_4.jpg";
import day_five from "../assets/backgrounds/day_5.jpg";
import night_one from "../assets/backgrounds/night_1.jpg";
import night_two from "../assets/backgrounds/night_2.jpg";
import night_three from "../assets/backgrounds/night_3.jpg";
import night_four from "../assets/backgrounds/night_4.jpg";

import beach_background_day from "../assets/beach_background_day.svg";
import beach_background_night from "../assets/beach_background_night.svg";
import beach_background_day_mobile from "../assets/beach_background_day.svg";
import beach_background_night_mobile from "../assets/beach_background_night.svg";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

const lightModeTheme = {
  darkMode: false,
  backgroundPhoto: day_five,
  celestialBody: sun,
  sun: sun,
  moon: moon,
  beachBackground: beach_background_day,
  beachBackgroundMobile: beach_background_day_mobile,
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
  darkMode: true,
  backgroundPhoto: night_four,
  celestialBody: moon,
  sun: sun,
  moon: moon,
  beachBackground: beach_background_night,
  beachBackgroundMobile: beach_background_night_mobile,
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
