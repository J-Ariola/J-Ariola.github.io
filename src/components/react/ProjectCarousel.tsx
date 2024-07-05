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
  projects: Project[],
  className: string,
}

export default function ProjectCarousel({projects, className}: Props) {
  const { t } = useTranslation();

  return (
    <Carousel 
    className={className}
    opts={{
      align: "start",
      loop:true,
    }}>
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem 
          key={index}
          >
            <a href="/">
              <div> {t(`projects.${project.titleKey}`)} </div>
              {project.imgUrl ? <img className="h-44 object-cover" src={`/img/${project.imgUrl}`} alt={`Image of project ${project.titleKey}`}/> : <></>}
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>
  )
}