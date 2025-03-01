import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/register")({
  component: Register,
});

function Register() {
  const [name, setName] = useState("");
  return (<div>Hello "/register"!</div>);
}
