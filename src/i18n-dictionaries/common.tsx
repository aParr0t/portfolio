import InlineLink from "@/components/InlineLink";

const common = {
  jobLinks: {
    "Private tutor": "https://www.svendsen-realfag.no/",
    "Highschool website": "https://snileposten.vercel.app/",
    "Private tutor website": "https://etos-realfag.vercel.app/",
  },
  projects: {
    "Sushi restaurant website": {
      link: "https://moshi-moshi-sushii.vercel.app/",
      github: "https://github.com/aParr0t/moshi-moshi-sushi",
      image: "/static/images/moshi-moshi-sushi.png",
    },
    "Highschool website": {
      link: "https://snileposten.vercel.app/",
      github: "https://github.com/aParr0t/snileposten",
      image: "/static/images/snileposten.png",
    },
    "Private tutor website": {
      link: "https://etos-realfag.vercel.app/",
      github: "https://github.com/aParr0t/etos-realfag",
      image: "/static/images/etos-realfag.png",
    },
  },
  footerLinks: {
    home: "/",
    about: "/about",
    experience: "/experience",
    projects: "/projects",
    contact: "/contact",
  },
  aboutSite: {
    relume: <InlineLink href="https://www.relume.io/">Relume</InlineLink>,
    figma: <InlineLink href="https://www.figma.com/">Figma</InlineLink>,
    nextjs: <InlineLink href="https://nextjs.org/">Next.js</InlineLink>,
    tailwind: (
      <InlineLink href="https://tailwindcss.com/">Tailwind CSS</InlineLink>
    ),
    vercel: <InlineLink href="https://vercel.com/">Vercel</InlineLink>,
  },
};

export default common;
