import { Button } from "@/components/ui/button";
import ExternalLinkIcon from "@/assets/img/icons/external-link.icon.svg";
import { cn } from "@/lib/utils";
import { IconDetails } from "@/@types/global";
import Icon from "./Icon";

interface Props {
  projectTitle?: string,
  projectDescription?: string,
  projectLink?: string,
  techIcons?: IconDetails[],
  showcase?: React.ReactNode,
  className?: string,
}

export default function ProjectDetails({
  projectTitle = "Title",
  projectDescription = "Description",
  projectLink,
  techIcons,
  showcase: secondary,
  className
  }: Props) {

  function handleExternalLinkOnClick() {
    if (!projectLink) {
      alert("Sorry, no link at this time");
      return;
    }
    window.location.href = projectLink;
  }

  return (
    <div className={cn(
      "rounded-lg w-full flex flex-col px-8",
      className)}>
      <div className="flex justify-center py-4 min-w-10">
        <h2 className="text-3xl font-semibold lg:text-4xl text-balance text-center">{projectTitle}</h2>
        <div className="w-0 overflow-visible">
          <Button asChild className="max-w-max" variant="outline" size="icon" title={`Link to ${projectLink}`} onClick={handleExternalLinkOnClick}>
            <img className="w-8" src={ExternalLinkIcon} alt="Link to Project" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-8 md:grid md:grid-cols-2 md:items-start md:gap-x-4">
        <div className="flex flex-col gap-y-4 lg:gap-y-8 h-full">
          <p className="lg:text-2xl text-pretty">{projectDescription}</p>
          <div className="flex justify-center gap-1 md:flex-wrap md:pb-4 ">
            {techIcons ? 
              techIcons.map( (icon) => {
                return <Icon
                iconDetails={icon}
                className="w-12 sm:w-10 md:w-20"/>
              }) : 
              <></>
            }
          </div>
        </div>
        <div className="pb-4 flex justify-center">
          {secondary ? 
            secondary : 
            <></>}
        </div>
      </div>
          </div>
  );
}