import { useTranslation } from "react-i18next";
import Navigation from './components/react/Navigation';


function App() {
  const { t } = useTranslation();

  return (
    <div className="max-w-full mt-0 mb-auto p-8">
      <header className="text-center">
        <h1 className="text-5xl font-sans">{t("header")}</h1>
      </header>
      <Navigation/>
      <h2>{t("introduction.part1")}</h2>
      <section>
        <h2 className="text-3xl font-sans">{t("navigation_menu.about_me")}</h2>
        <p>{t("about_me.main")}</p>
        <p>{t("about_me.closing")} <a>{t("contact_info.email")}</a></p>
      </section>
      <section>
        <h2 className="text-3xl font-sans">{t("navigation_menu.projects")}</h2>
      </section>
      <footer>
        {"Contact Me"}
      </footer>
    </div>
  )
}

export default App
