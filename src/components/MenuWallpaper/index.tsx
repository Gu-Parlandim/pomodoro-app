import * as S from "./styles";
import useWallpaperHook from "../../hooks/useWallpaperHook";

interface MenuWallpaperProps {
  menuVisible: boolean;
}

const MenuWallpaper: React.FC<MenuWallpaperProps> = ({ menuVisible }) => {
  const {
    getListOfWallpapers,
    setCurrentWallpaper,
    handleMenuWallpaper,
    menuWallpaperIsVisible,
  } = useWallpaperHook();

  const handleSetWallpaper = (url: string) => {
    return () => {
      setCurrentWallpaper(url);
      handleMenuWallpaper();
    };
  };

  return (
    <S.Container $isVisible={menuWallpaperIsVisible && menuVisible}>
      {getListOfWallpapers().map((wallpaper) => (
        <S.ButtonCard
          key={wallpaper.id}
          title="background"
          type="button"
          onClick={handleSetWallpaper(wallpaper.url)}
        >
          <img src={wallpaper.url} alt="" />
        </S.ButtonCard>
      ))}
    </S.Container>
  );
};

export default MenuWallpaper;
