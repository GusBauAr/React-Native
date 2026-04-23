import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type User = {
  avatar: string;
  userName: string;
  email: string;
  authority: string[];
};

type Session = {
  signedIn: boolean;
};

type AuthState = {
  session: Session;
  user: User;
  token: string | null;
};

type AuthAction = {
  setSessionSignedIn: (payload: boolean) => void;
  setUser: (payload: User) => void;
  setToken: (token: string | null) => void;
  logout: () => void;
};

const initialState: AuthState = {
  session: {
    signedIn: false,
  },
  user: {
    avatar: "",
    userName: "",
    email: "",
    authority: [],
  },
  token: null,
};

export const useAuthStore = create<AuthState & AuthAction>()(
  persist(
    (set) => ({
      ...initialState,

      setSessionSignedIn: (payload) =>
        set((state) => ({
          session: {
            ...state.session,
            signedIn: payload,
          },
        })),

      setUser: (payload) =>
        set((state) => ({
          user: {
            ...state.user,
            ...payload,
          },
        })),

      setToken: (token) => set({ token }),

      logout: () =>
        set({
          ...initialState,
        }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
