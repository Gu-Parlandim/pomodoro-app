import { useContext } from "react";
import {
  ScreenModeContext,
  ScreenModeContextState,
} from "../context/screenModeContext";

const useScreenMode = (): ScreenModeContextState => {
  const data = useContext(ScreenModeContext);
  if (!data) {
    throw new Error("useScreenMode must be used within an ScreenModeProvider");
  }

  return data;
};

export default useScreenMode;
