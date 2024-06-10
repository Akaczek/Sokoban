import { FC, createContext, useState } from "react";

export const PhaseContext = createContext<{
  phase: string;
  setPhase: (phase: string) => void;
}>({
  phase: "main-menu",
  setPhase: () => {},
});

export const PhaseProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [phase, setPhase] = useState("main-menu");

  return (
    <PhaseContext.Provider value={{ phase, setPhase }}>
      {children}
    </PhaseContext.Provider>
  );
};
