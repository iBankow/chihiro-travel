import styled from "styled-components";

interface LogoProps {
  height?: string;
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 75px;
`;

const Socials = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
`;

const Logo = styled.img<LogoProps>`
  height: ${(props) => (props.height ? props.height : "100%")};
`;

const SocialButton = styled.a`
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: transparent;
  border: none;
`;

export { HeaderContainer, Socials, Logo, SocialButton };
