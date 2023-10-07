import Pomodoro from "../../components/Pomodoro";
import * as S from "./styles";
import useWallpaperHook from "../../hooks/useWallpaperHook";
import MenuButtons from "../../components/MenuButtons";
import MenuWallpaper from "../../components/MenuWallpaper";

const Home = () => {
  const { getCurrentWallpaper } = useWallpaperHook();
  const currentWallpaper = getCurrentWallpaper();

  return (
    <S.WrapperWallpaper $currentWallpaper={currentWallpaper}>
      <MenuButtons />
      <MenuWallpaper />

      <S.Container>
        <Pomodoro />
      </S.Container>
    </S.WrapperWallpaper>
  );
};

export default Home;
