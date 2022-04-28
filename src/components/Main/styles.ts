import { ReactNode } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 445px;
`;

const TitleContainer = styled.div`
  display: grid;
  grid-row-gap: 14px;
  margin-bottom: 25px;
`;

const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 20px;
  line-height: 30px;

  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 68px;
  line-height: 109%;

  color: ${({ theme }) => theme.colors.white};
`;

const Paragraph = styled.p`
  width: 445px;

  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: ${({ theme }) => theme.fontWeight.tiny};
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;

  color: ${({ theme }) => theme.colors.white};
`;

interface ButtonProps {
  children: ReactNode;
  border?: boolean;
}

const Button = styled.button<ButtonProps>`
  width: 225px;
  height: 45px;

  background-color: ${({ theme, border }) =>
    border ? "transparent" : theme.colors.green};

  transform: skew(-30deg);
  border: ${({ border }) => (border ? `2px solid #658e76` : "")};
  div {
    p {
    }
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    transform: skew(0);
    transform: skew(30deg);
  }
`;

interface TextButtonProps {
  margin?: boolean;
}

const TextButton = styled.p<TextButtonProps>`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: ${({ theme }) => theme.fontWeight.small};
  font-size: 16px;
  line-height: 180%;
  /* identical to box height, or 29px */
  margin-left: ${({ margin }) => (margin ? "10px" : "")};
  text-transform: uppercase;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 46px;
  display: flex;
  flex-direction: row;

  button:last-child {
    margin-left: 18px;
  }
`;

export {
  MainContainer,
  TitleContainer,
  SubTitle,
  Title,
  Paragraph,
  Button,
  TextButton,
  ButtonContainer,
};
