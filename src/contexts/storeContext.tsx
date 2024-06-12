"use client";

import { globalStore } from "@/stores";
import { ReactNode, createContext } from "react";

export const StoreContext = createContext(globalStore);

export const StoreWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={globalStore}>
      {children}
    </StoreContext.Provider>
  );
};
