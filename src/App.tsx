import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from "react-i18next";
import i18n from './i18n';
import { Button } from './components/ui/button';

type Language = {
  nativeName: string,
}

type Languages = {
  en: Language
  jp: Language
}

const lngs:Languages = {
  en: { nativeName: "English"},
  jp: { nativeName: "Japanese"}
}

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation();

  return (
    <>
      <header>
        {t("header")}
      </header>
      <nav>
        <Button onClick={() => console.log("Nav button 1")}> Nav1 </Button>
        <Button onClick={() => console.log("Nav button 2")}> Nav2 </Button>
        <Button onClick={() => console.log("Nav button 3")}> Nav3 </Button>
      </nav>
      <div>
        {Object.keys(lngs).map( (lng) => (
          <Button key={lng} type="submit" onClick={() => i18n.changeLanguage(lng)}>
            { lngs[lng as keyof Languages].nativeName }
          </Button>
        ))}
      </div>
      <h1>This is my Portfolio. Feel free to check out any of my projects</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
      <footer>
        Contact Me
      </footer>
    </>
  )
}

export default App
