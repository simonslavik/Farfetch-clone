"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextProps {
  searchActive: string | null;
  setSearchActive: (searchActive: string | null) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [searchActive, setSearchActive] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
