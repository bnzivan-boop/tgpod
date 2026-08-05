"use client";

import { createContext, useContext, useState } from "react";
import { Preloader } from "./Preloader";

const IntroContext = createContext(false);

/** true once the preloader has finished — hero entrance animations wait for it */
export const useIntroDone = () => useContext(IntroContext);

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  return (
    <IntroContext.Provider value={done}>
      {!done && <Preloader onDone={() => setDone(true)} />}
      {children}
    </IntroContext.Provider>
  );
}
