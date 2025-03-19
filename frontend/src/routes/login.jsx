import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/components/login-form";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <div className="flex grow flex-col">
      <LoginForm className="flex grow flex-col justify-center" />
    </div>
  );
}
