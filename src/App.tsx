import './App.css'
import { useTranslation } from "react-i18next";
import i18n from './i18n';
import { Button } from './components/ui/button';
import Navigation from './components/react/Navigation';

type Language = {
  nativeName: string,
}

type Languages = {
  en: Language
  jp: Language
}

const lngs:Languages = {
  en: { nativeName: "English"},
  jp: { nativeName: "日本語"}
}

function App() {
  const { t } = useTranslation();

  return (
    <>
      <header>
        <h1>{t("header")}</h1>
      </header>
      <Navigation/>
      <div>
        {Object.keys(lngs).map( (lng) => (
          <Button variant="link"
          className={(i18n.resolvedLanguage === lng) ? "underline" : ""}
          key={lng} type="submit" onClick={() => i18n.changeLanguage(lng)}>
            { lngs[lng as keyof Languages].nativeName }
          </Button>
        ))}
      </div>
      <h2>{t("introduction.part1")}</h2>
      <footer>
        {"Contact Me"}
      </footer>
    </>
  )
}

export default App
