import styled from "styled-components";

interface WrapperButtonsProps {
  $isVisible: boolean;
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
`;

const WrapperButtons = styled.div<WrapperButtonsProps>`
  position: absolute;
  width: 400px;
  bottom: 20px;
  background-color: #282a36f7; //#282a3680;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  color: #efefef;
  border-radius: 6px;
  //display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  cursor: pointer;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  border: none;
  background: transparent;
  border-radius: 6px;
  user-select: none;
  min-width: 88px;

  & span {
    font-size: 1rem;
    margin-top: 5px;
    color: #c1c1c1;
  }

  &:hover {
    & span {
      color: #000000;
    }

    & span[role="img"] {
      color: #000000;
    }
  }
`;

export { Container, WrapperButtons, Button };
