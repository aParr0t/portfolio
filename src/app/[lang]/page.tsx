import Button from "@/components/Button";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaGoodreads,
} from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Form from "@/components/Form";
import InlineLink from "@/components/InlineLink";
import { getDictionary } from "./dictionaries";
import { Locale } from "@/i18n-config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // @ts-ignore
  const dict = await getDictionary(lang);
  console.log(dict);

  const timelineDotBefore =
    "before:bg-background before:absolute before:top-[50%] before:left-0 before:w-[25px] before:aspect-square before:rounded-full before:translate-y-[-50%] before:translate-x-[calc(-16px-50%)]";

  const timelineDotAfter =
    "after:bg-body after:absolute after:top-[50%] after:left-0 after:w-[12px] after:aspect-square after:rounded-full after:translate-y-[-50%] after:translate-x-[calc(-16px-50%)]";

  const experiences = [
    {
      date: "2023 - today",
      title: "Private tutor",
      description:
        "I started working as a private tutor for students in math, physics and programming. I have a passion for teaching and helping others understand complex topics.",
      link: "https://www.svendsen-realfag.no/",
    },
    {
      date: "March 2024",
      title: "Highschool website",
      description:
        "I made a website for my school Lillestrøm Videregående Skole (Norway). Each year my school hosts a roleplay that replicates the parliamentary elections in Norway. I volunteered to make a website for them.",
      link: "https://snileposten.vercel.app/",
    },
    {
      date: "February 2024",
      title: "Private tutor website",
      description:
        "I made a website for my private tutoring business. I wanted to make it easier for students to find me and book lessons. I also wanted to showcase my skills as a developer. I used Next.js and Tailwind CSS to build the website. I also used Figma to design the website. I deployed the website with Vercel.",
      link: "https://etos-realfag.vercel.app/",
    },
  ];

  const projects = [
    {
      title: "Sushi restaurant website",
      description:
        "I made a website for a local sushi restaurant in Lillestrøm. I wanted to challenge myself, so I used 3D animations and WebGL to create a unique and immersive experience",
      link: "https://moshi-moshi-sushii.vercel.app/",
      github: "https://github.com/aParr0t/moshi-moshi-sushi",
      image: "/static/images/moshi-moshi-sushi.png",
    },
    {
      title: "Highschool website",
      description:
        "I made a website for my school Lillestrøm Videregående Skole (Norway). Each year my school hosts a roleplay that replicates the parliamentary elections in Norway. I volunteered to make a website for them.",
      link: "https://snileposten.vercel.app/",
      github: "https://github.com/aParr0t/snileposten",
      image: "/static/images/snileposten.png",
    },
    {
      title: "Private tutor website",
      description:
        "I made a website for my private tutoring business. I wanted to make it easier for students to find me and book lessons. I also wanted to showcase my skills as a developer. I used Next.js and Tailwind CSS to build the website. I also used Figma to design the website. I deployed the website with Vercel.",
      link: "https://etos-realfag.vercel.app/",
      github: "https://github.com/aParr0t/etos-realfag",
      image: "/static/images/etos-realfag.png",
    },
  ];

  const socials = [
    {
      link: "https://github.com/aParr0t",
      icon: FaGithub,
    },
    {
      link: "https://www.instagram.com/atas_lapenas/",
      icon: FaInstagram,
    },
    {
      link: "https://www.linkedin.com/in/atas2005/",
      icon: FaLinkedin,
    },
    {
      link: "https://www.goodreads.com/user/show/154680072-aparrot",
      icon: FaGoodreads,
    },
  ];

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <section id="hero" className="flex flex-row py-16 h-screen">
          <div className="flex flex-col gap-8 mt-auto">
            <h1 className="text-primary font-bold text-5xl">
              Atas Lapenas <br />-{" "}
              <span className="font-handwriting font-light">le developer</span>
            </h1>
            <p>{dict.hero.text}</p>
            <div className="flex flex-row">
              <Link href="#contact">
                <Button>Hire me</Button>
              </Link>
            </div>
          </div>
        </section>
        <section id="about" className="py-16">
          <h2 className="text-primary font-bold text-3xl text-center mb-5">
            About
          </h2>
          <p>
            I&apos;m a web developer and designer based in Indonesia. I
            specialize in building and designing websites and applications with
            a focus on user experience and performance.
          </p>
        </section>
        <section id="experience" className="py-16 flex flex-col">
          <h2 className="text-primary font-bold text-3xl text-center mb-5">
            Relevant experience
          </h2>
          <div className="flex flex-col gap-12 border-l-2 border-body pl-4 py-4">
            {experiences.map((experience, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="relative">
                  <p
                    className={`font-monospace ${timelineDotBefore} ${timelineDotAfter}`}
                  >
                    {experience.date}
                  </p>
                </div>
                <p className="text-secondary font-bold text-xl font-monospace">
                  {experience.title}
                </p>
                <p>{experience.description}</p>
                <div className="flex flex-row">
                  <Link href={experience.link} target="_blank">
                    <Button
                      variant="outlined"
                      className="whitespace-nowrap flex flex-row items-center gap-2 border-body/50"
                    >
                      Learn more <FaArrowUpRightFromSquare className="" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="#"
            target="_blank"
            className="text-secondary text-md flex flex-row self-center items-center gap-2 mt-4"
          >
            View Full Résumé <FaArrowUpRightFromSquare className="" />
          </Link>
        </section>
        <section className="py-16 flex flex-col gap-12">
          <div>
            <p className="text-center text-secondary font-monospace mb-3">
              Projects
            </p>
            <h2 className="text-primary font-bold text-3xl text-center mb-5">
              My Best Projects
            </h2>
            <p className="mb-">
              Here are some of the projects I&apos;m most proud of. I built
              these projects from the ground up, from the initial design to the
              final implementation.
            </p>
          </div>
          <div className="flex flex-col gap-14">
            {projects.map((project, index) => (
              <div key={index} className="relative flex flex-col gap-6">
                <Image
                  src={project.image || "https://placehold.co/600x400/png"}
                  alt="Project"
                  width={1000}
                  height={800}
                  className="w-full"
                />
                <div className="flex flex-col">
                  <h3 className="text-secondary font-bold text-xl font-monospace">
                    {project.title}
                  </h3>
                  <p className="mt-2 mb-4">{project.description}</p>
                  <div className="flex flex-row gap-4">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="flex flex-row items-center gap-2 outline outline-1 py-3 px-4"
                    >
                      View project <FaArrowRight className="" />
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex flex-row items-center gap-2 outline outline-1 py-3 px-4"
                    >
                      View code <FaGithub size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button
            variant="outlined"
            className="border-body w-min whitespace-nowrap self-center"
          >
            View all projects
          </Button>
        </section>
        <section id="contact" className="py-16 flex flex-col">
          <p className="text-center text-secondary font-monospace mb-3">
            Get in touch
          </p>
          <h2 className="text-primary font-bold text-3xl text-center mb-5">
            Contact me
          </h2>
          <ul className="flex flex-row self-center gap-3">
            {socials.map((social, index) => (
              <li key={index} className="flex flex-row gap-4">
                <Link href={social.link} target="_blank">
                  <social.icon size={36} />
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-center mt-6">... or leave a message</p>
          <Form />
        </section>
      </main>
      <footer className="flex flex-col p-4">
        <h3 className="text-secondary font-monospace mb-2">Links</h3>
        <ul>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Experience</Link>
          </li>
          <li>
            <Link href="#">Projects</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
        <h3 className="text-secondary font-monospace mt-3 mb-2">Socials</h3>
        <ul className="flex flex-row gap-3">
          {socials.map((social, index) => (
            <li key={index} className="flex flex-row gap-4">
              <Link href={social.link} target="_blank">
                <social.icon size={36} />
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8">
          I designed this website with{" "}
          <InlineLink href="https://www.relume.io/">Relume</InlineLink> and{" "}
          <InlineLink href="https://www.figma.com/">Figma</InlineLink>. To build
          it, I used <InlineLink href="https://nextjs.org/">Next.js</InlineLink>{" "}
          combined with{" "}
          <InlineLink href="https://tailwindcss.com/">Tailwind CSS</InlineLink>.
          Website deployed with{" "}
          <InlineLink href="https://vercel.com/">Vercel</InlineLink>.
        </p>
      </footer>
    </>
  );
}
