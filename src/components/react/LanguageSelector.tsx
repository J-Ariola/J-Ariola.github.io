import i18n from '@/i18n';
import { Button } from '@/components/ui/button';

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

interface Props {
  className?: string;
}

export default function LanguageSelector({className}:Props):React.JSX.Element {
  return (
    <div className={className}>
      {Object.keys(lngs).map( (lng) => (
          <Button variant="link"
          className={(i18n.resolvedLanguage === lng) ? "underline" : ""}
          key={lng} type="submit" onClick={() => i18n.changeLanguage(lng)}>
            { lngs[lng as keyof Languages].nativeName }
          </Button>
        ))}
    </div>
  )
}