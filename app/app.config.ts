export default defineAppConfig({
  global: {
    picture: {
      dark: "/hero/me.jpg",
      light: "/hero/me.jpg",
      alt: "My profile picture",
    },
    meetingLink: "https://wa.me/6285159946600",
    cv: "https://s.id/dickys_cv",
    email: "santrialanwari@gmail.com",
    available: true,
  },
  ui: {
    colors: {
      primary: "blue",
      neutral: "neutral",
    },
    pageHero: {
      slots: {
        container: "py-18 sm:py-24 lg:py-32",
        title: "mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl",
        description:
          "mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted",
      },
    },
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: true,
    links: [
      {
        icon: "i-simple-icons-instagram",
        to: "https://instagram.com/d_fordlalatina",
        target: "_blank",
        "aria-label": "Instagram",
      },
      {
        icon: "i-simple-icons-whatsapp",
        to: "https://wa.me/6285159946600",
        target: "_blank",
        "aria-label": "Whatsapp",
      },
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/dickymuliafiqri",
        target: "_blank",
        "aria-label": "GitHub",
      },
    ],
  },
});
