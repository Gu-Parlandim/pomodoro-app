import { useContext } from "react";
import {
  WallpaperContext,
  WallpaperContextState,
} from "../context/wallpaperContext";

const useWallpaperHook = (): WallpaperContextState => {
  const data = useContext(WallpaperContext);
  if (!data)
    throw new Error("useWallpaperHook must be used within a WallpaperProvider");

  return data;
};

export default useWallpaperHook;
