import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { AuthState } from "./types";

const initialState: Pick<
  AuthState,
  "role" | "permissions" | "accessToken" | "user"
> = {
  role: "",
  permissions: [],
  accessToken: "",
  user: null,
};

const authState = (
  set: (fn: (state: AuthState) => Partial<AuthState>) => void
): AuthState => ({
  ...initialState,

  setUser: (userData, accessToken) => {
    set(() => ({
      role: userData.user_name,
      permissions: userData.permissions,
      accessToken,
      user: userData,
    }));
  },

  logout: () => {
    set(() => ({
      ...initialState,
    }));
  },
});

const useRoleBasedAccess = create<AuthState>()(
  devtools(
    persist(authState, {
      name: "role_access", // Name for localStorage
    })
  )
);

export default useRoleBasedAccess;
