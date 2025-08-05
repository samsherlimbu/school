import { create } from "zustand";
import { persist } from "zustand/middleware";
import { School } from "@/types/types"; // Make sure this type is correct

interface SchoolStore {
  school: School | null;
  setSchool: (schoolData: School) => void;
  clearSchool: () => void;
}

const useSchoolStore = create<SchoolStore>()(
  persist(
    (set) => ({
      school: null,

      setSchool: (schoolData) => {
        set({ school: schoolData });
      },

      clearSchool: () => {
        set({ school: null });
      },
    }),
    {
      name: "school-storage", // localStorage key
      partialize: (state) => ({ school: state.school }), // Only persist the school object
    }
  )
);

export default useSchoolStore;
