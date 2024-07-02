import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navigation from './components/react/Navigation';
import ProjectCarousel from "./components/react/ProjectCarousel";
import { Project } from "@/@types/global";
import { Button } from "./components/ui/button";
import NextJSLogo from "../public/img/badges/next-js.logo.svg";
import NodeJSLogo from "../public/img/badges/node-js.logo.svg";
import PrismaLogo from "../public/img/badges/prisma.logo.svg";
import FirebaseLogo from "../public/img/badges/firebase.logo.svg";
import JestLogo from "../public/img/badges/jest.logo.svg";
import ProtoMapsLogo from "../public/img/badges/protomaps.logo.svg";
import ExternalLinkIcon from "../public/img/icons/external-link.icon.svg";

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
    const titleKeys = Object.keys(projectTitleKeys).map( title => {
      const project:Project = {
        titleKey: title,
        imgUrl: projectNameImgFileNameLookUp[title as keyof {"PoiPoi": string, "Bug_Off": string, "Neon_Skyline": string}],
      }
      return project;
    });
    setProjects(titleKeys);
  }

  return (
    <div className="max-w-full mt-0 mb-auto p-8">
      <header className="text-center">
        <h1 className="text-5xl font-sans">{t("header")}</h1>
      </header>
      <Navigation projects={projects}/>
      <h2>{t("introduction.part_1")}</h2>
      <article>
        <h2 className="text-3xl font-sans">{t("navigation_menu.about_me")}</h2>
        <p>{t("about_me.part_1")}</p>
        <p>{t("about_me.part_2")}</p>
        <p>{t("about_me.closing")} <a>{t("contact_info.email")}</a></p>
      </article>
      <article>
        <section>
          <h2 className="text-3xl font-sans">{t("navigation_menu.projects")}</h2>
          <ProjectCarousel projects={projects}/>
        </section>
        {/* TODO: Each section of the project will be inserted here */}
        <section className="">
          <div className="bg-purple-950/50 rounded-lg w-full ">
              <div className="flex justify-center">
                <h2 className="text-3xl pr-6">{"Project Name"}</h2>
                <Button asChild variant="outline" size="icon" onClick={() => alert("External Link Clicked")}>
                  <img className="w-8" src={ExternalLinkIcon} alt="Link to Project" />
                </Button>
              </div>
              <div className="grid grid-cols-3 grid-rows-2 gap-2">
                <p className="col-span-2 text-xl pl-2 ">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor scelerisque orci ac placerat. Aliquam id dolor sodales, ultrices ligula et, mollis erat. Fusce commodo fringilla mi varius euismod. Aliquam ex erat, molestie at fringilla sit amet, congue ac ipsum. Sed tincidunt quis mi a maximus. Donec rhoncus rutrum nunc sed mollis. Sed in tempor enim. Vestibulum id purus mauris. Fusce non euismod lectus. Etiam finibus sodales purus ac facilisis. Mauris imperdiet ultrices nunc, vitae egestas nunc bibendum ac. Duis sollicitudin placerat dignissim. Morbi blandit consectetur dui, id auctor urna dictum ac. In quam dui, commodo sit amet accumsan a, commodo quis neque."}</p>
                <img className="col-span-1 col-start-3 row-span-2 self-center" src="/img/poipoi.png" alt="Image of PoiPoi"/>
                <div className="col-start-1 col-span-2 flex flex-wrap w-auto object-contain md:object-scale-down">
                  <img className="w-24" src={NodeJSLogo} alt="Node JS Logo" ></img>
                  <img className="w-24" src={PrismaLogo} alt="Prisma Logo" ></img>
                  <img className="w-24" src={NextJSLogo} alt="Next JS Logo" ></img>
                  <img className="w-24" src={FirebaseLogo} alt="Firebase Logo" ></img>
                  <img className="w-24" src={JestLogo} alt="Jest Logo" ></img>
                  <img className="w-24" src={ProtoMapsLogo} alt="Protomaps Logo" ></img>
                </div>
              </div>
          </div>
        </section>
      </article>
      <footer>
        {"Contact Me"}
      </footer>
    </div>
  )
}

export default App
