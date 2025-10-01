"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AppContextProps {
  searchActive: string | null;
  setSearchActive: (searchActive: string | null) => void;
  typeWear: string | null;
  setTypeWear: (typeWear: string | null) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [searchActive, setSearchActive] = useState<string | null>(null);
  const [typeWear, setTypeWear] = useState<string | null>("menswear");

  // Set typeWear based on current URL path on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path.includes("/women")) {
        setTypeWear("womenswear");
      } else if (path.includes("/men")) {
        setTypeWear("menswear");
      } else if (path.includes("/kids")) {
        setTypeWear("kidswear");
      }
    }
  }, []);

  return (
    <AppContext.Provider
      value={{ searchActive, setSearchActive, typeWear, setTypeWear }}
    >
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
