"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useTranslation } from "react-i18next";
import { Project } from "@/@types/global";

interface Props {
  projects: Project[]
  className?: string
}

export default function Navigation({ projects } : Props) {
  const { t } = useTranslation();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle() + " min-w-24"}>
            {t("navigation_menu.about_me")}
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="min-w-28">
            {t("navigation_menu.projects")}
            </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 grid-cols-1 ">
              {projects.map( (project) => (
                <li className="row-span-3" key={t(`projects.${project.titleKey}`)}>
                <NavigationMenuLink asChild>
                  <a href={`#${project.id}`}
                  className="flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    {t(`projects.${project.titleKey}`)}
                  </a>
                </NavigationMenuLink>
              </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}
