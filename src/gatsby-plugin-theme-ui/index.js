import novelaTheme from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui";

export default {
  ...novelaTheme,
  colors: {
    ...novelaTheme.colors,
    primary: "#22272E",
    secondary: "#73737D",
    accent: "#000",
    grey: "#73737D",
    background: "#FBFAFA",
    track: "#FBFAFA",
    text: "#22272E",
    progress: "#FBFAFA",
    gradient: "linear-gradient(180deg, #FBFAFA 0%, #D9DBE0 100%)",
    modes: {
      dark: {
        ...novelaTheme.colors.modes.dark,
        grey: "#73737D",
        background: "#22272E",
        gradient:
        "linear-gradient(180deg, #22272E 0%, rgba(66, 81, 98, 0.36) 100%)",
          track: "#22272E",
          progress: "#22272E",
          text: "#fff",
      }
    }
  },
};