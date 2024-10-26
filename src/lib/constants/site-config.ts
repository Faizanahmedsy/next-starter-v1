export const SITE_CONFIG = Object.freeze({
  brandName: "Acme",
  title: "My Site",
  cloneLink: "git clone https://github.com/Faizanahmedsy/kitty-start.git",
  description: "My site description",
  contact: {
    email: "saiyed.faizanahmed1@gmail.com",
  },
  color: {
    primary: "",
    secondary: "",
    tertiary: "",
    accent: "",
  },
} as const);

export const HERO = Object.freeze({
  title: `Build like a team of hundreds with ${SITE_CONFIG.brandName}`,
} as const);
