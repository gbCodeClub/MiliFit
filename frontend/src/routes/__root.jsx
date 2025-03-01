import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../Header";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <div className="bg-lightgreen">
          <Header />
          <Outlet />
        </div>
        <TanStackRouterDevtools />
      </>
    );
  },
});
