import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import aiStartupLandingPage2 from "@/assets/images/ai-startup-landing-page2.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";


const portfolioProjects = [
  {
    company: "MatteX Technologies",
    year: "2021",
    title: "Startup Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://techmattex.vercel.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "Rourkela Steel Plant, SAIL",
    year: "2022",
    title: "Sampark Portal",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://sampark-rsp-sail.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "Adrenaline Thrills",
    year: "2024",
    title: "SaaS Landing Page",
    results: [
      { title: "Boosted user engagement by 45% " },
      { title: "Optimized booking speed by 55%" },
      { title: "Expanded mobile reach by 40%" },
    ],
    link: "https://adrenaline-thrills.vercel.app/",
    image: aiStartupLandingPage,
  },
  {
    company: "Octavion",
    year: "2025",
    title: "Petrol Pump Management System",
    results: [
      { title: "Streamlined fuel transactions by 45%" },
      { title: "Optimized site operations by 55%" },
      { title: "Improved inventory management by 40%" },
    ],
    link: "https://ppms-datp.onrender.com/",
    image: aiStartupLandingPage2,
  },
];

export const ProjectsSection = () => {
  return <section id="projects" className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow="Real-World Results" title="Featured Projects" description="See how I transformed Concepts into Engaging Digital Experiences" />
      <div className="mt-10 md:mt-20 flex flex-col mt-10 gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card key={project.title} className="md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky px-8 pt-8 pb-0 after:pointer-events-none" style={{
            top: `calc(64px + ${projectIndex * 40}px)`,
          }}>
            <div className="lg:grid lg:grid-cols-2">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm test-transparent bg-clip-text text-center">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex gap-2 text-sm md:text-base text-white-50">
                      <CheckCircleIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link} target="_blank">
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
              </div>
              <div className="relative">
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>;
};
