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
            <a href={`#${project.id}`}>
              {project.imgUrl ? <img 
              className="h-auto object-contain" 
              src={project.imgUrl} 
              alt={`Image of project ${t(`projects.${project.titleKey}`)}`}/> 
              : <h1 className="text-xl text-blue-500 text-center">{t(`projects.${project.titleKey}`)}</h1>}
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>
  )
}