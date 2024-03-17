import Button from "@/components/Button";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Form from "@/components/Form";
import InlineLink from "@/components/InlineLink";

export default function Home() {
  const timelineDotBefore =
    "before:bg-background before:absolute before:top-[50%] before:left-0 before:w-[25px] before:aspect-square before:rounded-full before:translate-y-[-50%] before:translate-x-[calc(-16px-50%)]";

  const timelineDotAfter =
    "after:bg-body after:absolute after:top-[50%] after:left-0 after:w-[12px] after:aspect-square after:rounded-full after:translate-y-[-50%] after:translate-x-[calc(-16px-50%)]";

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <section id="hero" className="flex flex-row py-16 h-screen">
          <div className="flex flex-col gap-8 mt-auto">
            <h1 className="text-primary font-bold text-5xl">
              Atas Lapenas <br />-{" "}
              <span className="font-handwriting font-light">le developer</span>
            </h1>
            <p>
              Passionate about crafting seamless user experiences and
              pixel-perfect designs.
            </p>
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
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="relative">
                  <p
                    className={`underline decoration-accent decoration-4 font-monospace ${timelineDotBefore} ${timelineDotAfter}`}
                  >
                    2021 - 2022
                  </p>
                </div>
                <p className="text-secondary font-bold text-xl font-monospace">
                  Frontend developer
                </p>
                <p>
                  I worked at a startup where I built and designed the frontend
                  for their web application. I also optimized the website for
                  performance and SEO.
                </p>
                <div className="flex flex-row">
                  <Link href="#">
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
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="relative flex flex-col gap-6">
                <Image
                  src="https://placehold.co/600x400/png"
                  alt="Project"
                  width={1000}
                  height={800}
                  className="w-full"
                />
                <div className="flex flex-col">
                  <h3 className="text-secondary font-bold text-xl font-monospace">
                    Project name
                  </h3>
                  <p className="mt-2 mb-4">
                    A brief description of the project. It should be short and
                    sweet, but also informative.
                  </p>
                  <div className="flex flex-row gap-4">
                    <Link
                      href="#"
                      className="flex flex-row items-center gap-2 outline outline-1 py-3 px-4"
                    >
                      View project <FaArrowRight className="" />
                    </Link>
                    <Link
                      href="#"
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
        <section id="contact">
          <p className="text-center text-secondary font-monospace mb-3">
            Get in touch
          </p>
          <h2 className="text-primary font-bold text-3xl text-center mb-5">
            Contact me
          </h2>
          <p className="text-center">Leave a message</p>
          <Form />
        </section>
      </main>
      <footer className="flex flex-col p-4">
        <h3 className="text-secondary font-monospace mb-3">Links</h3>
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
        <p className="mt-8">
          I designed this website with{" "}
          <InlineLink href="https://www.relume.io/">Relume</InlineLink> and{" "}
          <InlineLink href="https://www.figma.com/">Figma</InlineLink>. It was
          built with <InlineLink href="https://nextjs.org/">Next.js</InlineLink>{" "}
          and styled with{" "}
          <InlineLink href="https://tailwindcss.com/">Tailwind CSS</InlineLink>.
          Website deployed with{" "}
          <InlineLink href="https://vercel.com/">Vercel</InlineLink>.
        </p>
      </footer>
    </>
  );
}
