import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navigation from './components/react/Navigation';
import ProjectCarousel from "./components/react/ProjectCarousel";
import { Project } from "@/@types/global";

function App() {
  const { t } = useTranslation();
  const projectTitleKeys = t("project_titles", {returnObjects: true});
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    handleInitializeProjects();
  }, [])

  function handleInitializeProjects() {
    const titleKeys = Object.keys(projectTitleKeys).map( title => {
      return ({titleKey: title} as Project) 
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
        
      </article>
      <footer>
        {"Contact Me"}
      </footer>
    </div>
  )
}

export default App
