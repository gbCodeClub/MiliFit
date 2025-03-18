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
      <div className="flex grow basis-0 flex-row items-center justify-end">
        <Link
          to={"/login"}
          className="text-darkgreen mx-4 inline-block rounded-lg bg-[#F5F5DC] px-6 py-3 font-bold transition hover:bg-[#D6CFC7]"
        >
          로그인
        </Link>
      </div>
    </nav>
  );
}
