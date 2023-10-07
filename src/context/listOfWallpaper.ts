import FistImage from "../assets/wallpapers/dive-into-anything.gif";
import MikuGif from "../assets/wallpapers/miku-lofi.gif";
import LofiAesthetic from "../assets/wallpapers/lo-fi-aesthetic-gifs-1.gif";
import GifsDeAnime from "../assets/wallpapers/gifs-de-anime-lofi-9.gif";
import A1 from "../assets/wallpapers/a1.gif";
import A2 from "../assets/wallpapers/a2.gif";
import A3 from "../assets/wallpapers/a3.gif";
import A4 from "../assets/wallpapers/a4.gif";
import A5 from "../assets/wallpapers/a5.gif";
import A6 from "../assets/wallpapers/a6.gif";
import A7 from "../assets/wallpapers/a7.gif";
import A8 from "../assets/wallpapers/a8.gif";
import A9 from "../assets/wallpapers/a9.gif";

export interface WallpaperList {
  url: string;
  id: string;
}

const listOfWallpapers: WallpaperList[] = [
  {
    id: "1",
    url: FistImage,
  },
  {
    id: "2",
    url: MikuGif,
  },
  {
    id: "3",
    url: LofiAesthetic,
  },
  {
    id: "4",
    url: GifsDeAnime,
  },
  {
    id: "5",
    url: A1,
  },
  {
    id: "6",
    url: A2,
  },
  {
    id: "7",
    url: A3,
  },
  {
    id: "8",
    url: A4,
  },
  {
    id: "9",
    url: A5,
  },
  {
    id: "10",
    url: A6,
  },
  {
    id: "11",
    url: A7,
  },
  {
    id: "12",
    url: A8,
  },
  {
    id: "13",
    url: A9,
  },
];

export default listOfWallpapers;
