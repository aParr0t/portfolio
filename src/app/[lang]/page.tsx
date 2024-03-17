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
import { Locale, matchLocale } from "@/i18n-config";
import { link } from "fs";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // @ts-ignore
  const dict = await getDictionary(lang);

  const timelineDotBefore =
    "before:bg-background before:absolute before:top-[50%] before:left-0 before:w-[25px] before:aspect-square before:rounded-full before:translate-y-[-50%] before:translate-x-[calc(-16px-50%)]";

  const timelineDotAfter =
    "after:bg-body after:absolute after:top-[50%] after:left-0 after:w-[12px] after:aspect-square after:rounded-full after:translate-y-[-50%] after:translate-x-[calc(-16px-50%)]";

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

  // const resumeLang = matchLocale([lang]) === "no" ? "no" : "en";
  const resumeLang = "no";

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
                <Button>{dict.cta.button}</Button>
              </Link>
            </div>
          </div>
        </section>
        <section id="about" className="py-16">
          <h2 className="text-primary font-bold text-3xl text-center mb-5">
            {dict.about.title}
          </h2>
          <p>{dict.about.text}</p>
        </section>
        <section id="experience" className="py-16 flex flex-col">
          <h2 className="text-primary font-bold text-3xl text-center mb-5">
            {dict.experience.title}
          </h2>
          <div className="flex flex-col gap-12 border-l-2 border-body pl-4 py-4">
            {dict.experience.jobs.map((experience, index) => (
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
                      {dict.experience.learnMore}{" "}
                      <FaArrowUpRightFromSquare className="" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link
            href={`/static/docs/resume-${resumeLang}.pdf`}
            target="_blank"
            className="text-secondary text-md flex flex-row self-center items-center gap-2 mt-4"
          >
            {dict.experience.resume} <FaArrowUpRightFromSquare className="" />
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
            {dict.projects.projects.map((project, index) => (
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
                      {dict.projects.visitButtonText}
                      <FaArrowRight className="" />
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex flex-row items-center gap-2 outline outline-1 py-3 px-4"
                    >
                      {dict.projects.codeButtonText} <FaGithub size={24} />
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
            {dict.projects.allProjectsButtonText}
          </Button>
        </section>
        <section id="contact" className="py-16 flex flex-col">
          <p className="text-center text-secondary font-monospace mb-3">
            {dict.contact.subTitle}
          </p>
          <h2 className="text-primary font-bold text-3xl text-center mb-5">
            {dict.contact.title}
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
          <p className="text-center mt-6">{dict.contact.text}</p>
          <Form i18n={dict.contact.form} />
        </section>
      </main>
      <footer className="flex flex-col p-4">
        <h3 className="text-secondary font-monospace mb-2">
          {dict.footer.linkTitle}
        </h3>
        <ul>
          {Object.values(dict.footer.links).map((_link, index) => (
            <li key={index}>{_link.text}</li>
          ))}
        </ul>
        <h3 className="text-secondary font-monospace mt-3 mb-2">
          {dict.footer.socialsTitle}
        </h3>
        <ul className="flex flex-row gap-3">
          {socials.map((social, index) => (
            <li key={index} className="flex flex-row gap-4">
              <Link href={social.link} target="_blank">
                <social.icon size={36} />
              </Link>
            </li>
          ))}
        </ul>
        {dict.footer.aboutWebsite}
      </footer>
    </>
  );
}
