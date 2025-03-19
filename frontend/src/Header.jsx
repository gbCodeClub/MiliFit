import { Link } from "@tanstack/react-router";
import milifitLogo from "/src/assets/milifit-withname.svg";
import { useContext } from "react";
import { UserContext } from "./contexts";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  let [username] = useContext(UserContext);

  return (
    <nav className="bg-darkgreen flex flex-row">
      <div className="flex grow basis-0 flex-row">
        {username ? (
          <div className="flex flex-row items-center space-x-2 self-stretch">
            <Switch id="airplane-mode" className="dark mx-3" />
            <Label
              htmlFor="airplane-mode"
              className="text-lightgreen text-lg font-bold"
            >
              휴가
            </Label>
          </div>
        ) : null}
      </div>
      <Link to={"/"} className="self-center">
        <img
          src={milifitLogo}
          className="h-30 w-90 object-cover"
          alt="Milifit"
        />
      </Link>
      <div className="flex grow basis-0 flex-row items-center justify-end">
        {username ? (
          <>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    to="/about"
                    className="text-lightgreen font-bold"
                    asChild
                  >
                    <Link to="/about" className="h-full w-full">
                      소개
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    to="/"
                    className="text-lightgreen font-bold"
                    asChild
                  >
                    <Link to="/">유저 홈</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    to="/community"
                    className="text-lightgreen font-bold"
                    asChild
                  >
                    <Link to="/community">커뮤니티</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Avatar className="mx-4 h-12 w-12">
              <AvatarImage
                src="change-when-adding-support-for-profiles"
                alt="@shadcn"
              />
              <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
            </Avatar>
          </>
        ) : (
          <Link
            to={"/login"}
            className="text-darkgreen mx-4 inline-block rounded-lg bg-[#F5F5DC] px-6 py-3 font-bold transition hover:bg-[#D6CFC7]"
          >
            로그인
          </Link>
        )}
      </div>
    </nav>
  );
}
