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


export default function Navigation() {
  const { t } = useTranslation();
  const projectTitleKeys = t("project_titles", {returnObjects: true});

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {t("navigation_menu.about_me")}
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("navigation_menu.projects")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 grid-cols-1 ">
              {Object.keys(projectTitleKeys).map( (title) => (
                <li className="row-span-3" key={t(`project_titles.${title}`)}>
                <NavigationMenuLink asChild>
                  <a href="/"
                  className="flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    {t(`project_titles.${title}`)}
                  </a>
                </NavigationMenuLink>
              </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
