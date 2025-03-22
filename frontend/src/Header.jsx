import { Link, useNavigate } from "@tanstack/react-router";
import milifitLogo from "/src/assets/milifit-withname.svg";
import { useContext, useState } from "react";
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
  let [username, setUsername] = useContext(UserContext);
  let [showOverlay, setShowOverlay] = useState(false);

  const navigate = useNavigate({});
  function logout() {
    setShowOverlay(false);
    setUsername("");
    navigate({
      to: "/",
    });
  }

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
            <div className="relative">
              <button
                onClick={() => setShowOverlay(!showOverlay)}
                className="cursor-pointer focus:outline-none"
              >
                <Avatar className="mx-4 h-12 w-12">
                  <AvatarImage
                    src="change-when-adding-support-for-profiles"
                    alt="@shadcn"
                  />
                  <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
                </Avatar>
              </button>
              {showOverlay && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg">
                  <Link
                    to="/profile"
                    className="block !rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setShowOverlay(false)}
                  >
                    프로필
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setShowOverlay(false)}
                  >
                    설정
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full cursor-pointer px-4 py-2 text-left text-gray-800 hover:bg-gray-200"
                  >
                    로그아웃
                  </button>
                </div>
              )}
            </div>
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
