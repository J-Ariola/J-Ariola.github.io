import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navigation from './components/react/Navigation';
import ProjectCarousel from "./components/react/ProjectCarousel";
import { Project } from "@/@types/global";
import NextJSLogo from "../public/img/badges/next-js.logo.svg";
import NodeJSLogo from "../public/img/badges/node-js.logo.svg";
import PrismaLogo from "../public/img/badges/prisma.logo.svg";
import FirebaseLogo from "../public/img/badges/firebase.logo.svg";
import JestLogo from "../public/img/badges/jest.logo.svg";
import ProtoMapsLogo from "../public/img/badges/protomaps.logo.svg";
import { Button } from "./components/ui/button";
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
          <div className="flexbg-purple-950/50 rounded-lg w-full justify-center">
            <div className="">
              <div className="flex justify-center">
              <h2 className="text-3xl pr-6">{"Project Name"}</h2>
              <Button asChild variant="outline" size="icon" onClick={() => alert("External Link Clicked")}>
                <img className="w-8" src={ExternalLinkIcon} alt="Link to Project" />
              </Button>
              </div>
              <p className="text-2xl">{"This will be a small description of the app."}</p>
              <div className="grid grid-cols-4 gap-2 w-56">
                <img className="bg-white rounded-lg" src={NodeJSLogo} alt="Node JS Logo" ></img>
                <img className="bg-white rounded-lg" src={PrismaLogo} alt="Prisma Logo" ></img>
                <img src={NextJSLogo} alt="Next JS Logo" ></img>
                <img src={FirebaseLogo} alt="Firebase Logo" ></img>
                <img src={JestLogo} alt="Jest Logo" ></img>
                <img src={ProtoMapsLogo} alt="Protomaps Logo" ></img>

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
