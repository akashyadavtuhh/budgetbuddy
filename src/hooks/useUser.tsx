import { create } from "zustand";
import { produce } from "immer";

type UserState = {
  username: string;
  email: string;
  image: string;
};

type UserActions = {
  setUser: (user: UserState) => void;
};

const useUser = create<UserState & UserActions>((set) => ({
  username: "",
  email: "",
  image: "",
  setUser: (user) => set(produce((state) => Object.assign(state, user))),
}));
