import common from "./common";

const en = {
  hero: {
    text: "Passionate about crafting seamless user experiences and pixel-perfect designs.",
  },
  cta: {
    button: "Hire me",
  },
  about: {
    title: "About me",
    text: "I'm a versatile developer specializing on front end. I have a passion for teaching and helping others understand complex topics. I also have a passion for design and user experience. I'm always looking for new challenges and opportunities to learn and grow. I'm currently looking for a job as a front end developer. I'm also open to freelance work. I'm based in Lillestrøm, Norway.",
  },
  experience: {
    title: "Relevant experience",
    jobs: [
      {
        date: "2023 - today",
        title: "Private tutor",
        description:
          "I started working as a private tutor for students in math, physics and programming. I have a passion for teaching and helping others understand complex topics.",
        link: common.jobLinks["Private tutor"],
      },
      {
        date: "March 2024",
        title: "Highschool website",
        description:
          "I made a website for my school Lillestrøm Videregående Skole (Norway). Each year my school hosts a roleplay that replicates the parliamentary elections in Norway. I volunteered to make a website for them.",
        link: common.jobLinks["Highschool website"],
      },
      {
        date: "February 2024",
        title: "Private tutor website",
        description:
          "I made a website for my private tutoring business. I wanted to make it easier for students to find me and book lessons. I also wanted to showcase my skills as a developer. I used Next.js and Tailwind CSS to build the website. I also used Figma to design the website. I deployed the website with Vercel.",
        link: common.jobLinks["Private tutor website"],
      },
    ],
    resume: "View Full Résumé",
    learnMore: "Learn more",
  },
  projects: {
    subTitle: "Projects",
    title: "My best projects",
    visitButtonText: "Visit website",
    codeButtonText: "View code",
    allProjectsButtonText: "View all projects",
    projects: [
      {
        title: "Sushi restaurant website",
        description:
          "I made a website for a local sushi restaurant in Lillestrøm. I wanted to challenge myself, so I used 3D animations and WebGL to create a unique and immersive experience",
        ...common.projects["Sushi restaurant website"],
      },
      {
        title: "Highschool website",
        description:
          "I made a website for my school Lillestrøm Videregående Skole (Norway). Each year my school hosts a roleplay that replicates the parliamentary elections in Norway. I volunteered to make a website for them.",
        ...common.projects["Highschool website"],
      },
      {
        title: "Private tutor website",
        description:
          "I made a website for my private tutoring business. I wanted to make it easier for students to find me and book lessons. I also wanted to showcase my skills as a developer. I used Next.js and Tailwind CSS to build the website. I also used Figma to design the website. I deployed the website with Vercel.",
        ...common.projects["Private tutor website"],
      },
    ],
  },
  contact: {
    subTitle: "Get in touch",
    title: "Contact me",
    text: "... or leave a message",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
    },
    sendButton: "Send",
  },
  footer: {
    linkTitle: "Links",
    links: {
      home: {
        href: common.footerLinks.home,
        text: "Home",
      },
      about: {
        href: common.footerLinks.about,
        text: "About",
      },
      experience: {
        href: common.footerLinks.experience,
        text: "Experience",
      },
      projects: {
        href: common.footerLinks.projects,
        text: "Projects",
      },
      contact: {
        href: common.footerLinks.contact,
        text: "Contact",
      },
    },
    socialsTitle: "Socials",
    aboutWebsite: (
      <p className="mt-8">
        I designed this website with {common.aboutSite.relume} and{" "}
        {common.aboutSite.figma}. To build it, I used {common.aboutSite.nextjs}{" "}
        combined with {common.aboutSite.tailwind}. Website deployed with{" "}
        {common.aboutSite.vercel}.
      </p>
    ),
  },
};

export default en;
