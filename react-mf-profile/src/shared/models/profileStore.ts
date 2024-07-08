import { TUser } from "./user";

export type TProfileStore = {
    profile: TUser;
    updateProfile: (profile: {firstName: string, lastName: string}) => void;
}