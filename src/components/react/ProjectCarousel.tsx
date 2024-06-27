import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ProjectCarousel() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 4}).map((_, index) => (
          <CarouselItem key={index}>
            <div> {index} </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>
  )
}