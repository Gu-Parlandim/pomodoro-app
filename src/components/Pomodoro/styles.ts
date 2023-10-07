import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 330px;
  height: 260px;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  flex-direction: column;

  background: #443e3e33;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(68, 62, 62, 0.3);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 1.2rem;
`;

const ButtonsHeader = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: #fff;
`;

const Body = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: none;
  font-size: 2.3rem;
  color: #fff;

  &[type="number"] {
    -moz-appearance: textfield;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;

const Separator = styled.span`
  background-color: #fff;
  width: 5px;
  height: 5px;
  position: relative;
  border-radius: 50%;
  margin: 0 10px;
  top: -5px;

  &::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #fff;
    top: 10px;
    left: 0;
  }
`;

const ButtonInit = styled.button`
  border: none;
  background: #ffffff47;
  cursor: pointer;
  color: #000;
  font-size: 1.3rem;
  margin: 20px auto;
  width: 100px;
  border-radius: 8px;
  padding: 3px 8px;
`;

export {
  Container,
  Header,
  ButtonsHeader,
  Title,
  Body,
  Input,
  Separator,
  ButtonInit,
};
