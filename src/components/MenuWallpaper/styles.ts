import styled from "styled-components";

interface ContainerProps {
  $isVisible: boolean;
}

const Container = styled.div<ContainerProps>`
  display: ${(props) => (props.$isVisible ? "grid" : "none")};
  position: absolute;
  bottom: 86px;
  width: 220px;
  height: 260px;
  background: #fff;
  left: 10px;
  border-radius: 6px;
  background-color: #282a36f7;
  overflow-y: scroll;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.5px;
  padding: 5px;
  user-select: none;

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
