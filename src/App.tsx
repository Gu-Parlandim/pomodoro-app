import { useEffect } from "react";
import NoSleep from "nosleep.js";
import Home from "./pages/Home";
import WallpaperProvider from "./context/wallpaperContext";
import ScreenModeProvider from "./context/screenModeContext";
import Reset from "./styles/reset";

function App() {
  //const noSleep = useRef(new NoSleep());

  /* useEffect(() => {
    noSleep.current.enable();
  }, []); */

  useEffect(() => {
    let isEnableNoSleep = false;
    const noSleep = new NoSleep();
    document.addEventListener(
      `click`,
      function enableNoSleep() {
        document.removeEventListener(`click`, enableNoSleep, false);
        noSleep.enable();
        isEnableNoSleep = true;
      },
      false
    );
    return () => {
      if (isEnableNoSleep) {
        noSleep.disable();
      }
    };
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
