import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navigation from './components/react/Navigation';
import ProjectCarousel from "./components/react/ProjectCarousel";
import { IconDetails, Project } from "@/@types/global";
import LanguageSelector from "@/components/react/LanguageSelector";
import ProjectDetails from "./components/react/ProjectDetails";
import NextJSLogo from "../public/img/badges/next-js.logo.svg";
import NodeJSLogo from "../public/img/badges/node-js.logo.svg";
import PrismaLogo from "../public/img/badges/prisma.logo.svg";
import FirebaseLogo from "../public/img/badges/firebase.logo.svg";
import JestLogo from "../public/img/badges/jest.logo.svg";
import ProtoMapsLogo from "../public/img/badges/protomaps.logo.svg";
import UnityLogo from "../public/img/badges/unity.logo.svg";

const projectNameImgFileNameLookUp = {
  "PoiPoi": "poipoi.png",
  "Bug_Off": "bug-off-logo.png",
  "Neon_Skyline": "neon-skyline-logo-crop.png",
}

function App() {
  const { t } = useTranslation();
  const projectTitleKeys = t("project_titles", {returnObjects: true});
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    handleInitializeProjects();
  }, [])

  function handleInitializeProjects() {
    const projects = Object.keys(projectTitleKeys).map( title => {
      const project:Project = {
        titleKey: title,
        imgUrl: projectNameImgFileNameLookUp[title as keyof {"PoiPoi": string, "Bug_Off": string, "Neon_Skyline": string}],
      }
      return project;
    });
    setProjects(projects);
  }

  return (
    <div className="max-w-10/12 mt-0 mb-auto">
      <header className="flex text-center bg-gradient-to-b from-sky-400 to-blue-500 border-4 border-green-500 w-full max-w-none sticky top-0 p-2 z-50">
        <div className="flex items-center min-w-20">
          <h1 className="text-lg lg:text-3xl font-sans">{t("header")}</h1>
        </div>
        <Navigation 
          projects={projects}/>
        <LanguageSelector 
        className="flex ml-auto justify-end flex-wrap"/>
      </header>
      <main className="px-4 pt-8 lg:px-36">
      <article className="flex flex-col items-center py-2">
        <img 
        src="/img/profile-picture.jpg"
        alt="Profile Picture"
        className="w-1/2 md:max-w-[33%] aspect-square rounded-full object-cover"/>
        <h2>{t("introduction.part_1")}</h2>
      </article>
      <article className="py-2">
        <h2 className="text-3xl font-sans">{t("navigation_menu.about_me")}</h2>
        <p>{t("about_me.part_1")}</p>
        <br></br>
        <p>{t("about_me.part_2")}</p>
        <br></br>
        <p>{t("about_me.closing")} <a>{t("contact_info.email")}</a></p>
      </article>
      <article>
        <section className="flex flex-col items-center border-4 border-green-500">
          <h2 className="text-3xl font-sans">{t("navigation_menu.projects")}</h2>
          <ProjectCarousel 
          className="w-full max-w-xs"
          projects={projects}/>
        </section>
        {/* TODO: Each section of the project will be inserted here */}
        <section className="pt-4 py-16">
          <ProjectDetails
            projectTitle={t("project_titles.PoiPoi")}
            projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor scelerisque orci ac placerat. Aliquam id dolor sodales, ultrices ligula et, mollis erat. Fusce commodo fringilla mi varius euismod. Aliquam ex erat, molestie at fringilla sit amet, congue ac ipsum. Sed tincidunt quis mi a maximus. Donec rhoncus rutrum nunc sed mollis. Sed in tempor enim. Vestibulum id purus mauris. Fusce non euismod lectus. Etiam finibus sodales purus ac facilisis. Mauris imperdiet ultrices nunc, vitae egestas nunc bibendum ac. Duis sollicitudin placerat dignissim. Morbi blandit consectetur dui, id auctor urna dictum ac. In quam dui, commodo sit amet accumsan a, commodo quis neque."
            techIcons={[
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
                imgSrc: FirebaseLogo,
                altText: "Firebase Logo"
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
        <section className="py-16">
          <ProjectDetails
            className="bg-amber-800"
            projectTitle={t("project_titles.Bug_Off")}
            projectDescription="A simple created for a Itch.io GameJam. The user acts as a bug in a game with the goal to frustrate the hero into quitting the game."
            techIcons={[{
              imgSrc: UnityLogo,
              altText: "Unity Logo"
            }] as Array<IconDetails>}
            showcase={<img src="/img/bug-off-showcase.gif" alt="Gif of gameplay of Bug-Off"/>}
          />
        </section>
      </article>
      </main>
      <footer className="pt-4">
        <div className="pb-4 bg-blue-500 rounded-t-lg">
          {"Contact Me"}
        </div>
      </footer>
    </div>
  )
}

export default App
