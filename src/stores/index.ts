import UserStore from "./userStore";

const userStore = new UserStore();

export const globalStore = {
  userStore,
};
