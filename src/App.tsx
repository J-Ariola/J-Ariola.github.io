import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from "react-i18next";
import i18n from './i18n';

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
        <button onClick={() => console.log("Nav button 1")}>Nav 1</button>
        <button onClick={() => console.log("Nav button 2")}>Nav 2</button>
        <button onClick={() => console.log("Nav button 3")}>Nav 3</button>
      </nav>
      <div>
        {Object.keys(lngs).map( (lng) => (
          <button key={lng} type="submit" onClick={() => i18n.changeLanguage(lng)}>
            { lngs[lng as keyof Languages].nativeName }
          </button>
        ))}
      </div>
      <h1>This is my Portfolio. Feel free to check out any of my projects</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <footer>
        Contact Me
      </footer>
    </>
  )
}

export default App
