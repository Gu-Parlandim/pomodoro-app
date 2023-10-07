import * as S from "./styles";
import useWallpaperHook from "../../hooks/useWallpaperHook";
import { AnimatePresence } from "framer-motion";
import animation from "./animation";

/* interface MenuWallpaperProps {
  menuVisible: boolean;
} */

const MenuWallpaper: React.FC = () => {
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
    <AnimatePresence>
      {menuWallpaperIsVisible && (
        <S.Container
          variants={animation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
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
      )}
    </AnimatePresence>
  );
};

export default MenuWallpaper;
