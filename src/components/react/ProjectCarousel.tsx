import { Project } from "@/@types/global"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useTranslation } from "react-i18next"

interface Props {
  projects: Project[]
}

export default function ProjectCarousel({projects}: Props) {
  const { t } = useTranslation();

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index}>
            <div> {t(`project_titles.${project.titleKey}`)} </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>
  )
}