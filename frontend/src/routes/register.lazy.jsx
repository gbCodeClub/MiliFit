import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/register")({
  component: Register,
});

function Register() {
  return <div>Hello "/register"!</div>;
}
