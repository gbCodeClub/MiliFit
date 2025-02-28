import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <nav>
      <Link to={"/"}>
        <h1>Milifit</h1>
      </Link>
    </nav>
  );
}
