import { createContext } from "react";

// UserContext holds a username; is "" when the user is not logged in
export const UserContext = createContext(["", () => {}]);
