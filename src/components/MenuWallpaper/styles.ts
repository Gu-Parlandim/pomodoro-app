import { motion } from "framer-motion";
import styled from "styled-components";

/* interface ContainerProps {
  $isVisible: boolean;
} */

const Container = styled(motion.div)`
  position: absolute;
  bottom: 86px;
  width: 220px;
  max-height: 260px;
  height: 100%;
  min-height: 180px;
  left: 10px;
  border-radius: 6px;
  //background-color: #282a36f7;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.5px;
  padding: 5px;
  user-select: none;

  background: #443e3e33; //rgba(68, 62, 62, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(68, 62, 62, 0.3);

  &::-webkit-scrollbar {
    width: 2px;
    height: 1px;
  }

  &::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 1px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const ButtonCard = styled.button`
  width: 100%;
  height: 100%;
  background: transparent;
  cursor: pointer;
  border: none;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
`;

export { Container, ButtonCard };
