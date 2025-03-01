import { Link } from "@tanstack/react-router";
import milifitLogo from "/src/assets/milifit-withname.svg";

export default function Header() {
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
      <Link to={"/login"} className="grow basis-0 text-white">
        로그인
      </Link>
    </nav>
  );
}
