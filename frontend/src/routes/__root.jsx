import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../Header";
import { UserContext } from "@/contexts";
import { useState } from "react";

export const Route = createRootRoute({
  component: () => {
    const userHook = useState("");

    return (
      <>
        <UserContext.Provider value={userHook}>
          <div className="bg-lightgreen flex min-h-screen flex-col">
            <Header />
            <Outlet />
          </div>
        </UserContext.Provider>
        <TanStackRouterDevtools />
      </>
    );
  },
});
