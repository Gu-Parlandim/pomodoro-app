import {
  PictureFilled,
  ClockCircleFilled,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons";
import * as S from "./styles";
import { useCallback, useState } from "react";
import MenuWallpaper from "../MenuWallpaper";
import useWallpaperHook from "../../hooks/useWallpaperHook";
import useScreenMode from "../../hooks/useScreenMode";
import { AnimatePresence } from "framer-motion";
import animation from "./animation";

const MenuButtons: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { handleMenuWallpaper } = useWallpaperHook();
  const { toggleScreenMode, getCurrentScreenMode } = useScreenMode();

  const handleMenu = useCallback(() => {
    setIsVisible((prevState) => !prevState);

    if (isVisible) {
      handleMenuWallpaper({ closed: true });
    }
  }, [handleMenuWallpaper, isVisible]);

  const handleMenuWallpaperToggle = useCallback(() => {
    handleMenuWallpaper();
  }, [handleMenuWallpaper]);

  return (
    <>
      <S.Container onClick={handleMenu}></S.Container>

      <AnimatePresence>
        {isVisible && (
          <S.WrapperButtons
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <MenuWallpaper />

            <S.Button onClick={handleMenuWallpaperToggle} type="button">
              <PictureFilled style={{ fontSize: "25px" }} color="#c1c1c1" />
              <span>Tema</span>
            </S.Button>

            <S.Button onClick={toggleScreenMode} type="button">
              {getCurrentScreenMode() === "fullscreen" ? (
                <FullscreenExitOutlined
                  style={{ fontSize: "25px" }}
                  color="#c1c1c1"
                />
              ) : (
                <FullscreenOutlined
                  style={{ fontSize: "25px" }}
                  color="#c1c1c1"
                />
              )}

              <span>
                {getCurrentScreenMode() == "fullscreen" ? "Exit" : "FullScreen"}
              </span>
            </S.Button>

            <S.Button type="button">
              <ClockCircleFilled style={{ fontSize: "25px" }} color="#c1c1c1" />
              <span>Pomodoro</span>
            </S.Button>
          </S.WrapperButtons>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuButtons;
