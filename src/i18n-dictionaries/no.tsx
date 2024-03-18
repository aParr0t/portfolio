import common from "./common";

const no = {
  hero: {
    text: "Brenner for å skape sømløse brukeropplevelser og pixel-perfekte design.",
  },
  cta: {
    button: "Ansett meg",
  },
  about: {
    title: "Om meg",
    text: "Jeg er en allsidig utvikler som spesialiserer seg på front-end. Jeg har en lidenskap for å undervise og hjelpe andre med å forstå komplekse temaer. Jeg har også en lidenskap for design og brukeropplevelse. Jeg er alltid på utkikk etter nye utfordringer og muligheter for å lære og vokse. Jeg er for tiden på jakt etter en jobb som front-end utvikler. Jeg er også åpen for frilansarbeid. Jeg er basert i Lillestrøm, Norge.",
  },
  experience: {
    title: "Relevant erfaring",
    jobs: [
      {
        date: "2023 - i dag",
        title: "Privatlærer",
        description:
          "Jeg begynte å jobbe som privatlærer for studenter i matematikk, fysikk og programmering. Jeg har en lidenskap for å undervise og hjelpe andre med å forstå komplekse temaer.",
        link: common.jobLinks["Private tutor"],
      },
      {
        date: "Mars 2024",
        title: "Videregående skoles nettsted",
        description:
          "Jeg laget et nettsted for min skole Lillestrøm Videregående Skole (Norge). Hvert år arrangerer skolen min et rollespill som etterligner parlamentsvalgene i Norge. Jeg meldte meg frivillig til å lage et nettsted for dem.",
        link: common.jobLinks["Highschool website"],
      },
      {
        date: "Februar 2024",
        title: "Nettsted for privatundervisning",
        description:
          "Jeg laget et nettsted for min privatundervisningsvirksomhet. Jeg ønsket å gjøre det enklere for studenter å finne meg og bestille timer. Jeg ønsket også å vise frem mine ferdigheter som utvikler. Jeg brukte Next.js og Tailwind CSS for å bygge nettstedet. Jeg brukte også Figma for å designe nettstedet. Jeg utplasserte nettstedet med Vercel.",
        link: common.jobLinks["Private tutor website"],
      },
    ],
    resume: "Vis fullstendig CV",
    learnMore: "Lær mer",
  },
  projects: {
    subTitle: "Prosjekter",
    title: "Mine beste prosjekter",
    text: "Her er noen av prosjektene jeg er mest stolt av. Jeg bygde disse prosjektene fra bunnen av, fra det innledende designet til den endelige implementeringen.",
    visitButtonText: "Besøk nettstedet",
    codeButtonText: "Vis kode",
    allProjectsButtonText: "Vis alle prosjekter",
    projects: [
      {
        title: "Nettsted for sushirestaurant",
        description:
          "Jeg laget et nettsted for en lokal sushirestaurant i Lillestrøm. Jeg ønsket å utfordre meg selv, så jeg brukte 3D-animasjoner og WebGL for å skape en unik og oppslukende opplevelse",
        ...common.projects["Sushi restaurant website"],
      },
      {
        title: "Videregående skoles nettsted",
        description:
          "Jeg laget et nettsted for min skole Lillestrøm Videregående Skole (Norge). Hvert år arrangerer skolen min et rollespill som etterligner parlamentsvalgene i Norge. Jeg meldte meg frivillig til å lage et nettsted for dem.",
        ...common.projects["Highschool website"],
      },
      {
        title: "Nettsted for privatundervisning",
        description:
          "Jeg laget et nettsted for min privatundervisningsvirksomhet. Jeg ønsket å gjøre det enklere for studenter å finne meg og bestille timer. Jeg ønsket også å vise frem mine ferdigheter som utvikler. Jeg brukte Next.js og Tailwind CSS for å bygge nettstedet. Jeg brukte også Figma for å designe nettstedet. Jeg utplasserte nettstedet med Vercel.",
        ...common.projects["Private tutor website"],
      },
    ],
  },
  contact: {
    subTitle: "Ta kontakt",
    title: "Kontakt meg",
    text: "... eller legg igjen en melding",
    form: {
      name: "Navn",
      email: "E-post",
      message: "Melding",
    },
    sendButton: "Send",
  },
  footer: {
    linkTitle: "Lenker",
    links: {
      home: {
        href: common.footerLinks.home,
        text: "Hjem",
      },
      about: {
        href: common.footerLinks.about,
        text: "Om",
      },
      experience: {
        href: common.footerLinks.experience,
        text: "Erfaring",
      },
      projects: {
        href: common.footerLinks.projects,
        text: "Prosjekter",
      },
      contact: {
        href: common.footerLinks.contact,
        text: "Kontakt",
      },
    },
    socialsTitle: "Sosiale medier",
    aboutWebsite: (
      <p className="mt-8">
        Jeg designet dette nettstedet med {common.aboutSite.relume} og{" "}
        {common.aboutSite.figma}. For å bygge det, brukte jeg{" "}
        {common.aboutSite.nextjs} kombinert med {common.aboutSite.tailwind}.
        Nettstedet ble utplassert med {common.aboutSite.vercel}.
      </p>
    ),
  },
};

export default no;
