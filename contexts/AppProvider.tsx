"use client";

import LoadingApp from "@/components/LoadingApp";
import { createContext, useContext, useLayoutEffect, useState } from "react";

export const AppContext = createContext({
  isReady: false,
  isIntroLoaded: false,
  setIsIntroLoaded: (isLoadedIntro: boolean) => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);
  const [isIntroLoaded, setIsIntroLoaded] = useState(true);

  useLayoutEffect(() => {
    setIsReady(localStorage.getItem("isIntroLoaded") === "true");
    setIsIntroLoaded(localStorage.getItem("isIntroLoaded") === "true");
  }, []);

  useLayoutEffect(() => {
    if (isReady) return;
    if (isIntroLoaded) {
      const tm = setTimeout(() => {
        setIsReady(true);
        setIsIntroLoaded(true);
        window.localStorage.setItem("isIntroLoaded", "true");
      }, 500);
      return () => clearTimeout(tm);
    }
  }, [isIntroLoaded, isReady]);

  return (
    <AppContext.Provider
      value={{
        isReady,
        isIntroLoaded,
        setIsIntroLoaded,
      }}
    >
      <>
        {!isReady && <LoadingApp />}
        {isReady && children}
      </>
    </AppContext.Provider>
  );
};

export default AppProvider;
