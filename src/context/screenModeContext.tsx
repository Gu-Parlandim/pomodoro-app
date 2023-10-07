import { createContext, useState, useCallback } from "react";

interface ScreenModeProvideProps {
  children: React.ReactNode;
}

export interface ScreenModeContextState {
  getCurrentScreenMode: () => string;
  toggleScreenMode: () => void;
}

export const ScreenModeContext = createContext<ScreenModeContextState>({
  getCurrentScreenMode: () => "",
  toggleScreenMode: () => {},
});

const ScreenModeProvider: React.FC<ScreenModeProvideProps> = ({ children }) => {
  const [currentScreenMode, setCurrentScreenMode] = useState<string>("");

  const getCurrentScreenMode = useCallback(() => {
    return currentScreenMode;
  }, [currentScreenMode]);

  const toggleScreenMode = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setCurrentScreenMode("normal");
      return;
    }

    document.documentElement.requestFullscreen();
    setCurrentScreenMode("fullscreen");
  }, []);

  return (
    <ScreenModeContext.Provider
      value={{
        getCurrentScreenMode,
        toggleScreenMode,
      }}
    >
      {children}
    </ScreenModeContext.Provider>
  );
};

export default ScreenModeProvider;
