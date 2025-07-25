// stores/useUserSession.ts
import { logout } from "@/actions/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";


// User type
export interface User {
  id: string;
  email: string;
  name: string;
  role: "SUPER_ADMIN" | "ADMIN" | "TEACHER" | "STUDENT" | "PARENT";
  createdAt: string;
  updatedAt: string;
  image?: string;
  phone?: string;
  schoolId?: string;
  schoolName?: string;
}

// Session data passed to setUser
export interface SessionData {
  user: User;
  accessToken: string;
  refreshToken: string;
}

// Zustand store interface
interface UserSessionStore {
  user: User | null;
  setUser: (userData:User) => Promise<void>;
  clearSession: () => Promise<void>;
}

// ✅ Fixed and working Zustand store with persistence
export const useUserSession = create<UserSessionStore>()(
  persist(
    (set) => ({
      user: null,

      setUser: async (userData) => {
        try {
          
           set({ user: userData });
        } catch (error) {
          console.error("Session creation error", error);
        }
      },

      clearSession: async () => {
        try {
          const result = await logout();
          if (result.success) {
            set({ user: null });
          } else {
            throw new Error("Logout failed");
          }
        } catch (error) {
          console.error("Logout error", error);
        }
      },
    }),
    {
      name: "user-session", // localStorage key
      partialize: (state) => ({ user: state.user }), // Only persist user
    }
  )
);
