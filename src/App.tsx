import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navigation from './components/react/Navigation';
import ProjectCarousel from "./components/react/ProjectCarousel";
import { IconDetails, Project } from "@/@types/global";
import LanguageSelector from "@/components/react/LanguageSelector";
import ProjectDetails from "./components/react/ProjectDetails";
import ProfilePicture from "@/assets/img/profile-picture.jpg"
import NextJSLogo from "@/assets/img/badges/next-js.logo.svg";
import NodeJSLogo from "@/assets/img/badges/node-js.logo.svg";
import PrismaLogo from "@/assets/img/badges/prisma.logo.svg";
import FirebaseLogo from "@/assets/img/badges/firebase.logo.svg";
import JestLogo from "@/assets/img/badges/jest.logo.svg";
import ProtoMapsLogo from "@/assets/img/badges/protomaps.logo.svg";
import UnityLogo from "@/assets/img/badges/unity.logo.svg";
import TypeScriptLogo from "@/assets/img/badges/typescript.logo.svg";
import ReactLogo from "@/assets/img/badges/react.logo.svg";
import PostgresqlLogo from "@/assets/img/badges/postgresql.logo.svg";
import LinkedInLogo from "@/assets/img/badges/linkedin.logo.svg"; 
import GithubLogo from "@/assets/img/badges/github.logo.svg"; 

const projectNameImgFileNameLookUp = {
  "PoiPoi": "poipoi.png",
  "Bug_Off": "bug-off-logo.png",
  "Neon_Skyline": "neon-skyline-logo-crop.png",
}

function App() {
  const { t } = useTranslation();
  const projectTitleKeys = t("projects", {returnObjects: true});
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    handleInitializeProjects();
  }, [])

  function handleInitializeProjects() {
    const projects = Object.keys(projectTitleKeys).map( titleKey => {
      const project:Project = {
        id: `${titleKey}`,
        titleKey: `${titleKey}.title`,
        imgUrl: projectNameImgFileNameLookUp[titleKey as keyof {"PoiPoi": string, "Bug_Off": string, "Neon_Skyline": string}],
      }
      return project;
    });
    setProjects(projects);
  }

  return (
    <div className="max-w-10/12 mt-0 mb-auto ">
      <header className="flex text-center bg-gradient-to-b from-sky-400 to-blue-500 w-full max-w-none sticky top-0 p-2 z-50">
        <div className="flex items-center min-w-20 justify-center">
          <h1 className="px-4 font-semibold text-lg lg:text-3xl font-sans">{t("header")}</h1>
        </div>
        <Navigation 
          projects={projects}/>
        <LanguageSelector 
        className="flex ml-auto justify-end flex-wrap"/>
      </header>
      <main className="px-4 pt-8 lg:px-36">
      <article className="flex flex-col items-center py-2">
        <img 
        src={ProfilePicture}
        alt="Profile Picture"
        className="w-1/2 md:max-w-[33%] aspect-square rounded-full object-cover"/>
        <h2>{t("introduction.part_1")}</h2>
      </article>
      <article className="py-2 scroll-mt-28 lg:scroll-mt-14" id="about-me">
        <h2 className="text-3xl font-sans">{t("navigation_menu.about_me")}</h2>
        <p>{t("about_me.part_1")}</p>
        <br></br>
        <p>{t("about_me.part_2")}</p>
        <br></br>
        <p>{t("about_me.closing")} <a>{t("contact_info.email")}</a></p>
      </article>
      <article>
        <section className="flex flex-col items-center border-2 border-slate-500 rounded">
          <h2 className="text-3xl font-sans">{t("navigation_menu.projects")}</h2>
          <ProjectCarousel 
          className="w-full max-w-xs"
          projects={projects}/>
        </section>
        {/* TODO: Each section of the project will be inserted here */}
        <section className="pt-4 py-8 scroll-mt-28 lg:scroll-mt-14" id="PoiPoi">
          <ProjectDetails
            projectTitle={t("projects.PoiPoi.title")}
            projectDescription={t("projects.PoiPoi.description")}
            techIcons={[
              {
                imgSrc: TypeScriptLogo,
                altText: "Typescript Logo"
              },
              { 
                imgSrc: NextJSLogo, 
                altText: "Next JS Logo"
              }
              ,
              {
                imgSrc : NodeJSLogo,
                altText:"Node JS Logo"
              },
              {
                imgSrc: ProtoMapsLogo,
                altText: "Protomaps Logo"
              },
              {
                imgSrc: PrismaLogo,
                altText: "Prisma Logo"
              },
              {
                imgSrc: JestLogo,
                altText: "Jest Logo"  
              },
              ] as Array<IconDetails>}
            showcase={<iframe  
              src="https://www.youtube.com/embed/u0t2sgT7C98" 
              title="Neon Skyline (senior project)" 
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>}
            className="bg-fuchsia-950/60"
          />
        </section>
        <section className="py-8 scroll-mt-28 lg:scroll-mt-14" id="Bug_Off">
          <ProjectDetails
            className="bg-amber-800"
            projectTitle={t("projects.Bug_Off.title")}
            projectDescription={t("projects.Bug_Off.description")}
            techIcons={[{
              imgSrc: UnityLogo,
              altText: "Unity Logo"
            }] as Array<IconDetails>}
            showcase={<img src="src/assets/img/bug-off-showcase.gif" alt="Gif of gameplay of Bug-Off"/>}
          />
        </section>
        <section className="py-8 scroll-mt-28 lg:scroll-mt-14" id="My_Video_Game_Collection">
          <ProjectDetails
            className="bg-gray-500 border-4 border-blue-400"
            projectTitle={t("projects.My_Video_Game_Collection.title")}
            projectDescription={t("projects.My_Video_Game_Collection.description")}
            techIcons={[
              {
                imgSrc: TypeScriptLogo,
                altText: "Typescript Logo"
              },
              { 
                imgSrc: ReactLogo, 
                altText: "React Logo"
              }
              ,
              {
                imgSrc : NodeJSLogo,
                altText:"Node JS Logo"
              },
              {
                imgSrc: PostgresqlLogo,
                altText: "PostgreSQL Logo"
              },
              {
                imgSrc: FirebaseLogo,
                altText: "Firebase Logo"
              },
              ] as Array<IconDetails>}
          />
        </section>
        <section className="py-8 scroll-mt-28 lg:scroll-mt-14" id="Neon_Skyline">
          <ProjectDetails
          className="bg-fuchsia-950/60"
          projectTitle={t("projects.Neon_Skyline.title")}
          projectDescription={t("projects.Neon_Skyline.description")}
          techIcons={[{
            imgSrc: UnityLogo,
            altText: "Unity Logo"
          }] as Array<IconDetails>}
          showcase={<iframe  
            src="https://www.youtube.com/embed/u0t2sgT7C98" 
            title="Neon Skyline (senior project)" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>}
          />
        </section>
      </article>
      </main>
      <footer className="pt-4 flex">
        <div className="p-4 w-full bg-blue-500 rounded-t-lg flex items-center justify-around">
          <h3 className="text-2xl">
            {"Contact Me"}
          </h3>
          <div className="flex gap-2">
            <a 
            className="transition-all hover:scale-125" 
            href="https://www.linkedin.com/in/jarrod-ariola-558a05243/">
              <img className="max-w-10" src={LinkedInLogo}/>
            </a>
            <a 
            className="transition-all hover:scale-125" 
            href="https://github.com/J-Ariola">
              <img className="max-w-10" src={GithubLogo}/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
