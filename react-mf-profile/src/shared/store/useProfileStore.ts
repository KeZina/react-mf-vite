import { create } from "zustand";
import { TUser,TProfileStore } from "../models";

const mock: TUser = {
  id: 1,
  firstName: "Number One",
  lastName: "Nguyen",
};

export const useProfileStore = create<TProfileStore>((set) => ({
    profile: mock,
    updateProfile: (profile: {firstName: string, lastName: string}) => set((state) => {
      return {profile: {id: state.profile.id, ...profile}}
    }),
  }),
);

export default useProfileStore