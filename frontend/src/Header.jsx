import { Link } from "@tanstack/react-router";
import milifitLogo from "/src/assets/milifit-withname.svg";
import { useContext } from "react";
import { UserContext } from "./contexts";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  let [username] = useContext(UserContext);

  return (
    <nav className="bg-darkgreen flex flex-row">
      <div className="grow basis-0"></div>
      <Link to={"/"} className="self-center">
        <img
          src={milifitLogo}
          className="h-30 w-90 object-cover"
          alt="Milifit"
        />
      </Link>
      <div className="flex grow basis-0 flex-row items-center justify-end">
        {username ? (
          <Avatar className="mx-4 h-12 w-12">
            <AvatarImage
              src="change-when-adding-support-for-profiles"
              alt="@shadcn"
            />
            <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
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
