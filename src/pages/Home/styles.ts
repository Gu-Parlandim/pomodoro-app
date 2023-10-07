import styled from "styled-components";

interface WallpaperProps {
  $currentWallpaper: string;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const WrapperWallpaper = styled.div<WallpaperProps>`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: url(${(props) => props.$currentWallpaper});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-origin: border-box;
`;

export { Container, WrapperWallpaper };
