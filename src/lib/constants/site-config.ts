export const SITE_CONFIG = Object.freeze({
  brandName: "Vikasa",
  title: "My Site",
  cloneLink: "git clone https://github.com/Faizanahmedsy/next-starter-v1.git",
  description: "My site description",
  contact: {
    email: "info@tomatotech.com",
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
