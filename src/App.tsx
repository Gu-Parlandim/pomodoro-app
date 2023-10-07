import { useEffect, useRef } from "react";
import NoSleep from "nosleep.js";
import Home from "./pages/Home";
import WallpaperProvider from "./context/wallpaperContext";
import ScreenModeProvider from "./context/screenModeContext";
import Reset from "./styles/reset";

function App() {
  const noSleep = useRef(new NoSleep());

  useEffect(() => {
    noSleep.current.enable();
  }, []);

  return (
    <>
      <Reset />
      <ScreenModeProvider>
        <WallpaperProvider>
          <Home />
        </WallpaperProvider>
      </ScreenModeProvider>
    </>
  );
}

export default App;
