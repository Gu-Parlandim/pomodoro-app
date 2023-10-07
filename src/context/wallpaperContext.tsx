import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import WallPapers, { WallpaperList } from "./listOfWallpaper";

export interface WallpaperContextProps {
  children: React.ReactNode;
}

interface handleMenuWallpaperProps {
  open?: boolean;
  closed?: boolean;
}

export interface WallpaperContextState {
  wallpaperUrl: string;
  menuWallpaperIsVisible: boolean;
  handleMenuWallpaper: (props?: handleMenuWallpaperProps) => void;
  getListOfWallpapers: () => WallpaperList[];
  getCurrentWallpaper: () => string;
  setCurrentWallpaper: (url: string) => void;
}

export const WallpaperContext = createContext<WallpaperContextState>({
  wallpaperUrl: "",
  menuWallpaperIsVisible: false,
  handleMenuWallpaper: () => {},
  getListOfWallpapers: () => [],
  getCurrentWallpaper: () => "",
  setCurrentWallpaper: () => {},
});

const WallpaperProvider: React.FC<WallpaperContextProps> = ({ children }) => {
  const [wallpaperUrl, setWallpaperUrl] = useState<string>("");
  const [menuWallpaperIsVisible, setMenuWallpaperIsVisible] =
    useState<boolean>(false);

  const listOfWallpapers = useMemo<WallpaperList[]>(() => WallPapers, []);

  const getListOfWallpapers = useCallback(() => {
    return listOfWallpapers;
  }, [listOfWallpapers]);

  const getCurrentWallpaper = useCallback((): string => {
    return wallpaperUrl;
  }, [wallpaperUrl]);

  const setCurrentWallpaper = useCallback((url: string) => {
    setWallpaperUrl(url);
    localStorage.setItem("wallpaper", url);
  }, []);

  const setDefaultWallpaper = useCallback(() => {
    const salved = localStorage.getItem("wallpaper");

    if (salved) {
      setWallpaperUrl(salved);
      return;
    }

    setWallpaperUrl(listOfWallpapers[0].url);
  }, [listOfWallpapers]);

  const handleMenuWallpaper = useCallback(
    (props?: handleMenuWallpaperProps) => {
      if (props && props.open) {
        setMenuWallpaperIsVisible(true);
        return;
      }

      if (props && props.closed) {
        setMenuWallpaperIsVisible(false);
        return;
      }

      setMenuWallpaperIsVisible((prevState) => !prevState);
    },
    []
  );

  useEffect(() => {
    setDefaultWallpaper();
  }, [setDefaultWallpaper]);

  return (
    <WallpaperContext.Provider
      value={{
        wallpaperUrl,
        menuWallpaperIsVisible,
        handleMenuWallpaper,
        getListOfWallpapers,
        getCurrentWallpaper,
        setCurrentWallpaper,
      }}
    >
      {children}
    </WallpaperContext.Provider>
  );
};

export default WallpaperProvider;
