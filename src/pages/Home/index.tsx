import * as S from "./styles";
import useWallpaperHook from "../../hooks/useWallpaperHook";
import MenuButtons from "../../components/MenuButtons";
import MenuWallpaper from "../../components/MenuWallpaper";
import PomodoroSettings from "../../components/Pomodoro";

const Home = () => {
  const { getCurrentWallpaper } = useWallpaperHook();
  const currentWallpaper = getCurrentWallpaper();

  return (
    <S.WrapperWallpaper $currentWallpaper={currentWallpaper}>
      <MenuButtons />
      <MenuWallpaper />

      <PomodoroSettings />
    </S.WrapperWallpaper>
  );
};

export default Home;
